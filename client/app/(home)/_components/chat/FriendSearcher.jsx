import { useState } from "react";
import Input from "../reuseables/Input";
import Avater from "../reuseables/Avatar";
import { useFetch } from "./useFetch";
import Link from "next/link";

function FriendSearcher() {
  const [user, setUser] = useState("");

  const { check } = useFetch();
  const handleFilterChange = (event) => setUser(event.target.value);

  const filterUser = check.filter(
    (item) =>
      user.toLowerCase().includes(item.name.toLowerCase()) ||
      user.toLowerCase().includes(item.category.toLowerCase()),
  );

  return (
    <div className=" flex items-center justify-start flex-col">
      <h1 className=" text-wrap text-2xl pt-[1rem] ml-[1rem] self-start capitalize font-bold text-fuchsia-900">
        Search for someone you know to start chating
      </h1>
      <Input
        type="text"
        className="outline-none border border-b-fuchsia-600 text-2xl py-[1rem] pl-2 mt-[2rem] placeholder:bg-slate-500 rounded-2xl"
        value={user}
        onChange={handleFilterChange}
      />
      <div className=" text-red-900 w-[20rem]">
        {filterUser.map((item) => (
          <Link href={`/pages/info` + item.id} key={item.id}>
            <Avater
              figureClassName="m-2 rounded-md bg-neutral-100 list-style-none flex-col flex gap-[0.5rem] items-center"
              src={item.category}
              avaterName={item.name}
            />
          </Link>
        ))}
      </div>
      <Link href="/details">Move to</Link>
    </div>
  );
}

export default FriendSearcher;
