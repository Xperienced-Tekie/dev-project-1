import Image from "next/image";
import { useState } from "react";
import img from "../../../public/rectangle.png";
import Rectangle2 from "../../../public/Rectangle2.png";
import EndStream from "../../../public/EndStream.png";
import Nav from "../../../public/Nav.png";

function Stream() {
  const [theme, setTheme] = useState(false);
  const toogleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <section
      className={`transition-all h-full max-w-[] ${theme ? "bg-gray-950 text-white" : "bg-white"}`}
    >
      <header className="flex items-center justify-start gap-5 shadow-md shadow-slate-50 py-2 px-2">
        <Image src={img} height="40" width="40" />
        <div className="text-sm">
          <span className="block font-bold capitalize">Tomiwa phillp</span>
          <span className="block">2:34 pm</span>
        </div>
      </header>
      <section>
        {/* <video className="h-[23rem] w-[60vw] border bg-black mx-auto my-6" /> */}
        <Image
          src={Rectangle2}
          className="h-[23rem] w-[60vw] border bg-black mx-auto my-6"
        />
        <div className=" text-center text-[.7rem] ">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex justify-around  items-center">
          <button
            className="py-1 px-1 w-[4rem] border m-1 bg-yellow-600 rounded-xl font-bold hover:bg-yellow-400 hover:text-emerald-50 transition"
            type="button"
            aria-label="Submit"
          >
            <Image src={EndStream} />
          </button>
          <button
            className="py-1 px-1  border m-1 bg-yellow-600 rounded-b-xl font-bold hover:bg-yellow-400 hover:text-emerald-50 transition"
            onClick={toogleTheme}
            type="button"
            aria-label="Submit"
          >
            switch
          </button>
          <button
            className="py-1 px-1 w-[4rem] border m-1 bg-yellow-600 rounded-xl font-bold hover:bg-yellow-400 hover:text-emerald-50 transition"
            type="button"
            aria-label="Submit"
          >
            <Image src={Nav} />
          </button>
        </div>
      </section>
    </section>
  );
}

export default Stream;
