import os
import sys
import json
import logging
import requests
from dotenv import load_dotenv

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Load environment variables from frontend .env file
load_dotenv('/app/frontend/.env')
SUPABASE_URL = os.environ.get('REACT_APP_SUPABASE_URL')
SUPABASE_KEY = os.environ.get('REACT_APP_SUPABASE_ANON_KEY')

if not SUPABASE_URL or not SUPABASE_KEY:
    logger.error("Supabase credentials not found in environment variables")
    sys.exit(1)

logger.info(f"Using Supabase URL: {SUPABASE_URL}")

# Test data for waitlist form submission - updated to match the existing table schema
test_data = {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@university.edu",
    "institution": "Test University",
    "role": "Admissions Director",
    "student_count": "1,000 - 5,000"
}

def test_supabase_connection():
    """Test basic Supabase connection"""
    logger.info("Testing Supabase connection")
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}"
    }
    
    try:
        response = requests.get(
            f"{SUPABASE_URL}/rest/v1/",
            headers=headers
        )
        
        if response.status_code == 200:
            logger.info("✅ Successfully connected to Supabase")
            return True
        else:
            logger.error(f"❌ Failed to connect to Supabase: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        logger.error(f"❌ Error connecting to Supabase: {str(e)}")
        return False

def test_waitlist_table_schema():
    """Test if the waitlist table has the expected schema"""
    logger.info("Testing waitlist table schema")
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}"
    }
    
    try:
        # Get the OpenAPI schema which includes table definitions
        response = requests.get(
            f"{SUPABASE_URL}/rest/v1/",
            headers=headers
        )
        
        if response.status_code != 200:
            logger.error(f"❌ Failed to get schema: {response.status_code} - {response.text}")
            return False
        
        schema = response.json()
        
        # Check if waitlist table exists in the schema
        if "/waitlist" not in schema.get("paths", {}):
            logger.error("❌ Waitlist table not found in schema")
            return False
        
        # Check if the table has the expected columns
        waitlist_def = schema.get("definitions", {}).get("waitlist", {})
        properties = waitlist_def.get("properties", {})
        
        expected_columns = [
            "first_name", "last_name", "email", "institution", 
            "role", "student_count", "created_at"
        ]
        
        missing_columns = [col for col in expected_columns if col not in properties]
        
        if missing_columns:
            logger.error(f"❌ Missing columns in waitlist table: {', '.join(missing_columns)}")
            return False
        
        logger.info("✅ Waitlist table has the expected schema")
        return True
    except Exception as e:
        logger.error(f"❌ Error checking table schema: {str(e)}")
        return False

def test_insert_permissions():
    """Test if we have permission to insert into the waitlist table"""
    logger.info("Testing insert permissions for waitlist table")
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }
    
    try:
        response = requests.post(
            f"{SUPABASE_URL}/rest/v1/waitlist",
            headers=headers,
            json=test_data
        )
        
        if response.status_code == 201:
            logger.info("✅ Successfully inserted record into waitlist table")
            logger.info(f"Response: {response.json()}")
            return True
        elif response.status_code == 403 or "permission denied" in response.text.lower():
            logger.error("❌ Permission denied when inserting into waitlist table")
            logger.error("This is likely due to Row Level Security (RLS) policies")
            logger.error("You need to create a policy that allows anonymous inserts")
            return False
        else:
            logger.error(f"❌ Failed to insert record: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        logger.error(f"❌ Error testing insert permissions: {str(e)}")
        return False

def suggest_rls_fixes():
    """Suggest SQL commands to fix RLS issues"""
    logger.info("\n=== Suggested SQL to Fix RLS Issues ===")
    logger.info("Run these commands in the Supabase SQL Editor:")
    logger.info("""
-- Enable RLS on the waitlist table (if not already enabled)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts to waitlist"
ON public.waitlist
FOR INSERT
TO anon
USING (true);

-- If you also want to allow anonymous users to read the data
CREATE POLICY "Allow anonymous reads from waitlist"
ON public.waitlist
FOR SELECT
TO anon
USING (true);

-- Grant insert privileges to the anonymous role
GRANT INSERT ON public.waitlist TO anon;
""")

def main():
    """Run all Supabase tests"""
    logger.info("Starting Supabase integration tests")
    
    # Test connection
    connection_ok = test_supabase_connection()
    if not connection_ok:
        logger.error("Cannot proceed with tests due to connection issues")
        return
    
    # Test table schema
    schema_ok = test_waitlist_table_schema()
    
    # Test insert permissions
    insert_ok = test_insert_permissions()
    
    # Summary
    logger.info("\n=== Supabase Integration Test Summary ===")
    logger.info(f"Connection: {'✅ OK' if connection_ok else '❌ Failed'}")
    logger.info(f"Table Schema: {'✅ OK' if schema_ok else '❌ Failed'}")
    logger.info(f"Insert Permissions: {'✅ OK' if insert_ok else '❌ Failed'}")
    
    if not insert_ok:
        suggest_rls_fixes()
        
        # Also suggest frontend code changes if needed
        if schema_ok:
            logger.info("\n=== Frontend Code Changes ===")
            logger.info("Ensure your frontend code is using the correct field names when inserting data:")
            logger.info("""
// In your frontend code, make sure you're using these field names:
{
  first_name: formData.firstName,
  last_name: formData.lastName,
  email: formData.workEmail,  // Not work_email
  institution: formData.institutionName,  // Not institution_name
  role: formData.role,
  student_count: formData.studentCount
}
""")

if __name__ == "__main__":
    main()