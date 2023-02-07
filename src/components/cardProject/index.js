import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


export default function CardProject(props) {

  useEffect(() => {
    Aos.init({duration: 500});
    }, []);

  return (
    <a href={props.link}>
      {props.name === "em breve" ? (
       <div
       data-aos="fade-up"
       data-aos-duration="500"
       data-aos-offset="100"
       className="hover:bg-zinc-600 w-full h-full bg-zinc-500 rounded-md py-4 px-4 flex items-center justify-center"
           >
            <h1 className="text-black">Em breve</h1>
       <div className="mt-2">
      
       </div>
     </div>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="100"
          className="hover:bg-zinc-600 w-full h-full bg-zinc-500 rounded-md py-4 px-4"
        >
          <img
            src={props.img}
            className="w-full h-56 mx-auto object-cover"
            alt={props.name}
          ></img>
          <div className="mt-2">
            <h1 className="font-bold md:text-xl">{props.name}</h1>
            <p className="font-light md:text-lg">Issued by {props.issued}</p>
            <p className="font-light text-gray-400">{props.desc}</p>

            <p className="font-light text-gray-400">{props.date}</p>
          </div>
        </div>
      )}
    </a>
  );
}
