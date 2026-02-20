from sentence_transformers import SentenceTransformer
import numpy as np

_model = None


def load_model():
    global _model
    if _model is None:
        _model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
    return _model


def embed_text(text: str) -> np.ndarray:
    model = load_model()
    embedding = model.encode(text, convert_to_numpy=True)
    return embedding
