// import React, { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import { BiSolidAward } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function App() {

 
  return (

    <div className="scrollbar-thin overflow-x-scroll">
       <div className=" h-screen  scrollbar-thin  bg-gradient-to-r relative p-7  from-[#FFEFBA] to-[#FFFFFF]    ">
      <nav className="flex border-b pb-4 relative  justify-around">

        <div className="text-2xl font-greyet">Mohammad Edris</div>

        <div className="flex   space-x-10">
          <div className="hover: cursor-pointer font-saudager border-gray-700 delay-75 ease-in-out pb-2 duration-100 ">About</div>
          <div className="hover: cursor-pointer font-saudager border-gray-700 delay-75 ease-in-out pb-2 duration-100 ">Experience</div>
          <div className="hover: cursor-pointer font-saudager border-gray-700 delay-75 ease-in-out pb-2 duration-100 ">Project</div>
          <div className="hover: cursor-pointer font-saudager border-gray-700 delay-75 ease-in-out pb-2 duration-100 ">Contact</div>
        </div>
      </nav>
      <section className="mt-40 flex gap-10 items-center    ml-60">
        <div className="">
          <img src="./src/image/my.jpeg" className="size-64  ring-gray-900 ring-1  rounded-full  bg-cover object-cover" alt="" />
        </div>
        <div>
          <h4 className="text-xs">Hello i'm</h4>  
          <h1 className="text-2xl font-adoria text-slate-900">Mohammad Edris</h1>
          <p className="text-lg font-semibold  pb-5 text-slate-700">Wep Development</p>        
          <button className="mr-5   border hover:bg-slate-100 border-slate-950  00 px-3 py-3 rounded-xl text-sm">downloade CV</button>
          <button className="border hover:bg-slate-900  px-3 py-3 rounded-xl text-sm bg-gray-800 text-white">Contact info</button>
          <div className="flex pt-4 cursor-pointer text-2xl px-3 gap-3">
          <FaLinkedin />
          <FaGithub />

          </div>

        </div>
      </section>

          <div className="flex justify-center pt-10">
          <FaAnglesDown />

          </div>

    </div>
      <article className="bg-gradient-to-r relative p-7  from-[#FFEFBA] to-[#FFFFFF] h-screen ">
        <div className="">
          <h1 className="text-center text-5xl font-greyet">About Me</h1>

          <div className="pt-20 pl-20 flex   items-center space-x-10  ">
            <img src="./src/image/my.jpeg" className="size-64 ring-1 ring-gray-950 object-cover drop-shadow-xl saturate-200 rounded-xl bg-top" alt="" />
         
         
          <div className="text-center flex flex-col font-Clash items-center border-gray-950 border p-5 rounded-lg px-20">
          <BiSolidAward  className=" size-5"/>
          <h1 className="pt-3 font-semibold">Experince</h1>
          <p className="text-green-600">2+ years</p>
          <p className="">Wep Development</p>
          </div>

          <div className="text-center flex flex-col font-Clash  items-center border border-gray-950 p-5 rounded-lg px-20">
          <FaUserGraduate className=" size-5" />
          <h1 className="pt-3 font-semibold ">Education</h1>
          <p className="">computer since maneger</p>
          <p className="">Wep Development</p>
          </div> 
          </div>
            
        </div>
      </article>
    </div>
   
   
  );
}

export default App;
