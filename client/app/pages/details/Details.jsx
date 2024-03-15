import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img from "../../../public/rectangle.png";

function Details() {
  const [theme, setTheme] = useState(false);
  const toogleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <section
      className={`transition-all ${theme ? "bg-blue-950 text-white" : "bg-white"}`}
    >
      <header className="flex items-center justify-start gap-5 shadow-md shadow-slate-50 py-2 px-2">
        <Image src={img} height="40" width="40" />
        <div className="text-sm">
          <span className="block font-bold capitalize">Tomiwa phillp</span>
          <span className="block">2:34 pm</span>
        </div>
      </header>
      <section>
        <div className="h-[23rem] w-[60vw] border bg-black mx-auto my-6" />
        <div className=" text-center text-[.7rem] ">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex justify-around  items-center">
          <button
            className="py-2 px-1 w-[5rem] border m-1 bg-yellow-600 rounded-b-xl font-bold hover:bg-yellow-400 hover:text-emerald-50 transition"
            type="button"
          >
            icon
          </button>
          <button
            className="py-2 px-1 w-[5rem] border m-1 bg-yellow-600 rounded-b-xl font-bold hover:bg-yellow-400 hover:text-emerald-50 transition"
            onClick={toogleTheme}
            type="button"
          >
            switch
          </button>
          <button
            className="py-2 px-1 w-[5rem] border m-1 bg-yellow-600 rounded-b-xl font-bold hover:bg-yellow-400 hover:text-emerald-50 transition"
            type="button"
          >
            icon
          </button>
        </div>
      </section>
      <Link href="/">
        <button
          className="py-2 px-1 w-[5rem] border m-1 bg-violet-800 rounded-b-xl font-bold hover:bg-violet-600 hover:text-emerald-50 transition"
          type="button"
        >
          Move to
        </button>
      </Link>
    </section>
  );
}

export default Details;
