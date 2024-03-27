"use client";

import React, { useState } from "react";
import Story from "./_components/Story";
import StoriesList from "./_components/StoriesList";

const page = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  const toggleIsHidden = () => {
    setIsHidden((variable) => !variable);
  };

  const toggleIsDarkMode = () => {
    setIsDarkMode((variable) => !variable);
  };

  return (
    <main
      className={`flex flex-col h-screen md:h-auto w-full md:flex-row md:justify-between md:space-x-3 md:w-2/3 md:mx-auto md:my-5 md:p-12  md:min-h-96 ${isDarkMode ? "bg-[#1A202C]" : "bg-white"}
      `}
      // style={{isDarkMode ? backgroundColor :'red' : backgroundColor:'blue'}}
    >
      <Story
        isDarkMode={isDarkMode}
        toggleIsDarkMode={toggleIsDarkMode}
        handleIsHidden={toggleIsHidden}
        isHidden={isHidden}
      />

      <StoriesList handleHideStory={toggleIsHidden} isHidden={isHidden} />
    </main>
  );
};

export default page;
