import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdInformationCircleOutline } from "react-icons/io";

function ChatHeader() {
  const [showUser, showUserDropdown] = useState(false);
  return (
    <div className="text-white text-center bg-blue-900 md:h-[15%] w-full p-2 sm:h-[50px] mb-4">
      <div className="flex items-center justify-between h-full">
        <Image
          src="/john.jpg"
          className="rounded-full cursor-pointer"
          width={50}
          height={50}
          alt="Current user"
        />

        <p className="font-semibold text-lg cursor-pointer">Olanrewaju Lawal</p>

        <div className="relative">
          <IoMdInformationCircleOutline
            className="text-white text-6xl p-0 cursor-pointer"
            onClick={() => showUserDropdown((prev) => !prev)}
          />
          {showUser && (
            <ul className="absolute z-50 bg-yellow-400 right-0 bottom-0 translate-y-full">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-600 dark:hover:bg-yellow-600 hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-600 dark:hover:bg-yellow-600 hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-600 dark:hover:bg-yellow-600 hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
