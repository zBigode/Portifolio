import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
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
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: javascript,
    description: "logo",
    link: "https://www.javascript.com/",
  },
  {
    name: Git,
    description: "logo",
    link: "https://git-scm.com/",
  },
  {
    name: html,
    description: "logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: nodejs,
    description: "logo",
    link: "https://nodejs.org/en/docs/",
  },
  {
    name: reactjs,
    description: "logo",
    link: "https://pt-br.reactjs.org/",
  },
  {
    name: tailwindcss,
    description: "logo",
    link: "https://tailwindcss.com/",
  },
];



export default function Skills() {

  useEffect(() => {
    Aos.init({duration: 500});
    }, []);

  return (
    <div className="mt-4 text-white  h-[90vh] grid pt-20">
      <h1 className="text-2xl font-bold pl-[100px]">Skills</h1>
      <div className="  flex-wrap flex justify-center">
        {items.map((item) => {
          return (
            <button key={item.name} className=" flex justify-center w-[25%] items-center hover:bg-gray-600 rounded-3xl ">
              <a href={item.link}>
                <img
                   data-aos="fade-up"
                   data-aos-duration="500"
                   data-aos-offset="100"
                  className="h-[100px]"
                  src={item.name}
                  alt={`${item.description} ${item.name}`}
                />
              </a>
            </button>
          );
        })}
      </div>
    </div>
  );
}
