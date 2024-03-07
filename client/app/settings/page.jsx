"use client";

import Image from "next/image";
import React from "react";
import Button from "../../components/Button";

function UserSetting() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 pb-6 bg-purple-100 relative">
      <h2 className="text-2xl font-semibold text-blue-900 pt-4">Settings</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="col-span-1 mt-4 md:mt-0 md:order-last">
          <div className="flex items-center  gap-x-3 md:order-2 md:h-2/3 md:mt-4">
            <Image
              className="rounded-full object-cover shadow-lg"
              src="/john.jpg"
              alt="next"
              width={120}
              height={120}
            />
            <label
              htmlFor="file-upload"
              className="justify-start text-blue-900 sm:text-sm md:text-xl cursor-pointer rounded-md  font-semibold  focus-within:outline-none focus-within:ring-2  focus-within:ring-offset-2 hover:text-indigo-500"
            >
              Change Photo Picture
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept="image/*"
              />
            </label>
          </div>
        </div>
        <form className="md:col-span-1 text-blue-900 md:order-first">
          <div className="mt-4 md:w-3/4 border">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-blue-900"
            >
              Username
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block text-blue-900  w-full border-2 border-blue-900 bg-white rounded-xl py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith"
              />
            </label>
          </div>

          <div className="mt-4 md:w-3/4">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Password
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block  w-full border-2 border-blue-900 bg-white  py-1.5 pl-1 rounded-xl placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter your password"
              />
            </label>
          </div>

          <div className="mt-4 md:w-3/4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 "
            >
              Email
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full border-2 border-blue-900 bg-white  py-1.5 pl-1 rounded-xl  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith@example.com"
              />
            </label>
          </div>

          <div className="mt-4 md:w-3/4">
            <span className="block text-sm font-medium leading-6">
              Short Bio
            </span>
            <div className="mt-2">
              <textarea
                name="bio"
                id="bio"
                rows={8}
                autoComplete="bio"
                className="block  w-full p-2 border-2 border-blue-900 bg-white rounded-xl placeholder:text-gray-400"
                placeholder="A brief description about yourself"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="md:flex justify-center md:gap-10 mt-12">
        <div className="md:w-1/3 ">
          <Button>Save Changes</Button>
          <Button className="mt-3 bg-gray-500 text-white py-2 hover:bg-gray-600 font-bold">
            Change to Dark Mode
          </Button>
        </div>
        <div className="text-center">
          <Image
            src="/menu.png"
            alt="menu"
            width={50}
            height={50}
            className="right-0 top-2/3 -translate-y-6  md:-translate-y-0 fixed md:static md:justify-self-end rounded-full object-cover shadow-lg cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </main>
  );
}

export default UserSetting;
