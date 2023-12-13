import { Link } from "react-router-dom";
import "./Home.css";

export const Home = (): JSX.Element => {
  return (
    <div className=" min-h-screen bg-[#000211] relative">
      <header>
        <h1 className="text-3xl text-center text-[#4c49e9] bg-[#000211] font-bold fon">
          Home
        </h1>
      </header>
      <main className="bg-[#000211] flex flex-col justify-center w-full mb-16 ">
        <section className="bg-[#000211]">
          <img
            className=""
            alt=""
            src="../../../public/assets/images/accueil.png"
          />
          <article className="">
            <p className="bg-white p-4 rounded-tr-[40px] rounded-br-[80px] rounded-bl-[30px] rounded-tl-[30px] absolute w-[180px] top-[242px] left-[204px] [font-family:'Righteous-Regular',Helvetica] font-normal  text-[12px]  leading-[normal] bublle-custom">
              <span className="text-black">
                Bonjour, je suis dans un monde numérique en <br />
                constante évolution, <br />
                je suis
              </span>
              <span className="text-[#03014d]">&nbsp;</span>
              <span className="text-[#4c49e9]">Sébastien Petaccia</span>
              <span className="text-black">, votre</span>
              <span className="text-[#4c49e9]">
                {" "}
                dévoloppeur web
                <br />
              </span>
              <span className="text-black">
                et artisan du code, prêt à relever votre prochain
                <br /> défi web.
              </span>
            </p>
          </article>
          <div className="flex justify-around items-center gap-3 m-5">
            <div className=" bg-[#4c49e9] w-[114px] h-[50px] flex justify-center items-center rounded-[10px]">
              <button className=" bg-[#173C61] w-[97px] text-white font-bold py-2  rounded text-xs border-4 border-black shadow-[0_10px_10px_0(0,0,0,0,5)] ">
                Linkedin
              </button>
            </div>
            <div className=" bg-[#4c49e9] w-[114px] h-[50px] flex justify-center items-center rounded-[10px]">
              <button className=" bg-[#173C61] w-[97px] text-white font-bold py-2  rounded text-xs border-4 border-black shadow-[0_10px_10px_0(0,0,0,0,5)] ">
                Github
              </button>
            </div>
            <div className=" bg-[#4c49e9] w-[114px] h-[50px] flex justify-center items-center rounded-[10px]">
              <button className=" bg-[#173C61] w-[97px] text-white font-bold py-2  rounded text-xs border-4 border-black shadow-[0_10px_10px_0(0,0,0,0,5)] ">
                Contact me
              </button>
            </div>
          </div>
        </section>
        <section className="bg-[#000211] mx-5 my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className=" cards bg-[#000211] border border-gray-200 rounded-lg  hover:bg-[#0b0a2b]   max-w-sm">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-[#9c9bed] text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white text-base mb-4">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <button className="bg-blue-500 hover:bg-[#2925aa] text-white font-bold py-2 px-4 rounded">
                  Button
                </button>
              </div>
            </div>
            <div className=" cards bg-[#000211] border border-gray-200 rounded-lg  hover:bg-[#0b0a2b]   max-w-sm">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-[#9c9bed] text-xl font-medium mb-2">
                  Card title
                </h5>
                <p className="text-white text-base mb-4">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <button className="bg-blue-500 hover:bg-[#2925aa] text-white font-bold py-2 px-4 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="bg-[#000211] mx-5  flex justify-center items-center ">
      <Link to="/menu" className=" w-full bg-[#000211] text-center py-2 font-bold text-2xl text-[#4c49e9] rounded-[20px] fixed bottom-0">Menu</Link>
      </div>
    </div>
  );
};

export default Home;
