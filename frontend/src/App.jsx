import Chat from "./pages/Chat";
import "./styles/app.css";

export default function App() {
  return <Chat />;
}
import { sendMessage } from "../servicess/chatApi";

const handleSend = async () => {
  try {
    const res = await sendMessage(userInput);
    setMessages(prev => [...prev, { role: "bot", content: res }]);
  } catch (err) {
    setError("Backend not reachable");
  }
};
