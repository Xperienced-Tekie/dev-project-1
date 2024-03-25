import React from "react";
import { TextContainer } from "../../../../components/reuseables/Avatar";

function ChatAi({ chat, isTyping }) {
  return (
    <section className="bg-fuchsia-200 h-full mx-auto">
      {chat.map((message) => (
        <TextContainer
          key={message.message}
          text={message.message}
          className={`w-[10rem] my-2 ${
            message.sender === "gpt"
              ? "bg-gray-700 text-white mr-auto rounded-r-full"
              : "bg-white ml-auto rounded-l-full text-right"
          }`}
        />
      ))}
      {isTyping && <div>typing . . .</div>}
    </section>
  );
}

export default ChatAi;
