import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoTwoPng from "../assets/LogoTwoPng.png";
import { Plus, LinkIcon, Minus, Profile, BurgurList } from "../assets/icons";
import { SideBar } from "./SideBar";

export const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

  const handleDivClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="relative flex flex-row items-center justify-between">
        {/* <button onClick={handleDivClick} className="items-start z-2">
        <BurgurList />
        </button>
        {isClicked && (
            <SideBar />
        )} */}
      <img
        src={LogoTwoPng}
        className="px-3 pb-2 mt-6 gap-x-4  h-[4rem] justify-self-start	"
      />
      <ul className="flex flex-row pt-2 mt-4">
        <li className=" mb-2 mt-6 mx-2">
          {/* SEARCH  */}
          <div class="pt-2 relative ">
            <input
              class=" placeholder-[#868686] border border-[#868686] bg-[#86868610] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
              <svg
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsxlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlspace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>{" "}
        </li>
        {/* <li>
            <Profile />
        </li> */}
        <li className=" mb-2 mt-6 mx-2">
                <Link to=""> <button className=" px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 whitespace-nowrap ">LOG OUT </button></Link>
            </li>
      </ul>
    </div>
  );
};
