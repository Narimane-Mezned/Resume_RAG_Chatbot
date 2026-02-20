import { useState } from "react";
import ChatBox from "../components/ChatBox";
import Message from "../components/Message";
import { sendMessage } from "../servicess/chatApi";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  const handleSend = async (text) => {
    setError("");

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const data = await sendMessage(text);

      const botMsg = {
        role: "assistant",
        content: data.response
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setError("❌ Backend not responding");
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        background: "white",
        borderRadius: "10px"
      }}
    >
      <h2>🤖 Resume Chatbot</h2>

      <div
        style={{
          minHeight: "300px",
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px",
          overflowY: "auto"
        }}
      >
        {messages.map((m, i) => (
          <Message key={i} role={m.role} content={m.content} />
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ChatBox onSend={handleSend} />
    </div>
  );
}
