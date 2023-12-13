import cardImage from "../../../public/assets/images/card_pro.png";
import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <div className=" h-screen bg-[#000211]  flex flex-col items-center">
      <div className="">
        <p className="text-[2.5rem] text-center text-[#4c49e9] bg-[#000211] font-bold">
          Petaccia Sébastien
        </p>
        <div className=" my-5 ">
          {/* Create card professional*/}
          <p className="text-[1rem] text-center text-[#fafafb] bg-[#000211] font-bold">
            Développeur web
          </p>
          <p className="text-[1rem] text-center text-[#fafafb] bg-[#000211] font-bold">
            44 ans
          </p>
          <p className="text-[1rem] text-center text-[#fafafb] bg-[#000211] font-bold">
            Contact me
          </p>
          <p className="text-[1rem] text-center text-[#fafafb] bg-[#000211] font-bold">
            06.38.19.47.52
          </p>
        </div>
        <div className="grid grid-col-1 mx-5">
        <div className=" cards bg-[#0b0a2b]  border-gray-200  rounded-2xl  mb-10">
          <a href="#!">
            <img className="rounded-2xl" src={cardImage} alt="card professional" />
          </a>
          <div className="p-2">
            <h5 className="text-[#9c9bed] text-xl font-medium mb-2">
              Card professional
            </h5>
            <p className="text-white text-base mb-4">
              Welcome to my professional space. Fresh from a dedicated web
              development training course in February 2023, I have acquired a
              range of technical skills preparing me to shape the future of the
              web. urrently awaiting results for my web developer title, I am
              ready to dive into the real world of coding and collaboration.
            </p>
          </div>
        </div>
      </div>
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

export default Profil;
