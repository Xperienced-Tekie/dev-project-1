"use client";
import { useState } from "react";
import Person from "./Person";
import PersonList from "./PersonList";

function page() {
  const [swift, setSwift] = useState(false);
  const clickHandler = () => {
    console.log("clicked");
    setSwift((u) => !u);
  };
  return (
    <div
      className={`transition-all flex flex-row bg-neutral-600 justify-center ${swift ? "" : "none"}`}
    >
      <PersonList handleClick={clickHandler}></PersonList>
      {swift && <Person />}
    </div>
  );
}

export default page;
