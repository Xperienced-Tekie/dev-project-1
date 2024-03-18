"use client";

import { useState } from "react";
import Person from "./Person";
import PersonList from "./PersonList";

function page() {
  const [swift, setSwift] = useState(false);
  const clickHandler = () => {
    setSwift((u) => !u);
  };
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      // Handle the Enter key press
    }
  }

  return (
    <div
      className={`transition-all flex flex-row bg-neutral-600 justify-center ${swift ? "" : "none"}`}
    >
      <PersonList
        handleClick={clickHandler}
        handleKeyDown={() => handleKeyDown}
      />
      {swift && <Person />}
    </div>
  );
}

export default page;
