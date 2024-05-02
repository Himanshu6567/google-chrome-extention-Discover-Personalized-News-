import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaSearchPlus, FaBars, FaTimes } from "react-icons/fa";
import Image from "../public/Daily-newbg.png";

export default function Navbar({
  setSearchValue,
  handleSearch,
  setAboutShow,
  searchValue,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="py-2 bg-gray-700">
      <nav className="flex items-center justify-between h-16 px-6 bg-gray-500 md:px-16">
        <div className="flex items-center justify-center space-x-3">
          <img
            onClick={() => {
              setAboutShow(false);
            }}
            className="w-12 h-12 rounded-full cursor-pointer"
            src={Image}
            alt="Daily News Logo"
          />
          <h1
            onClick={() => {
              setAboutShow(false);
            }}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            Daily News
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={`md:flex md:items-center md:justify-center md:space-x-5 w-full md:w-auto bg-gray-500`}
          >
            <div className="flex items-center justify-center space-x-3 w-96">
              <input
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                value={searchValue}
                type="text"
                className="px-4 py-2 text-sm text-gray-700 placeholder-gray-500 bg-gray-300 rounded-md focus:border-b-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                name="search"
                placeholder="Search for news"
              />
              <button
                type="submit"
                className="px-4 py-[11px] text-white transition-colors duration-300 bg-gray-400 rounded-md hover:bg-gray-600"
              >
                <FaSearchPlus />
              </button>
              <button
                onClick={() => {
                  setAboutShow(true);
                }}
                className="block px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:text-gray-300"
              >
                About
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-gray-300"
              >
                <AiFillGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-3 md:hidden">
          <button
            className="text-white transition-colors duration-300 hover:text-gray-300"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
      {/* hidden start */}
      {isOpen && (
        <div className="flex-col items-center justify-center md:hidden ">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center space-x-3">
              <input
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                value={searchValue}
                type="text"
                className="px-4 py-2 text-sm text-gray-700 placeholder-gray-500 bg-gray-300 rounded-md focus:border-b-2 focus:outline-none focus:ring-2 focus:ring-gary-700"
                name="search"
                placeholder="Search for news"
              />
              <button
                type="submit"
                className="px-4 py-[11px] text-white transition-colors duration-300 bg-gary-400 rounded-md hover:bg-gray-600"
              >
                <FaSearchPlus />
              </button>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  setAboutShow(true);
                }}
                className="block px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:text-gray-300"
              >
                About
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-gray-300"
              >
                <AiFillGithub className="text-2xl" />
              </a>
            </div>
          </form>
        </div>
      )}
      {/* hidden end */}
    </div>
  );
}
