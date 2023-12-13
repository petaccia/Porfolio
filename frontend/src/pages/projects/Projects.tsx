import dbz from "../../../public/assets/image_project/dbz.png";
import html from "../../../public/assets/icon_Stack/HTML5.svg";
import css from "../../../public/assets/icon_Stack/CSS3.svg";
import js from "../../../public/assets/icon_Stack/JavaScript.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="h-screen bg-[#000211] flex flex-col items-center">
      <h1 className="text-3xl text-center text-[#4c49e9] bg-[#000211] font-bold">
        Projects
      </h1>
      <div className="grid grid-cols-1 mx-5 mt-10">
        <div className=" cards bg-[#0b0a2b]  border-gray-200  rounded-2xl  mb-10">
          <a href="#!">
            <img className="rounded-2xl" src={dbz} alt="card professional" />
          </a>
          <div className="p-2">
            <h5 className="text-[#9c9bed] text-xl font-medium mb-2">
              Project DBZ
            </h5>
            <p className="text-white text-base mb-4">
              The Dragon Team project marked my exciting foray into web
              development. As my first team project at WildCode School, it was
              here that I applied foundational coding skills in a real-world
              scenario. We tackled challenges head-on. This experience sharpened
              my technical skills and solidified my passion for development.
            </p>
            <p className="text-[#9c9bed] text-xl font-medium mb-4">
              Level : Beginner
            </p>
            {/*Use technologies*/}
            <div className="flex flex-row">
              <img src={html} alt="logo html" width={40} />
              <img src={css} alt="logo css" width={40} className="ml-2" />
              <img src={js} alt="logo js" width={40} className="ml-2" />
            </div>
          </div>
        </div>
        {/* Add more manga cards here */}
    
      </div>
      <div className="bg-[#000211]   flex justify-center items-center ">
        <Link
          to="/menu"
          className=" w-full bg-[#000211] text-center py-2 font-bold text-2xl text-[#4c49e9]  fixed bottom-0"
        >
          Menu
        </Link>
      </div>

    </div>
  );
};

export default Projects;
