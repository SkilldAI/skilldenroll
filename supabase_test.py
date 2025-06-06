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

# Test data for waitlist form submission
test_data = {
    "first_name": "John",
    "last_name": "Doe",
    "work_email": "john.doe@university.edu",
    "institution_name": "Test University",
    "role": "Admissions Director",
    "student_count": "1,000 - 5,000",
    "created_at": "2025-04-05T12:00:00.000Z"
}

# SQL statements for creating the waitlist table and setting up RLS policies
CREATE_TABLE_SQL = """
CREATE TABLE IF NOT EXISTS waitlist (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    work_email TEXT NOT NULL,
    institution_name TEXT NOT NULL,
    role TEXT NOT NULL,
    student_count TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
"""

ENABLE_RLS_SQL = """
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
"""

CREATE_INSERT_POLICY_SQL = """
CREATE POLICY "Allow anonymous inserts" 
ON waitlist
FOR INSERT
TO anon
USING (true);
"""

def test_supabase_table_exists():
    """Test if the 'waitlist' table exists in Supabase"""
    logger.info("Testing if 'waitlist' table exists in Supabase")
    
    # Use Supabase REST API to check if table exists by attempting to get table info
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json"
    }
    
    response = requests.get(
        f"{SUPABASE_URL}/rest/v1/waitlist?select=count&limit=0",
        headers=headers
    )
    
    if response.status_code == 200:
        logger.info("✅ 'waitlist' table exists in Supabase")
        return True
    elif response.status_code == 404 or response.status_code == 401:
        logger.error(f"❌ 'waitlist' table does not exist or access denied: {response.status_code} - {response.text}")
        return False
    else:
        logger.error(f"❌ Error checking 'waitlist' table: {response.status_code} - {response.text}")
        return False

def create_waitlist_table():
    """Create the waitlist table in Supabase if it doesn't exist"""
    logger.info("Attempting to create 'waitlist' table in Supabase")
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json"
    }
    
    # Unfortunately, we can't create tables using the REST API directly
    # We would need to use the Supabase Management API or the Supabase dashboard
    logger.error("Cannot automatically create the table via REST API")
    logger.error("Please create the 'waitlist' table manually in the Supabase dashboard with the following SQL:")
    logger.error(CREATE_TABLE_SQL)
    logger.error("\nThen enable RLS and create an insert policy:")
    logger.error(ENABLE_RLS_SQL)
    logger.error(CREATE_INSERT_POLICY_SQL)
    
    return False

def test_supabase_insert():
    """Test inserting a record into the 'waitlist' table"""
    logger.info("Testing insert into 'waitlist' table")
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }
    
    response = requests.post(
        f"{SUPABASE_URL}/rest/v1/waitlist",
        headers=headers,
        json=test_data
    )
    
    if response.status_code == 201:
        logger.info("✅ Successfully inserted record into 'waitlist' table")
        logger.info(f"Response: {response.json()}")
        return True
    else:
        logger.error(f"❌ Failed to insert record: {response.status_code} - {response.text}")
        # Check if this might be an RLS policy issue
        if response.status_code == 403:
            logger.error("This appears to be an RLS (Row Level Security) policy issue")
            logger.error("RLS policies might be blocking inserts from the anonymous key")
        return False

def test_supabase_rls_policies():
    """Check for RLS policies on the 'waitlist' table"""
    logger.info("Checking for RLS policies on 'waitlist' table")
    
    # This is a workaround as there's no direct API to check RLS policies
    # We'll try to insert and see if we get a permission error
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json"
    }
    
    # First check if we can read from the table
    read_response = requests.get(
        f"{SUPABASE_URL}/rest/v1/waitlist?select=*&limit=1",
        headers=headers
    )
    
    if read_response.status_code == 200:
        logger.info("✅ Read access to 'waitlist' table is allowed")
    else:
        logger.warning(f"⚠️ Read access to 'waitlist' table might be restricted: {read_response.status_code}")
    
    # The actual insert test will be performed by test_supabase_insert()
    # This function is mainly for logging purposes

def main():
    """Run all Supabase tests"""
    logger.info("Starting Supabase integration tests")
    
    # Test if table exists
    table_exists = test_supabase_table_exists()
    if not table_exists:
        logger.info("Attempting to provide guidance for table creation...")
        create_waitlist_table()
        logger.info("\nAfter creating the table, run this test script again.")
        return
    
    # Check RLS policies
    test_supabase_rls_policies()
    
    # Test insert
    insert_success = test_supabase_insert()
    
    # Summary
    logger.info("\n=== Supabase Integration Test Summary ===")
    logger.info(f"Table Exists: {'✅ Yes' if table_exists else '❌ No'}")
    logger.info(f"Insert Successful: {'✅ Yes' if insert_success else '❌ No'}")
    
    if not insert_success and table_exists:
        logger.info("\n=== Troubleshooting Tips ===")
        logger.info("1. Check if RLS policies are enabled on the 'waitlist' table")
        logger.info("2. If RLS is enabled, ensure there's a policy allowing inserts for the anonymous key")
        logger.info("3. Verify the table schema matches the expected fields:")
        for field in test_data.keys():
            logger.info(f"   - {field}")
        logger.info("4. Check if the anon key has the necessary permissions")
        logger.info("\nSQL to fix RLS policies:")
        logger.info(ENABLE_RLS_SQL)
        logger.info(CREATE_INSERT_POLICY_SQL)

if __name__ == "__main__":
    main()