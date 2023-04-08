import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import kanbanImage from "../assets/kanban.svg";

const Authenticate = ({ loginWithGoogle, signInAnon }) => {
  return (
    <>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            Kamui 🚀 <br />
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Create fast and efficient kanban boards, easily
            </span>{" "}
          </h1>
          <p className="px-0 mb-6 text-lg text-gray-500 md:text-xl lg:px-24">
            <span className="font-bold">Kamui</span> is a free and powerful, yet
            simplified Kanban scheduler with superpowers for everyone. 🚀🔥 Get
            more done in less time. ⏱️
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <button
              onClick={loginWithGoogle}
              className="inline-flex justify-evenly items-center w-36 p-3 rounded-md mb-2 btn btn-primary btn-lg sm:mb-0 mr-2 transition-colors duration-200 transform bg-blue-600 hober:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-white uppercase font-semibold"
            >
              <AiOutlineGoogle /> Google
            </button>
            <button
              onClick={signInAnon}
              className="inline-flex justify-evenly items-center w-36 p-3 rounded-md mb-2 btn btn-primary btn-lg sm:mb-0 mr-2 transition-colors duration-200 transform bg-blue-600 hober:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-white uppercase font-semibold"
            >
              Guest
            </button>
          </div>
          <p className="text-gray-500 font-medium">
            {" "}
            <sup>*</sup>
            Data for guest users will be cleared after log out.
          </p>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <img
            src={kanbanImage}
            alt="kanban-board"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>
    </>
  );
};

export default Authenticate;
