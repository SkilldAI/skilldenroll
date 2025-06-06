import requests
import os
from dotenv import load_dotenv
import logging

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

logger.info(f"Using Supabase URL: {SUPABASE_URL}")

# Headers for Supabase API requests
headers = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json"
}

# Test 1: List all tables in the public schema
logger.info("Attempting to list tables in the public schema...")
try:
    response = requests.get(
        f"{SUPABASE_URL}/rest/v1/",
        headers=headers
    )
    logger.info(f"Status code: {response.status_code}")
    logger.info(f"Response: {response.text}")
except Exception as e:
    logger.error(f"Error: {str(e)}")

# Test 2: Try to access a known system table
logger.info("\nAttempting to access system information...")
try:
    response = requests.get(
        f"{SUPABASE_URL}/rest/v1/pg_catalog.pg_tables?select=schemaname,tablename&limit=10",
        headers=headers
    )
    logger.info(f"Status code: {response.status_code}")
    logger.info(f"Response: {response.text}")
except Exception as e:
    logger.error(f"Error: {str(e)}")

# Test 3: Try to create a table using the REST API (this will likely fail)
logger.info("\nAttempting to create a table using REST API (expected to fail)...")
try:
    response = requests.post(
        f"{SUPABASE_URL}/rest/v1/rpc/create_table",
        headers=headers,
        json={
            "table_name": "waitlist",
            "columns": [
                {"name": "id", "type": "serial primary key"},
                {"name": "first_name", "type": "text"},
                {"name": "last_name", "type": "text"},
                {"name": "work_email", "type": "text"},
                {"name": "institution_name", "type": "text"},
                {"name": "role", "type": "text"},
                {"name": "student_count", "type": "text"},
                {"name": "created_at", "type": "timestamp with time zone default now()"}
            ]
        }
    )
    logger.info(f"Status code: {response.status_code}")
    logger.info(f"Response: {response.text}")
except Exception as e:
    logger.error(f"Error: {str(e)}")

logger.info("\nSuggested next steps:")
logger.info("1. Access the Supabase dashboard at https://app.supabase.com")
logger.info("2. Navigate to your project")
logger.info("3. Go to the SQL Editor")
logger.info("4. Run the following SQL to create the waitlist table:")
logger.info("""
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

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" 
ON waitlist
FOR INSERT
TO anon
USING (true);
""")