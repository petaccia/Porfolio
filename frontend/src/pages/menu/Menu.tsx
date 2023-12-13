import { Link } from "react-router-dom";
import menuImage from "../../../public/assets/images/menu.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div className=" h-screen bg-[#000211]  flex flex-col items-center">
      <h1 className="text-3xl text-center text-[#4c49e9] bg-[#000211] font-bold">
        Menu
      </h1>
      <div className=" mt-10 ">
        <img src={menuImage} alt="menu" className="w-36 rounded-full " />
      </div>
      <div className=" grid grid-cols-2 gap-10 mt-32  justify-center">
        <Link to="/" className="button-menu w-[100px] h-[100px] text-xl text-[#fafafb] bg-[#173C61] font-bold flex justify-center items-center rounded-full border-8 border-[#6699CC]">
          Home
        </Link>
        <Link to="/profil" className="button-menu w-[100px] h-[100px] text-xl text-[#fafafb] bg-[#173C61] font-bold flex justify-center items-center rounded-full border-8 border-[#6699CC]">
          Profil
        </Link>
        <Link to="/projects" className="button-menu w-[100px] h-[100px] text-xl text-[#fafafb] bg-[#173C61] font-bold flex justify-center items-center rounded-full border-8 border-[#6699CC]">
          Projects
        </Link>
        <Link to="/contact" className="button-menu w-[100px] h-[100px] text-xl text-[#fafafb] bg-[#173C61] font-bold flex justify-center items-center rounded-full border-8 border-[#6699CC]">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Menu;
