// API Configuration
// For development, the API URL should point to your local FastAPI server
// For production, update this to your deployed backend URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

// API Endpoints
export const API_ENDPOINTS = {
  GENERATE: '/generate',
};

