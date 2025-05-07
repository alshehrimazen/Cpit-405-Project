from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

# Initialize FastAPI
app = FastAPI()

# Allow requests from React frontend (Vite dev server runs on port 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://alshehrimazen.github.io/", "http://localhost:5173"],
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
    prompt = f"""
Create Umrah plan in **Makkah only**.

Each day must include: (you should now how many days the plan is from the user input)
- Morning, Afternoon, Evening, and Night activities
- Visits to Islamic sites like Masjid al-Haram, Jabal al-Nour
- Local restaurant and hotel suggestions

Do not mention other cities. Format the output using Markdown headers and bullet points.

Budget summary at the end

User input:
{req.user_input}
"""

    payload = {
        "model": "llama3:8b",  # You can change to "gemma:2b" for faster model
        "prompt": prompt,
        "stream": False,
        "num_predict": 100
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload)

        if response.status_code == 200:
            # print("🟢 Ollama response:", response.text)
            result = response.json()
            # print("🔹 Ollama raw result:", result)  # Logging for debugging
            return {"response": result.get("response", "No response from model.")}
        else:
            print("🔴 Ollama error:", response.status_code, response.text)
            return {"error": f"Ollama error: {response.status_code} - {response.text}"}

    except Exception as e:
        print("❌ Exception while connecting to Ollama:", str(e))
        return {"error": f"Exception while connecting to Ollama: {str(e)}"}
