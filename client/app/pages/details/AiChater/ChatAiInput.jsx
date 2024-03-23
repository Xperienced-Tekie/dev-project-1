"use client";
import { TextContainer } from "@/components/reuseables/Avatar";
import Input from "@/components/reuseables/Input";
// import Image from "next/image";
// import Sendmessage from "../../../../public/Sendmessage.png";
import { useEffect, useState } from "react";

const API_KEY = "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";

const ChatAiInput = () => {
  const [typing, setTyping] = useState(false);
  const [msg, setMsg] = useState([
    {
      message: "hello, Lorem ipsum dolor sit?",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = async (e) => {
    const newMesssage = {
      message:me
    }
  };
  return (
    <div className="">
      <section className="bg-green-600 h-full">
        <section className="flex gap-2">
          <h3 className="font-bold">ChatBot</h3>
          <p className="bg-[#dd45ac] w-64 rounded-r-2xl"></p>
        </section>
        {msg.map((items, idx) => (
          <TextContainer
            key={idx}
            text={items}
            className={
              "bg-[#df34ee] w-[10rem] my-2 rounded-l-full text-right ml-auto"
            }
          />
        ))}
        {typing && (
          <p className="bg-[#a9a0aa] w-[10rem] my-2 rounded-r-full text-left mr-auto">
            typing ....
          </p>
        )}
        <div className="md:w-[25rem] flex flex-1 items-center justify-center bg-yellow-500 rounded-xl space-x-3">
          <Button className={"text-xl"} text={"emoji"} />

          <Input
            type="textarea"
            className={`bg-transparent outline-none  w-[15rem] h-[4rem] text-xl rounded-3xl  placeholder:italic  pl-4`}
            placeholder="Your Messages..."
            value={msg}
            onChange={chatTxtHandler}
          />
          <Button
            className={"text-md bg-slate-500 px-1 rounded font-extralight"}
            onClick={handleSend}
            text={"send"}
          />
        </div>
      </section>
    </div>
  );
};

export default ChatAiInput;
export function Button({ text, ...props }) {
  return <button {...props}>{text}</button>;
}
