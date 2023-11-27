import React from "react";

export const SideBar = () => {
  return (
    <>
      {/* <div className="absolute left-0 top-0 mt-16 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-r-[1.25rem] flex flex-col gap-4"> */}
      <div className="mt-16 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-r-[1.25rem] flex flex-col gap-4">
        <ul className="flex flex-col">
          {" "}
          Lists
          <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            Over View
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            Users
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            Partners
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            All Losts
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            All Founds{" "}
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            All Retrieved
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Requests{" "}
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Delivery Forms{" "}
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Comments
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Reached Out
          </li>
          {/* <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Donate
          </li> */}
          {/* <li className='text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
          {/* <li className='ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
        </ul>
      </div>
    </>
  );
};
