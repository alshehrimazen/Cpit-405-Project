from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

# Initialize FastAPI
app = FastAPI()

# Allow requests from React frontend (Vite dev server runs on port 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ollama endpoint (local)
OLLAMA_URL = "http://localhost:11434/api/generate"

# Request body model
class PlanRequest(BaseModel):
    user_input: str

# POST route to handle Umrah plan generation
@app.post("/generate_plan")
def generate_plan(req: PlanRequest):
    prompt = f"Create a detailed Umrah plan based on the following details:\n{req.user_input}"

    payload = {
        "model": "gemma:2b",  # You can change to "gemma:2b" for faster model
        "prompt": prompt,
        "stream": False
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload)

        if response.status_code == 200:
            result = response.json()
            print("🔹 Ollama raw result:", result)  # Logging for debugging
            return {"response": result.get("response", "No response from model.")}
        else:
            print("🔴 Ollama error:", response.status_code, response.text)
            return {"error": f"Ollama error: {response.status_code} - {response.text}"}

    except Exception as e:
        print("❌ Exception while connecting to Ollama:", str(e))
        return {"error": f"Exception while connecting to Ollama: {str(e)}"}
