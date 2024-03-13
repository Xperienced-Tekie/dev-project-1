import React from "react";
import { useState } from "react";
import { storiesData } from "../data";

const status_img = [
  "story-images/status-img-1.jpg",
  "story-images/status-img-2.jpg",
];

const stories = [
  {
    id: 1,
    image_url: "story-images/status-img-1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },

  {
    id: 2,
    image_url: "story-images/status-img-2.jpg",
    text: "Some other dummy text to test functionality.",
  },
];

const Story = () => {
  const [index, setIndex] = useState(0);
  const { id, image_url, text } = stories[index];
  const nextStory = () => {
    setIndex((oldStory) => {
      const newStory = (oldStory + 1) % status_img.length;
      return newStory;
    });
  };

  const prevStory = () => {
    setIndex((oldStory) => {
      const newStory = (oldStory - 1 + status_img.length) % status_img.length;
      return newStory;
    });
  };
  return (
    <section
      className={`p-6 bg-#EEE8FD rounded shadow-md w-5/6 md:w-1/2 relative`}
      style={{ margin: "0 auto" }}
    >
      <div className={`flex flex-row justify-start items-center gap-5`}>
        <img src="story-images/profile-img.jpg" alt="profile-img" />

        <div>
          <h3 className={`uppercase font-bold `}>Tomiwa Philip</h3>
          <p>2:15 PM</p>
        </div>
      </div>

      <article className={`relative`}>
        <div
          className={`my-10 relative h-80 transition-all ease-in-out duration-300`}
          key={id}
        >
          <img
            src={image_url}
            alt="status_img"
            className={`m-auto h-full w-72`}
          />

          <h5
            className={`text-center w-62 font-normal leading-3 mt-5 ml-2 text-#1A202C text-xs`}
          >
            {text}
          </h5>
        </div>
      </article>
      <button
        className={`absolute top-72 left-0 duration-200 transform hover:scale-105`}
        onClick={prevStory}
      >
        <img
          src="story-images/icon-chevron-left.svg"
          alt="left-btn"
          className={` block w-full`}
        />
      </button>
      <button
        className={`absolute top-72 right-0 duration-200 transform hover:scale-105`}
        onClick={nextStory}
      >
        <img src="story-images/icon-chevron-right.svg" alt="right-btn" />
      </button>
      <button
        className={`absolute right-5 duration-200 transform hover:scale-105`}
      >
        <img src="story-images/Nav.svg" alt="nav-icon" />
      </button>
    </section>
  );
};

export default Story;
