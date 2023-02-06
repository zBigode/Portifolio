import React from "react";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import Git from "../../assets/Git.svg";
import html from "../../assets/html.svg";
import nodejs from "../../assets/nodejs.svg";
import reactjs from "../../assets/reactjs.svg";
import tailwindcss from "../../assets/tailwindcss.svg";

const items = [
  {
    name: css,
    description: "logo",
  },
  {
    name: javascript,
    description: "logo",
  },
  {
    name: Git,
    description: "logo",
  },
  {
    name: html,
    description: "logo",
  },
  {
    name: nodejs,
    description: "logo",
  },
  {
    name: reactjs,
    description: "logo",
  },
  {
    name: tailwindcss,
    description: "logo",
  },
];

export default function Skills() {
  return (
    <div className="mt-4 text-white text-center h-[90vh] grid pt-20">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="  flex-wrap flex justify-center">
        {items.map((item) => {
            return(
          <img key={item.name} className="w-[22%] h-[100px]" src={item.name} alt={`${item.description} ${item.name}`} />
          )
        })}
      </div>
    </div>
  );
}
