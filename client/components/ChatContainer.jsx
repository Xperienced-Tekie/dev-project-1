"use client";

import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatInput from "./ChatInput";
// import Logout from "./Logout";
// import axios from "axios";
// import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";

export default function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const handleSendMsg = async (msg) => {
    console.log(msg.value);
    // setMessages([...messages, { message: msg}]);
  };

  useEffect(() => {
    
  });

  return (
    <div className="max-w-[500px] mx-auto">
      <div className="flex flex-col gap-4 py-4 px-4 overflow-auto h-[28rem]">
        <h3>The message</h3>
        {messages.map((message) => (
          <div ref={scrollRef} key={uuidv4()}>
            <div
              className={`flex items-center ${
                message.fromSelf ? "justify-end" : "justify-start"
              }`}
            >
              <div className="max-w-[40%] p-4 border text-lg text-[#d1d1d1] md:max-w-[70%]">
                <p>{message.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ChatInput handleSendMsg={(e) => handleSendMsg(msg)} />
    </div>
  );
}
