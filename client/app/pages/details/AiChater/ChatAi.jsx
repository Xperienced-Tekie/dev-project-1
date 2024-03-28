import React from "react";
import { TextContainer } from "../../../../components/reuseables/Avatar";

function ChatAi({ chat, isTyping }) {
  return (
    <section className="bg-fuchsia-200 h-full mx-auto py-1 px-1">
      {chat.map((message) => (
        <TextContainer
          key={message.message}
          text={message.message}
          className={`w-[10rem] my-2 text-sm ${
            message.sender === "gpt"
              ? "bg-gray-700 py-2 px-2 text-white mr-auto rounded-tr-full rounded-l-full"
              : "bg-white ml-auto rounded-tl-full rounded-r-full text-right py-2 px-2"
          }`}
        />
      ))}
      {isTyping && <div>typing . . .</div>}
    </section>
  );
}

export default ChatAi;
