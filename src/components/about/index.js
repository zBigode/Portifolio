import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Me from "../../assets/me2.jpg";

export default function About() {
  return (
    <div
      className="pt-20"
      data-aos="fade-down"
      data-aos-duration="500"
      data-aos-offset="100"
    >
      <div className=" pt-20 flex min-w-[80%] w-[90%] h-[90vh]">
        .
        <img
          className="w-[30%] min-w-[140px] min-h-[140px] h-[30%]"
          src={Me}
          alt="eu"
        />
        <div className="pl-4 text-[15px] text-zinc-300">
          <h1 className="text-[25px] pb-4">About me:</h1>
          <p>Hi! Im Marcos Gabriel.</p>
          <p>
            Student of information systems at the State University of Montes
            Claros (UNIMONTES), I am a fan of Web programming, especially when
            it comes to Front-End development. I am looking for my first
            professional experience in the field. See some of my{" "}
            <a href="#projects" className="text-blue-600 underline">
              projects
            </a>{" "}
            and
            <a href="#skills" className="text-blue-600 underline">
              {" "}
              skills
            </a>
            :
          </p>
        </div>
      </div>
    </div>
  );
}
