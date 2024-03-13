"use client";
import React from "react";
import Story from "./_components/Story";
import StoriesList from "./_components/StoriesList";
import { useState } from "react";

const page = () => {
  return (
    <div>
      <StoriesList />;
      <Story />
    </div>
  );
};

export default page;
