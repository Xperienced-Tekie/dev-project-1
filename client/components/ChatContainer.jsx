"use client";

import ChatInput from "./ChatInput";
import ChatBody from "./ChatBody";
import messages from "../lib/mesages";
import ChatHeader from "./ChatHeader";

export default function ChatContainer() {
  const handleSendMsg = async () => {
    //
  };

  return (
    <div className="md:max-w-[500px] sm:w-full mx-auto p-6 bg-gray-800 rounded-lg h-screen flex flex-col justify-between">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
}
