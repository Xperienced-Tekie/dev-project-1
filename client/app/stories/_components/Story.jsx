import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LeftButton, RightButton, BottomButton, NavButton } from "../utils";
import storiesData from "../data";

function Story({ isDarkMode, handleIsHidden, isHidden, toggleIsDarkMode }) {
  const [index, setIndex] = useState(0);
  const [storyId, setStoryId] = useState(1);

  const nextPersonStory = () => {
    setStoryId((oldPerson) => {
      const newPerson = oldPerson + 1;
      if (newPerson > storiesData.length) {
        return 1;
      }
      return newPerson;
    });
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextPersonStory();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [setStoryId]);

  const filteredStories = storiesData.filter(
    (stories) => stories.id === storyId,
  )[0];

  const { id, profImg, userName, time, story } = filteredStories;
  const { slug, image, text } = story[index];

  const nextStory = () => {
    setIndex((oldStory) => {
      const newStory = (oldStory + 1) % story.length;
      return newStory;
    });
  };

  const prevStory = () => {
    setIndex((oldStory) => {
      const newStory = (oldStory - 1 + story.length) % story.length;
      return newStory;
    });
  };

  return (
    <section
      className={`${isHidden ? "hidden" : "block"} md:block rounded shadow-md my-5 md:my-0 mx-auto w-5/6 md:w-1/2 relative md:h-auto md:rounded-none md:shadow-none md:border-r-2 md:border-r-#000000`}
      key={id}
    >
      <div className="flex flex-row mt-1 justify-start h-16 items-center gap-5 pl-2">
        <div className="h-full">
          <Image
            src={profImg}
            alt="profile-img"
            width={72}
            height={72}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div>
          <h3
            className={`uppercase font-bold ${isDarkMode ? "text-white" : "text-black"}`}
          >
            {userName}
          </h3>
          <p className={`${isDarkMode ? "text-white" : "text-black"}`}>
            {time}
          </p>
        </div>
      </div>

      <article className="relative mt-8 w-full min-h-96 text-align-center">
        <div
          className="relative h-80 transition-all w-5/6 md:w-3/4 mx-auto ease-in-out duration-300"
          key={slug}
        >
          <Image
            src={image}
            alt="status_img"
            className="m-auto h-full w-full"
            width={500}
            height={500}
          />

          <h5
            className={`text-center w-62 font-normal leading-3 mt-5 ml-2 text-#1A202C text-xs max-h-9 overflow-hidden ${isDarkMode ? "text-neutral-100" : "text-black"}`}
          >
            {text}
          </h5>
        </div>

        <LeftButton
          className="absolute top-40 left-0 md:left-2 h-8 duration-200 transform hover:scale-105"
          onClick={prevStory}
        />
        <RightButton
          onClick={nextStory}
          className={`absolute top-40 right-0 md:right-2 h-8 duration-200 transform hover:scale-105 `}
        />
        <NavButton
          className="absolute h-12 right-0 md:right-2 -bottom-10 duration-200 transform hover:scale-105"
          onClick={toggleIsDarkMode}
        />
        <BottomButton
          onClick={handleIsHidden}
          className="absolute -bottom-10 duration-200 transform -translate-x-1/2 w-8 left-1/2 hover:scale-105 md:hidden"
        />
      </article>
    </section>
  );
}

export default Story;
