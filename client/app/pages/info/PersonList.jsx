import React, { useState } from "react";
import Input from "../../(home)/_components/reuseables/Input";
import { display } from "../../(home)/_components/reuseables/Avatar";
import useFetch from "../../(home)/_components/chat/useFetch";

//  <div role="button" onKeyDown={handleKeyDown} tabIndex={0}>
// the addition of the above line is to make the div tag focusable
function PersonList({ handleClick, handleKeyDown }) {
  const [qry, setQry] = useState("");
  const handleInput = (event) => {
    setQry(event.target.value);
  };

  const { check } = useFetch();
  const filterHolder = display(check, qry);

  return (
    <section className=" p-2 ">
      <div className="m-auto">
        <Input
          inputtype="input"
          placeholder="search"
          className="w-[20rem] h-[4rem] py-2 pl-3 mt-12 text-sm border-0 outline-none rounded-lg"
          value={qry}
          onChange={handleInput}
        />
      </div>
      {filterHolder.map((item) => (
        <div
          key={item.id}
          className="my-3 py-2 px-2 text-xl bg-slate-200 flex items-center justify-between w-[20rem] rounded-md hover:border-l-4 hover:border-l-blue-800 transition-all"
          onClick={handleClick}
          role="button"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <p>{item.name}</p>
          <div>
            <p className="text-[.7rem]">03:48 pm</p>
            <p className="text-sm">03:48 pm</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PersonList;
