import { useState } from "react";
import { searchResumes } from "../api/searchApi";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setResults([]);
    setAnswer("");

    try {
      const data = await searchResumes(query);
      setResults(data.matches || []);
      setAnswer(data.llm_answer || "");
    } catch (err) {
      setError("Error connecting to backend");
    }
  };

  return (
    <div>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Machine learning engineer with Python"
      />
      <br />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {answer && (
        <div>
          <h3>Chatbot Answer</h3>
          <p>{answer}</p>
        </div>
      )}

      {results.length > 0 && (
        <div>
          <h3>Matching Resumes</h3>
          {results.map((r, i) => (
            <div key={i} style={{ marginBottom: "1rem" }}>
              <strong>Skills:</strong> {r.Skills}
              <br />
              <strong>Target:</strong> {r.Target_Job_Description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
