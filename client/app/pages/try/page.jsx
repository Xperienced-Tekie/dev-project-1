"use client";

import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3003");
const page = () => {
  const [messages, setMessages] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleMessage = () => {
    if (messages) {
      socket.emit("send message", { message: messages });
      setMessages("");
    }
  };
  useEffect(() => {
    socket.on("receive message", (data) => {
      setMessageList([...messageList, data.message]);
    });
  }, [socket]);

  return (
    <section className="flex flex-col justify-center bg-zinc-600 items-center h-[100vh] text-slate-700">
      <div
        id="messages"
        className="text-slate-200 accent-indigo-100 justify-items-start  mr:auto w-[15rem] border"
      >
        <h3 className=" inline-block">User</h3>
        {messageList.map((message) => (
          <div key={message} className="inline">
            <p>{message}</p>
          </div>
        ))}
      </div>
      <form id="form">
        <input
          type="text"
          id="m"
          className="outline-none border-2 border-zinc-500 p-2 rounded-md w-96"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          placeholder="enter your messages"
        />
        <button
          type="submit"
          onClick={handleMessage}
          className="mx-3 p-2 w-[4rem] text-slate-100 bg-neutral-800 rounded-md "
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default page;
