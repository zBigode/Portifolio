
import pokedex from "../../assets/pokedex.png";
import netflix from "../../assets/netflix.png";
import CardProject from "../cardProject";

export default function Projects(props) {

  return (
         
          <div  className="mt-20 text-white  min-h-[100vh]">
            <h1 className="text-2xl font-bold pt-20">Projetos</h1>
            <p className="font-light text-gray-400 ">Meus projetos recentes</p>
            <div  className="grid grid-cols-1 md:grid-cols-3  mt-20 gap-5">
                <CardProject name="A project based in netflix to train react Rooks" img={netflix} link={"https://estudo-net-flix.vercel.app/"}/>
                <CardProject name="A pokédex created with Reactjs to practice" img={pokedex}  link={"https://pokedex-pokeapi-two.vercel.app/"} />
                <CardProject name="em breve"  />
            </div>
        </div>
       
  );
}
