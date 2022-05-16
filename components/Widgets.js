import React from "react";
import Contact from "./Contact";
import {
  VideoCameraIcon,
  SearchIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
const contact = [
  {
    name: "sonny sangha",
    src: "https://source.unsplash.com/random",
    profile: "https://source.unsplash.com/random",
  },
  {
    name: "Elon Musk",
    src: "https://source.unsplash.com/random",
    profile: "https://source.unsplash.com/random",
  },
  {
    name: "Jeff Bezoz",
    src: "https://source.unsplash.com/random",
    profile: "https://source.unsplash.com/random",
  },
  {
    name: "Mark Zuberberg",
    src: "https://source.unsplash.com/random",
    profile: "https://source.unsplash.com/random",
  },
  {
    name: "Bill Gates",
    src: "https://source.unsplash.com/random",
    profile: "https://source.unsplash.com/random",
  },
];

export default function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-80 p-2 mt-5 pr-10">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contact</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className=" h-6 cursor-pointer" />
          <SearchIcon className="h-6 cursor-pointer" />
          <DotsHorizontalIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {contact.map((el) => (
        <Contact src={el.src} name={el.name} />
      ))}
    </div>
  );
}
