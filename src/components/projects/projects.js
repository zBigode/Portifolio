import React from "react";
import pokedex from "../../assets/pokedex.png";
import netflix from "../../assets/netflix.png";
import CardProject from "../cardProject";

export default function Projects(props) {
  return (
         
          <div  className="mt-4 text-white text-center h-[90vh] pt-20">
            <h1 className="text-2xl font-bold">Projetos</h1>
            <p className="font-light text-gray-400">Meus projetos recentes</p>
            <div className="grid grid-cols-1 md:grid-cols-3  mt-4 gap-5">
                <CardProject name="Bootcamp Btech Academy Cloud Engineer" img={netflix} link={"https://estudo-net-flix.vercel.app/"}/>
                <CardProject name="Mikrotik Certfied Network Associate" img={pokedex}  link={"https://pokedex-pokeapi-two.vercel.app/"} />
                <CardProject name="em breve"  />
            </div>
        </div>
       
  );
}
