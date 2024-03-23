"use client";
import { TextContainer } from "@/components/reuseables/Avatar";
import Input from "@/components/reuseables/Input";
import { useState } from "react";
import { Button } from "./ChatAiInput";

export const ChatAiInput = () => {
  const [chatTxt, setChatTxt] = useState("");
  const [msg, setMsg] = useState([]);

  const chatTxtHandler = (event) => {
    const messages = event.target.value;
    setChatTxt(messages);
  };

  function handleSend() {
    setMsg((prev) => {
      return [...prev, chatTxt];
    });
    setChatTxt("");
  }

  return (
    <div className="w-96">
      <section className="bg-green-600 h-[20rem]">
        <span>ChatBot</span>
        <TextContainer />

        {msg.map((items, idx) => (
          <TextContainer
            key={idx}
            text={items}
            className={
              "bg-[#df34ee] w-[10rem] my-2 rounded-l-full text-right ml-auto"
            }
          />
        ))}
        {/* <TextContainer className={"m-auto"} text={msg} /> */}
        <div className="md:w-[25rem] flex flex-1 items-center justify-center bg-yellow-500 rounded-xl space-x-3">
          <Button className={"text-xl"} text={"emoji"} />

          <Input
            className={`bg-transparent outline-none  w-[15rem] h-[4rem] text-xl rounded-3xl  placeholder:italic  pl-4`}
            placeholder="Your Messages..."
            value={chatTxt}
            onChange={chatTxtHandler}
          />
          <Button className={"text-xl"} onClick={handleSend} text={"send"} />
        </div>
      </section>
    </div>
  );
};
