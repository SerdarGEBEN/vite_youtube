import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch, IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // aktarılacak metni al
    const text = e.target[0].value;

    // metin boşsa durdur
    if (text.trim() === "") return;

    navigate(`results?search_query=${text}`);
  };

  return (
    <header className="p-4 flex justify-between items-center">
      <Link to={"/"} className="flex  gap-2 items-center">
        <img className="w-[50px]" src="/youtube.png" alt="logo" />
        <h1 className="text-2xl max-sm:hidden font-momo">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="group flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          className="group-hover:border-blue-500 bg-black border border-transparent
           px-5 py-2 outline-none rounded-l-[20px] focus:border-blue-500"
          type="text"
          placeholder="Ara..."
        />
        <button className="border-l px-4 bg-zinc-800 text-2xl">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl">
        <FaBell className="cursor-pointer hover:text-gray-400 duration-500 " />
        <IoIosVideocam className="cursor-pointer hover:text-gray-400 duration-500 " />
        <MdVideoLibrary className="cursor-pointer hover:text-gray-400 duration-500 " />
      </div>
    </header>
  );
};

export default Header;
