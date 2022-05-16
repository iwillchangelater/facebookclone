import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
export default function Post({ message, ner, postimg }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={"https://source.unsplash.com/random"}
            width={40}
            height={40}
            alt="pro zurag"
          />
          <div>
            <p className="font-medium"> {ner}</p>
            <p className="text-xs text-gray-400 ">2020 03 12 12-12-12</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postimg && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postimg} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* footer like com share */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4 md:h-8" />{" "}
          <p className="text-xs sm:text-base">Like</p>{" "}
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4 md:h-8" />{" "}
          <p className="text-xs sm:text-base">comment</p>{" "}
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4 md:h-8" />{" "}
          <p className="text-xs sm:text-base">share</p>{" "}
        </div>
      </div>
    </div>
  );
}
