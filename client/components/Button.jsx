import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ children, className, ...props }) {
  return (
    <div
      className={twMerge(
        "px-2 py-3 cursor-pointer rounded-xl text-white bg-blue-800 hover:bg-blue-800 transition text-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Button;
