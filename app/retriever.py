import faiss
import pickle
import numpy as np
from sentence_transformers import SentenceTransformer

MODEL = SentenceTransformer("all-MiniLM-L6-v2")

index = faiss.read_index("embeddings/faiss.index")

with open("embeddings/metadata.pkl", "rb") as f:
    metadata = pickle.load(f)

def retrieve_resumes(query: str, top_k: int = 3):
    query_embedding = MODEL.encode([query])
    distances, indices = index.search(np.array(query_embedding), top_k)

    results = []
    for idx in indices[0]:
        if idx == -1:
            continue
        results.append(metadata[idx])

    return results
