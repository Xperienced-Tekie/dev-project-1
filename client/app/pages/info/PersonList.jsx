import Input from "@/app/(home)/_components/reuseables/Input";
import React, { useState } from "react";
import { display } from "@/app/(home)/_components/reuseables/Avatar";
import useFetch from "@/app/(home)/_components/chat/useFetch";
import searchIcon from "../../../public/icon-search.svg";


const PersonList = ({ handleClick, children }) => {
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
          className={
            "w-[20rem] h-[4rem] py-2 pl-3 mt-12 text-sm border-0 outline-none rounded-lg"
          }
          style={{ backGroundImage: { searchIcon } }}
          value={qry}
          onChange={handleInput}
        />
      </div>
      {filterHolder.map((item) => (
        <div
          key={item.id}
          className="my-3 py-2 px-2 text-xl bg-slate-200 flex items-center justify-between w-[20rem] rounded-md hover:border-l-4 hover:border-l-blue-800 transition-all"
          onClick={handleClick}
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
};

export default PersonList;
