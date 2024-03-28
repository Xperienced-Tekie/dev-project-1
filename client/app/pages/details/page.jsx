"use client";

import Index from "./AiChater/index";
import Details from "./detail/Details";

const pages = () => (
  <div className="flex ">
    <Details className="hidden  w-[25rem] h-[100vh] bg-black md:block" />
    <div className=" md:relative">
      <Index />
    </div>
  </div>
);
export default pages;
