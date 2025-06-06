import requests
import json
import os
import unittest
from dotenv import load_dotenv
import sys
import logging
import time

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

if __name__ == "__main__":
    unittest.main()
