"use client";

import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdAdd, IoMdSend } from "react-icons/io";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const onEmojiClick = (e, emojiObject) => {
    setMsg((prevInput) => prevInput + emojiObject.emoji);
    setShowEmojiPicker(!showEmojiPicker);
  };

  const sendChat = (event) => {
    event.preventDefault();
    handleSendMsg(msg);
    setMsg("");
  };

  return (
    <form
      className="flex items-center  justify-center rounded-full relative h-[10%] mt-4"
      onSubmit={sendChat}
    >
      <div className="bg-blue-700 p-3 rounded-full mr-2">
        <IoMdAdd className="text-gray-400 text-4xl cursor-pointer" />
      </div>
      <div className="flex items-center justify-between p-2 rounded-full bg-yellow-400 relative">
        <div className="absolute top-0 -translate-y-full z-20">
          {showEmojiPicker && <Picker onEmojiClick={onEmojiClick} />}
        </div>

        <label className="flex items-center gap-2" htmlFor="msg" id="js_2">
          <BsEmojiSmileFill
            onClick={handleEmojiPickerhideShow}
            className="text-gray-400 cursor-pointer text-4xl"
          />
          <input
            type="text"
            id="msg"
            aria-labelledby="js_2"
            placeholder="type your message here"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            className="w-full bg-transparent text-white border-none focus:outline-none text-xl p-2 z-10"
          />
        </label>
        <button
          id="js_1"
          type="submit"
          className="px-2 rounded-full items-center justify-center ml-10"
        >
          <IoMdSend
            className="text-white text-2xl -rotate-45"
            aria-labelledby="js_1"
          />
        </button>
      </div>
    </form>
  );
}
