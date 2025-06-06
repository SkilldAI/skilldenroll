import requests
import json
import os
import unittest
from dotenv import load_dotenv
import sys
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Load environment variables from frontend .env file to get the backend URL
load_dotenv('/app/frontend/.env')
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL')

if not BACKEND_URL:
    logger.error("REACT_APP_BACKEND_URL not found in environment variables")
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
        Test the Supabase integration by checking if the frontend environment variables are properly set.
        Note: This test doesn't actually test the Supabase API as that's handled client-side in the frontend.
        """
        logger.info("Testing Supabase environment variables")
        
        # Load environment variables from frontend .env file
        load_dotenv('/app/frontend/.env')
        supabase_url = os.environ.get('REACT_APP_SUPABASE_URL')
        supabase_key = os.environ.get('REACT_APP_SUPABASE_ANON_KEY')
        
        self.assertIsNotNone(supabase_url, "REACT_APP_SUPABASE_URL not found in environment variables")
        self.assertIsNotNone(supabase_key, "REACT_APP_SUPABASE_ANON_KEY not found in environment variables")
        
        # Verify the URL format
        self.assertTrue(supabase_url.startswith('https://'), "Supabase URL should start with https://")
        
        logger.info("Supabase environment variables test passed")


if __name__ == "__main__":
    unittest.main()
