import { useState } from "react";

export default function ChatBox({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <textarea
        rows="2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask something..."
        style={{ flex: 1, padding: "10px" }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
