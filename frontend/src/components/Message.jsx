export default function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "10px"
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          padding: "10px 14px",
          borderRadius: "12px",
          background: isUser ? "#4f46e5" : "#e5e7eb",
          color: isUser ? "white" : "black"
        }}
      >
        {content}
      </div>
    </div>
  );
}
