import React from "react";
import Image from "next/image";

export function LeftButton({ onClick, className }) {
  return (
    <button onClick={onClick} className={className} type="button">
      <Image
        src="story-images/icon-chevron-left.svg"
        alt="left-btn"
        className="w-full h-full"
        width={500}
        height={500}
      />
    </button>
  );
}

export function RightButton({ onClick, className }) {
  return (
    <button className={className} onClick={onClick} type="button">
      <Image
        src="story-images/icon-chevron-right.svg"
        alt="right-btn"
        className="w-full h-full"
        width={500}
        height={500}
      />
    </button>
  );
}

export function BottomButton({ onClick, className }) {
  return (
    <button onClick={onClick} className={className} type="button">
      <Image
        src="story-images/icon-chevron-down.svg"
        alt="down-btn"
        width={500}
        height={500}
      />
    </button>
  );
}

export function TopButton({ onClick, className }) {
  return (
    <button className={className} onClick={onClick} type="button">
      <Image
        src="story-images/icon-chevron-up.svg"
        alt="down-btn"
        width={500}
        height={500}
      />
    </button>
  );
}

export function NavButton({ onClick, className }) {
  return (
    <button className={className} onClick={onClick} type="button">
      <Image
        src="story-images/Nav.svg"
        alt="nav-icon"
        className="w-full h-full"
        width={500}
        height={500}
      />
    </button>
  );
}
