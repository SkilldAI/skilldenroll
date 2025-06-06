import os
from dotenv import load_dotenv
from supabase import create_client, Client
import logging
import requests
import json

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
    logger.error("Supabase environment variables not found")
    exit(1)

logger.info(f"Supabase URL: {SUPABASE_URL}")
logger.info(f"Supabase Key: {SUPABASE_KEY[:10]}...")

# Function to test direct REST API access
def test_rest_api():
    logger.info("Testing direct REST API access...")
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json"
    }
    
    test_data = {
        "first_name": "Emma",
        "last_name": "Davis",
        "email": "emma.davis@university.edu",
        "institution": "University of Testing",
        "role": "Marketing Director",
        "student_count": "5,000 - 10,000"
    }
    
    try:
        # Try to insert data using direct REST API
        response = requests.post(
            f"{SUPABASE_URL}/rest/v1/waitlist",
            headers=headers,
            json=test_data
        )
        
        logger.info(f"REST API Status Code: {response.status_code}")
        
        if response.status_code == 201:
            logger.info(f"REST API Response: {response.json()}")
        else:
            logger.error(f"REST API Error: {response.text}")
            
    except Exception as e:
        logger.error(f"REST API Error: {str(e)}")

# Function to test Supabase client
def test_supabase_client():
    logger.info("Testing Supabase client...")
    
    try:
        # Initialize Supabase client
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        logger.info("Successfully initialized Supabase client")
        
        # Test data for waitlist submission
        test_data = {
            "first_name": "Emma",
            "last_name": "Davis",
            "email": "emma.davis@university.edu",
            "institution": "University of Testing",
            "role": "Marketing Director",
            "student_count": "5,000 - 10,000"
        }
        
        # Attempt to insert data into the waitlist table
        logger.info(f"Attempting to insert test data into Supabase waitlist table: {test_data}")
        result = supabase.table('waitlist').insert(test_data).execute()
        
        # Check if the insert was successful
        if result.data:
            logger.info(f"Successfully inserted data: {result.data}")
        else:
            logger.error(f"No data returned from insert operation")
        
    except Exception as e:
        logger.error(f"Error testing Supabase integration: {str(e)}")
        
        # If there's an error, try to get more information about the table structure
        try:
            logger.info("Attempting to get table information...")
            
            # Try to select from the table to see if it exists and what permissions we have
            result = supabase.table('waitlist').select('*').limit(1).execute()
            logger.info(f"Select result: {result.data}")
        except Exception as select_error:
            logger.error(f"Error selecting from waitlist table: {str(select_error)}")

# Run the tests
test_rest_api()
test_supabase_client()