import requests
import json
import os
import unittest
from dotenv import load_dotenv
import sys
import logging
import time
from supabase import create_client, Client

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Load environment variables from frontend .env file to get the backend URL
load_dotenv('/app/frontend/.env')
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL')
SUPABASE_URL = os.environ.get('REACT_APP_SUPABASE_URL')
SUPABASE_KEY = os.environ.get('REACT_APP_SUPABASE_ANON_KEY')

if not BACKEND_URL:
    logger.error("REACT_APP_BACKEND_URL not found in environment variables")
    sys.exit(1)

if not SUPABASE_URL or not SUPABASE_KEY:
    logger.error("Supabase environment variables not found")
    sys.exit(1)

# Ensure the URL has the /api prefix for backend routes
API_URL = f"{BACKEND_URL}/api"
logger.info(f"Using API URL: {API_URL}")

class BackendAPITest(unittest.TestCase):
    """Test suite for backend API endpoints"""

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        logger.info("Testing root endpoint")
        response = requests.get(f"{API_URL}/")
        
        self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
        data = response.json()
        self.assertEqual(data.get("message"), "Hello World", "Expected 'Hello World' message")
        logger.info("Root endpoint test passed")

    def test_status_post_endpoint(self):
        """Test the POST /status endpoint"""
        logger.info("Testing POST /status endpoint")
        payload = {"client_name": "TestClient"}
        response = requests.post(f"{API_URL}/status", json=payload)
        
        self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
        data = response.json()
        self.assertEqual(data.get("client_name"), "TestClient", "Expected client_name to be 'TestClient'")
        self.assertIn("id", data, "Expected response to contain 'id'")
        self.assertIn("timestamp", data, "Expected response to contain 'timestamp'")
        logger.info("POST /status endpoint test passed")

    def test_status_get_endpoint(self):
        """Test the GET /status endpoint"""
        logger.info("Testing GET /status endpoint")
        response = requests.get(f"{API_URL}/status")
        
        self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
        data = response.json()
        self.assertIsInstance(data, list, "Expected response to be a list")
        logger.info("GET /status endpoint test passed")

    def test_supabase_integration(self):
        """
        Test the Supabase integration by checking if the frontend environment variables are properly set
        and if the Supabase client can successfully insert data into the waitlist table.
        """
        logger.info("Testing Supabase integration")
        
        # Verify environment variables
        self.assertIsNotNone(SUPABASE_URL, "REACT_APP_SUPABASE_URL not found in environment variables")
        self.assertIsNotNone(SUPABASE_KEY, "REACT_APP_SUPABASE_ANON_KEY not found in environment variables")
        self.assertTrue(SUPABASE_URL.startswith('https://'), "Supabase URL should start with https://")
        
        try:
            # Initialize Supabase client
            supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
            logger.info("Successfully initialized Supabase client")
            
            # Test data for waitlist submission
            test_data = {
                "first_name": "Sarah",
                "last_name": "Johnson",
                "email": "sarah.johnson@testuni.edu",
                "institution": "Test University",
                "role": "Admissions Director",
                "student_count": "1,000 - 5,000"
            }
            
            # Attempt to insert data into the waitlist table
            logger.info(f"Attempting to insert test data into Supabase waitlist table: {test_data}")
            result = supabase.table('waitlist').insert(test_data).execute()
            
            # Check if the insert was successful
            self.assertIsNotNone(result.data, "No data returned from Supabase insert operation")
            self.assertTrue(len(result.data) > 0, "No records were inserted")
            self.assertEqual(result.data[0]['first_name'], test_data['first_name'], "First name mismatch in inserted data")
            self.assertEqual(result.data[0]['email'], test_data['email'], "Email mismatch in inserted data")
            
            logger.info("Successfully inserted test data into Supabase waitlist table")
            logger.info("Supabase integration test passed")
            
        except Exception as e:
            logger.error(f"Error testing Supabase integration: {str(e)}")
            self.fail(f"Supabase integration test failed: {str(e)}")
            
    def test_supabase_integration_with_rest_api(self):
        """
        Test the Supabase integration using direct REST API calls.
        This test verifies that the RLS policies have been fixed and allow anonymous inserts.
        """
        logger.info("Testing Supabase integration with direct REST API")
        
        # Verify environment variables
        self.assertIsNotNone(SUPABASE_URL, "REACT_APP_SUPABASE_URL not found in environment variables")
        self.assertIsNotNone(SUPABASE_KEY, "REACT_APP_SUPABASE_ANON_KEY not found in environment variables")
        
        headers = {
            "apikey": SUPABASE_KEY,
            "Content-Type": "application/json"
        }
        
        # Test data from the review request
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
            
            # Check if the insert was successful
            self.assertEqual(response.status_code, 201, f"Expected status code 201, got {response.status_code}")
            logger.info("REST API insert successful (201 Created)")
            
            # Since we can't verify the data with a GET request due to RLS policies,
            # we'll consider the test successful if the POST request returns 201
            logger.info("Supabase integration with REST API test passed")
            
        except Exception as e:
            logger.error(f"Error testing Supabase integration with REST API: {str(e)}")
            self.fail(f"Supabase integration with REST API test failed: {str(e)}")
            
    def test_updated_call_centre_agents_field(self):
        """
        Test the updated 'Call Centre Agents' field in the waitlist form.
        This test verifies that the form can successfully submit data with the new field.
        """
        logger.info("Testing updated 'Call Centre Agents' field in waitlist form")
        
        # Verify environment variables
        self.assertIsNotNone(SUPABASE_URL, "REACT_APP_SUPABASE_URL not found in environment variables")
        self.assertIsNotNone(SUPABASE_KEY, "REACT_APP_SUPABASE_ANON_KEY not found in environment variables")
        
        headers = {
            "apikey": SUPABASE_KEY,
            "Content-Type": "application/json"
        }
        
        # Test data from the review request
        test_data = {
            "first_name": "Michael",
            "last_name": "Smith",
            "email": "michael.smith@callcentre.com",
            "institution": "Global Call Solutions",
            "role": "Operations Director",
            "student_count": "26-50"  # Using the new call centre agents value
        }
        
        try:
            # Try to insert data using direct REST API
            response = requests.post(
                f"{SUPABASE_URL}/rest/v1/waitlist",
                headers=headers,
                json=test_data
            )
            
            logger.info(f"Call Centre Agents field test - REST API Status Code: {response.status_code}")
            
            # Check if the insert was successful
            self.assertEqual(response.status_code, 201, f"Expected status code 201, got {response.status_code}")
            logger.info("Call Centre Agents field test - REST API insert successful (201 Created)")
            
            # Test with different call centre agent values
            for agent_count in ["0-15", "101-200", "200+"]:
                test_data["student_count"] = agent_count
                test_data["email"] = f"test.{agent_count.replace('-', '_').replace('+', 'plus')}@callcentre.com"
                
                response = requests.post(
                    f"{SUPABASE_URL}/rest/v1/waitlist",
                    headers=headers,
                    json=test_data
                )
                
                logger.info(f"Call Centre Agents field test with {agent_count} - REST API Status Code: {response.status_code}")
                self.assertEqual(response.status_code, 201, f"Expected status code 201 for {agent_count}, got {response.status_code}")
            
            logger.info("Call Centre Agents field test passed for all dropdown options")
            
        except Exception as e:
            logger.error(f"Error testing Call Centre Agents field: {str(e)}")
            self.fail(f"Call Centre Agents field test failed: {str(e)}")


if __name__ == "__main__":
    unittest.main()
