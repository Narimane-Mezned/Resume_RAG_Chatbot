from app.retriever import retrieve_resumes
from app.ollama_client import ask_ollama

def run_pipeline(user_query: str) -> str:
    # 1. Retrieve relevant resumes
    results = retrieve_resumes(user_query, top_k=3)

    if not results:
        return "I could not find relevant candidates in the dataset."

    # 2. Build context safely
    context = "\n\n".join(
        f"Candidate {i+1}:\n{res['text']}"
        for i, res in enumerate(results)
    )

    # 3. Build prompt
    prompt = f"""
You are an AI assistant helping a recruiter.

Using ONLY the following candidate resumes, answer the question.

{context}

Question:
{user_query}
"""

    # 4. Ask Ollama
    return ask_ollama(prompt)
