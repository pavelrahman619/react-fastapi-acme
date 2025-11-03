# React-FastAPI ACME Project

A legal document search application with a React frontend and FastAPI backend.

## Setup Instructions

### Backend (FastAPI)

1. Navigate to the backend directory:
```bash
cd backend
```

2. Activate the virtual environment:
```bash
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate
```

3. Install dependencies (if not already installed):
```bash
pip install fastapi uvicorn pydantic
```

4. Run the backend server:
```bash
uvicorn main:app --reload
```

The backend will be available at `http://127.0.0.1:8000`

### Frontend (React + Vite)

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure API URL:
   - Create a `.env` file in the frontend directory
   - Add: `VITE_API_URL=http://127.0.0.1:8000`
   - Default is already set to `http://127.0.0.1:8000` if no env var is provided

4. Run the development server:
```bash
npm run dev
```

The frontend will typically run at `http://localhost:5173`

## CORS Configuration

The backend is configured with CORS middleware to allow requests from:
- `http://localhost:5173` (Vite default dev server)
- `http://localhost:3000` (Alternative React dev server)
- `http://127.0.0.1:5173`
- `http://127.0.0.1:3000`

To add more allowed origins, edit the `origins` list in `backend/main.py`.

## API Documentation

Once the backend is running, visit the interactive API docs at:
- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

## Future Implementation Plans
- Make the law doc files into actual pdfs to read write into system
- multiple file detection
- real time search
- add LangChain for LLM searching
- Add database to search through large datasets
- Add S3 Bucket to read write from cloud