import requests

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"
MODEL = "mistral"

def ask_ollama(prompt: str) -> str:
    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "prompt": prompt,
            "stream": False
        }
    )

    return response.json()["response"]
