"use client";

import React, { useEffect, useRef } from "react";

function ChatBody({ messages }) {
  const dummy = useRef(null);

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-4 h-[75%] shadonw-sm w-full overflow-y-scroll relative justify-between">
      {messages ? (
        messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center mt-2 ${
              message.id === "user" ? "justify-end " : "justify-start"
            }`}
          >
            <div
              className={`w-[75%] flex flex-col leading-4 p-4 border text-sm text-white md:max-w-[70%] rounded-full border-none mb-2
                ${message.id === "user" ? "bg-blue-900" : "bg-yellow-400"}
              `}
            >
              <p>{message.text}</p>
              <span className="text-[10px] ml-auto">3PM</span>
              <div ref={dummy} />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center font-semiboldmt-20 text-lg">
          No messages
        </div>
      )}
    </div>
  );
}

export default ChatBody;
