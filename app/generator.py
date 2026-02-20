def build_prompt(context: list[str], question: str) -> str:
    joined_context = "\n".join(context)

    return f"""
You are a resume assistant.
Answer ONLY using the resume context.

Resume:
{joined_context}

Question:
{question}

Answer:
"""
