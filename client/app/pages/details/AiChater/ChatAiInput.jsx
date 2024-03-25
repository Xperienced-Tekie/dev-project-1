"use client";

import { useState } from "react";
import { TextContainer } from "../../../../components/reuseables/Avatar";
import Input from "../../../../components/reuseables/Input";

//const API_KEY = //"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";
//const API_URL = //"https://api.openai.com/v1/chat/completions";

function ChatAiInput() {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chat, setChat] = useState([
    {
      sender: "gpt",
      message: "how can i help you ?",
    },
  ]);

  const processChatMessage = async (chatMessage) => {
    const apiMessage = chatMessage.map((messageObj) => {
      const role = messageObj.sender === "gpt" ? "assistant" : "user";
      return {
        role,
        content: messageObj.message,
      };
    });

    const systemMessage = {
      role: "system",
      content: "explain like a professional",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessage],
    };

    await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer  ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        const res = data.error
          ? "I am not sure about that"
          : data.choices[0].message.content;
        const chatMsg = [...chatMessage, { sender: "gpt", message: res }];
        setChat(chatMsg);
        setIsTyping(false);
      });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input) return;
    const chatMsg = [...chat, { sender: "user", message: input }];
    setChat(chatMsg);
    setInput("");
    setIsTyping(true);
    await processChatMessage(chatMsg);
  };

  return (
    <div className="">
      <section className="bg-green-600 w-[80vw]h-full mx-auto">
        {chat.map((message) => (
          <TextContainer
            key={message.message}
            text={message.message}
            className={`w-[10rem] my-2 ${message.sender === "gpt" ? " bg-gray-700 text-white mr-auto rounded-r-full" : "bg-white ml-auto rounded-l-full text-right "} `}
          />
        ))}
        {isTyping && <p>typing...</p>}
        <div className="md:w-[25rem] flex flex-1 items-center justify-center bg-yellow-500 rounded-xl space-x-3">
          <Button className="text-xl" text="emoji" />
          <Input
            type="textarea"
            className="bg-transparent outline-none  w-[15rem] h-[4rem] text-xl rounded-3xl  placeholder:italic  pl-4"
            placeholder="Your Messages..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className="text-md bg-slate-500 px-1 rounded font-extralight hover:bg-slate-700 hover:text-white transition-all hover:outline-double"
            onClick={handleSend}
            text="send"
          />
        </div>
      </section>
    </div>
  );
}
export default ChatAiInput;
export function Button({ text, ...props }) {
  return (
    <button type="button" {...props}>
      {text}
    </button>
  );
}
