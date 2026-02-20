export async function sendMessage(message) {
  const res = await fetch(
    `http://127.0.0.1:8000/search?query=${encodeURIComponent(message)}`
  );

  if (!res.ok) throw new Error("Backend error");

  const data = await res.json();

  if (data.length === 0) return "No matching resumes found.";

  return data
    .slice(0, 3)
    .map(
      (r, i) =>
        `${i + 1}. ${r.Name} — ${r.Field_of_Study} (${r.Experience_Years} yrs)`
    )
    .join("\n");
}
