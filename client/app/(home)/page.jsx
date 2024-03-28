"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "../../components/reuseables/Input";
import Avater, { filterUser } from "../../components/reuseables/Avatar";
import useFetch from "../../components/reuseables/useFetch";

function FriendSearcher() {
  const [user, setUser] = useState("");
  const { check } = useFetch();

  const handleFilterChange = (event) => setUser(event.target.value);
  const filtred = filterUser(check, user);
  return (
    <div className="bg-fuchsia-100 h-full flex items-center justify-start flex-col">
      <h1 className=" text-wrap text-2xl pt-[1rem] ml-[1rem] self-start capitalize font-bold text-fuchsia-900">
        Search for someone you know to start chating
      </h1>
      <Input
        type="text"
        className="outline-none border border-b-fuchsia-600 text-2xl py-[1rem] pl-2 mt-[2rem] placeholder:bg-slate-500 rounded-2xl w-[70vw] md:w-[60vw] lg:w-[50vw] transition-all"
        value={user}
        onChange={handleFilterChange}
      />
      <div className=" text-red-900 w-[20rem]">
        {filtred.map((item) => (
          <Link href={`/pages/route/${item.id}`} key={item.id}>
            <Avater
              figureClassName="m-2 rounded-md bg-blue-100 list-style-none flex flex gap-[0.5rem] items-center"
              src={item.id}
              avaterName={item.name}
            />
          </Link>
        ))}
      </div>
      <Link href="/pages/details">
        <p className="p-2 border m-1 bg-violet-800 rounded-b-xl font-bold hover:bg-violet-600 transition">
          Move to details
        </p>
      </Link>
      <Link href="/pages/info">
        <p className="p-2 border m-1 bg-violet-800 rounded-b-xl font-bold hover:bg-violet-600 transition">
          Move to info
        </p>
      </Link>
      <Link href="/pages/livestream">
        <p className="p-2 border m-1 bg-violet-800 rounded-b-xl font-bold hover:bg-violet-600 transition">
          Move to livestream
        </p>
      </Link>
    </div>
  );
}

export default FriendSearcher;
