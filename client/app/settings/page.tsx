"use client"

// "use client" - Assuming it's a comment; you might not need it

import Image from "next/image";
import React from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const UserSetting = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <main className="max-w-[1280px] mx-auto px-6 pb-6 bg-red-400">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-5">
        <form className="md:col-span-3">
          <div className="mt-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith@example.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
              Short Bio
            </label>
            <div className="mt-2">
              <textarea
                name="bio"
                id="bio"
                autoComplete="bio"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="A brief description about yourself"
              />
            </div>
          </div>
        </form>

        <div className="col-span-2">
          <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
            Photo
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            <UserCircleIcon className="h-6 w-6 text-gray-300" aria-hidden="true" />
            <button
              type="button"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Change
            </button>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            Cover photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon className="mx-auto h-6 w-6 text-gray-300" aria-hidden="true" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserSetting;
