from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost:5173",  # Vite default dev server
    "http://localhost:3000",  # Alternative React dev server
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Mocked data
LEGAL_DOCS = [
    {"id": 1, "title": "Employment Contract Law", "summary": "This covers employer-employee obligations."},
    {"id": 2, "title": "Intellectual Property Act", "summary": "Covers rights related to creative work."},
    {"id": 3, "title": "Data Privacy Regulation", "summary": "Outlines data handling and protection rules."},
]

class Query(BaseModel):
    query: str

@app.post("/generate")
def generate_response(payload: Query):
    query = payload.query.lower()
    for doc in LEGAL_DOCS:
        if doc["title"].lower().find(query) != -1 or query in doc["summary"].lower():
            return {"result": f"Found related document: {doc['title']}. Summary: {doc['summary']}"}
    return {"result": "No relevant documents found."}
