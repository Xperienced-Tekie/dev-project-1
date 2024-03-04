import { useState } from "react";
import Input from "../reuseables/Input";
import Avater from "../reuseables/Avatar";
import UseFetch from "./useFetch";
const FriendSearcher = () => {
  const [user, setUser] = useState("");
  // const [error, setError] = useState("");
  const { check } = UseFetch();
  const handleFilterChange = (event) => {
    return setUser(event.target.value);
  };

  const filterUser = check.filter((item) => {
    return (
      user.toLowerCase().includes(item.name.toLowerCase()) ||
      user.toLowerCase().includes(item.category.toLowerCase())
    );
  });

  const clickHandler = (event) => {
    const { className } = event.target;
  };

  return (
    <div className="h-full  bg-fuchsia-50 flex items-center justify-start flex-col">
      <h1 className=" text-wrap text-2xl pt-[1rem] ml-[1rem] self-start capitalize font-bold text-fuchsia-900">
        Search for someone you know to start chating
      </h1>
      <Input
        type="text"
        className="outline-none border border-b-fuchsia-600 text-2xl h-[4rem] pl-2 mt-[2rem] placeholder:bg-slate-500 rounded-2xl"
        value={user}
        onChange={handleFilterChange}
        onClick={clickHandler}
      />
      <div className=" text-blue-800 w-[10rem]">
        {filterUser.map((item) => (
          <Avater
            key={item.id}
            figureClassName="m-2 rounded-md bg-neutral-100 list-style-none flex gap-[1rem] items-center"
            src={item.category}
            loading="lazy"
            avaterName={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendSearcher;
