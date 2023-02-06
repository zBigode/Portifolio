import React from "react";

import Me from "../../assets/me2.jpg";

export default function Home() {
  return (
   
    <div  className="pt-20">
      <div className="pl-[90px] pt-20 flex min-w-[70%] w-[80%] h-[90vh]">.
        <img className="w-[30%] min-w-[140px] min-h-[140px] h-[50%]" src={Me} alt="eu" />
        <div className="pl-4 text-[15px] text-zinc-300">
        <h1 className="text-[25px] pb-4">Sobre mim:</h1>
            <p>Olá! Eu sou Marcos Gabriel, tenho 20 anos e curso Sistemas de informação na Universidade Estadual de Montes Claros.</p>
            <p>Atualmente estou atuando na Software house Lecode como estagiário e tenho conhecimento em:</p>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Tailwindcss</li>
            <li>HTML</li>
            <li>Typescript</li>
        </div>
      </div>
    </div>
 
  );
}
