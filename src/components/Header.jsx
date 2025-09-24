import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {
  bell_icon,
  bookmark,
  explore_icon,
  hobbies_icon,
  logo,
  menu_icon,
  product,
  search_icon,
  search_icon_mobile,
} from "..";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed z-50
          w-[360px] h-[48px]
          left-1/2 transform -translate-x-1/2
          md:w-[clamp(768px,80vw,1024px)] md:h-[clamp(56px,7vw,72px)]
          md:left-1/2 md:-translate-x-1/2 md:transform
          lg:w-[1024px] lg:h-[72px]
          xl:w-[1440px] xl:h-[80px]
          flex items-center justify-between md:px-8
          bg-white
        "
      >
        <div className="mr-4">
          <a href="#">
            <img
              src={logo}
              alt="Logo"
              className="
                w-[156px] h-[32px]
                md:w-[220px] md:h-[48px]
                lg:w-[293px] lg:h-[60px]
              "
            />
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <form className="hidden md:flex">
            <input
              title="search"
              placeholder="Search here..."
              type="text"
              className="
                bg-[#F8F9FA] 
                text-left 
                lg:w-[300px] h-[40px] 
                md:w-[200px]
                rounded-tl-[8px] rounded-bl-[8px] 
                pl-4 
                outline-none
                border-2 border-[#EBEDF0]
              "
            />
            <button
              type="submit"
              className="
                w-[40px] h-[40px] 
                rounded-tr-[8px] rounded-br-[8px] 
                bg-[#8064A2] 
                flex items-center justify-center hover:cursor-pointer
              "
            >
              <img src={search_icon} alt="search" height="16px" width="16px" />
            </button>
          </form>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-4">
            <div className="flex items-center gap-2">
              <img src={explore_icon} className="w-6 h-6" alt="Explore" />
              <Dropdown text="Explore">
                <ul>
                  <li className="p-2 hover:bg-purple-100 cursor-pointer rounded">
                    Courses
                  </li>
                  <li className="p-2 hover:bg-purple-100 cursor-pointer rounded">
                    Resources
                  </li>
                  <li className="p-2 hover:bg-purple-100 cursor-pointer rounded">
                    Accessories
                  </li>
                </ul>
              </Dropdown>
            </div>
            <div className="flex items-center gap-2">
              <img src={hobbies_icon} className="w-6 h-6" alt="Hobbies" />
              <Dropdown text="Hobbies">
                <ul>
                  <li className="p-2 hover:bg-purple-100 cursor-pointer rounded">
                    Hobbie1
                  </li>
                  <li className="p-2 hover:bg-purple-100 cursor-pointer rounded">
                    Hobbie2
                  </li>
                  <li className="p-2 hover:bg-purple-100 cursor-pointer rounded">
                    Hobbie3
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>

          <a
            href="#"
            className="md:hidden h-6 w-6 flex items-center justify-center"
          >
            <img src={search_icon_mobile} alt="Search" />
          </a>
          <a
            href="#"
            className="hidden md:flex h-6 w-6 items-center justify-center"
          >
            <img src={bookmark} alt="bookmark" />
          </a>
          <a
            href="#"
            className="hidden md:flex h-6 w-6 items-center justify-center"
          >
            <img src={bell_icon} alt="Notifications" />
          </a>
          <a
            href="#"
            className="hidden md:flex h-6 w-6 items-center justify-center"
          >
            <img src={product} alt="Product" />
          </a>

          <div className="hidden md:flex justify-center items-center w-[112px] h-[40px] rounded-[8px] border-[1px] border-[#8064A2] text-[#8064A2] font-semibold hover:bg-[#8064A2] hover:text-white hover:cursor-pointer transition-colors duration-200 ease-in-out">
            Sign In
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden h-6 w-6 flex items-center justify-center"
          >
            <img src={menu_icon} alt="Menu" />
          </button>
        </div>
      </header>

      <div
        className={`
    fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg z-50 p-6
    flex flex-col gap-6 transform transition-transform duration-300 ease-out
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-end text-xl font-bold"
        >
          ✕
        </button>
        <a href="#" className="text-[#8064A2] font-medium ">
          Explore
        </a>
        <a href="#" className="text-[#8064A2] font-medium ">
          Hobbies
        </a>
        <a href="#" className="text-[#8064A2] font-medium ">
          Sign In
        </a>
        <a href="#" className="text-[#8064A2] font-medium ">
          Bookmarks
        </a>
        <a href="#" className="text-[#8064A2] font-medium ">
          Notifications
        </a>
        <a href="#" className="text-[#8064A2] font-medium ">
          Product
        </a>
      </div>
    </>
  );
}

export default Header;
