"use client";

import ChatAi from "./AiChater";
import Details from "./Details";

const pages = () => (
  <div className="flex justify-center ">
    <Details className="hidden w-[28rem] h-[100vh] bg-black md:block" />
    <ChatAi />
  </div>
);
export default pages;
