import React from "react";
import StoryCard from "./StoryCard";

const stories = [
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

export default function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((el, index) => {
        return (
          <StoryCard
            key={index}
            name={el.name}
            src={el.src}
            profile={el.profile}
          />
        );
      })}
    </div>
  );
}
