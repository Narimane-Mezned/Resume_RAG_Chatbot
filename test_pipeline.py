from app.pipeline import build_or_load_index

index, df = build_or_load_index()

print("Index size:", index.ntotal)
print(df.head())
