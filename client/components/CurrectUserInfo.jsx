import React from "react";
import Image from "next/image";
import { IoMdInformationCircleOutline } from "react-icons/io";

function CurrectUserInfo() {
  return (
    <div className="text-white -mt-2 text-center bg-blue-900 fixed mx-auto left-0 right-0 max-w-[calc(500px-3rem)] cursor-pointer">
      <div className="flex items-center justify-between px-4 py-1">
        <Image
          src="/john.jpg"
          className="rounded-full"
          width={50}
          height={50}
          alt="Current user"
        />

        <p className="font-semibold text-lg">Olanrewaju Lawal</p>

        <IoMdInformationCircleOutline className="text-white text-6xl" />
      </div>
    </div>
  );
}

export default CurrectUserInfo;
