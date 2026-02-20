# Resume RAG Chatbot 

A dataset-aware AI chatbot that searches and analyzes resumes using **semantic search (FAISS)** and **Natural Language Processing**, built with **FastAPI** and designed to support intelligent hiring and resume matching workflows.

---

##  Project Overview

This project implements a **Retrieval-Augmented Generation (RAG)** pipeline for resume analysis.

Instead of generating answers blindly, the chatbot:
1. Searches a resume dataset using vector embeddings
2. Retrieves the most relevant resumes
3. Uses that context to answer user questions

This ensures **accurate, explainable, and dataset-grounded responses**.

---

##  Key Features

-  Semantic resume search using **FAISS**
-  Dataset-aware responses (CSV resumes)
-  FastAPI backend
-  Sentence-Transformers embeddings
-  Chat API (`/chat`)
-  Frontend connected to backend
-  Modular & clean architecture

---

## Architecture

```
resume-rag-chatbot/
│
├── app/
│   ├── main.py             # FastAPI entry point
│   ├── config.py           # Configuration settings
│   ├── preprocessing.py    # Data cleaning & preparation
│   ├── embedder.py         # Embedding generation logic
│   ├── retriever.py        # FAISS resume retrieval
│   ├── generator.py        # LLM response generation
│   ├── llm.py              # Language model wrapper
│   ├── pipeline.py         # RAG orchestration logic
│   └── ollama_client.py    # LLM connection abstraction
│
├── frontend/
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── Header.jsx
│   │   └── Message.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Chat.jsx
│   │   ├── Search.jsx
│   │   └── Upload.jsx
│   │
│   ├── services/
│   │   ├── chatApi.js
│   │   └── searchApi.js
│   │
│   ├── styles/
│   │   ├── app.css
│   │   └── main.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── config.js
│   └── api.js
│
├── data/
│   └── resume_dataset_1200.csv  
│
├── embeddings/
│   ├── faiss.index      
│   └── metadata.pkl
│
├── requirements.txt
└── README.md
```



---

##  How It Works (RAG Flow)

1. User sends a question (e.g. *"Find a junior backend developer"*)
2. Question is converted into an embedding
3. FAISS retrieves the most relevant resumes
4. Retrieved resumes are injected as context
5. The chatbot answers **based on the dataset**

---

##  Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Narimane-Mezned/Resume_RAG_Chatbot.git
cd Resume_RAG_Chatbot
``` 
2️⃣ Create virtual environment
```bash
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
```
3️⃣ Install dependencies
```bash
pip install -r requirements.txt
```
▶️ Run the Backend
```bash
uvicorn app.main:app --reload
```
API available at:

http://127.0.0.1:8000
Swagger UI:

http://127.0.0.1:8000/docs
 Example API Request
POST /chat

{
  "message": "Why does candidate 2 match my request better than candidate 1?"
}
✅ The response is grounded in the resume dataset.

## Technologies Used
 
Python 3.12

FastAPI

FAISS

Sentence-Transformers

Pandas / NumPy

React.js (Frontend)

JavaScript (API communication)


## Notes
Large files (embeddings/, data/) are intentionally excluded from Git

Indexes can be regenerated locally

Ollama / LLM usage is optional and modular
