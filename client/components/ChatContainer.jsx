"use client";

import ChatInput from "./ChatInput";
import ChatBox from "./ChatBox";
import messages from "../lib/mesages";

export default function ChatContainer() {
  const handleSendMsg = async (e) => {
    console.log("message:", e.value);
  };

  return (
    <div className="max-w-[500px] mx-auto p-6 bg-gray-800 rounded-lg h-[100vh]">
      <ChatBox messages={messages} />
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
}
