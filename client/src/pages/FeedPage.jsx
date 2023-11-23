import React from 'react'
import { Link } from 'react-router-dom'
import { MainCardLost } from '../components/MainCardLost'
import { CardLost } from '../components/CardLost'
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FoundItBtn } from "../components/uiPrimitives/FoundItBtn"
import { NotSignedIn } from "../components/uiPrimitives/NotSignedIn";
import { MineBtn } from "../components/uiPrimitives/MineBtn";
// import { MainCardFound } from "./MainCardFound";
import { Comment } from "../components/uiPrimitives/Comment";
import { Location } from "../assets/icons/IconsSVGConst";
import { Calendar, Minus, Plus, Share, Cancel } from "../assets/icons/IconsSVGConst";

// import SwiperCore, { Autoplay } from 'swiper/core';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";



// Import Swiper modules
// SwiperCore.use([Autoplay]);


import { useModal } from "../../src/hooks/useContext/ModalContext"
import Modal from "react-modal";
// import { CardFound } from "./CardFound";
import { DeliveryAlertFound } from '../components/DeliveryAlertFound';
import { ConfirmContact } from '../components/uiPrimitives/ConfirmContact';
import Payment from '../components/Payment';
Modal.setAppElement(document.getElementById("root"));




export const FeedPage = ({ isOpen, onRequestClose }) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const { modalIsOpen, openModal } = useModal();
  const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [dataFromSecondAPI, setDataFromSecondAPI] = useState([]);
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const [combinedData, setCombinedData] = useState([]);

  const [confirmContactIsOpen, setConfirmContactIsOpen] = useState(false);
  const [paymentIsOpen, setPaymentIsOpen] = useState(false);

  const openConfirmContact = () => {
    setConfirmContactIsOpen(true);
  };
  const openPayment = () => {
    setPaymentIsOpen(true);
  };
  const closeModal = () => {
    setConfirmContactIsOpen(false);
    setPaymentIsOpen(false);
  };

  useEffect(() => {
    // GET data from LOSTS
    axios
      .get("http://localhost:3000/losts")
      .then((response) => {
        setDataFromFirstAPI(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the first API:", error);
      });

    // GET data from FOUNDS
    axios
      .get("http://localhost:3000/Founds")
      .then((response) => {
        setDataFromSecondAPI(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the second API:", error);
      });
  }, []);

   useEffect(() => {
    const newCombinedData = [];

    for (
      let i = 0;
      i < Math.max(dataFromFirstAPI.length, dataFromSecondAPI.length);
      i++
    ) {
      if (dataFromFirstAPI[i]) {
        newCombinedData.push({ type: "losts", data: dataFromFirstAPI[i] });
      }

      if (dataFromSecondAPI[i]) {
        newCombinedData.push({ type: "found", data: dataFromSecondAPI[i] });
      }
    }

    setCombinedData(newCombinedData);
  }, [dataFromFirstAPI, dataFromSecondAPI]);

  return (
    <>
    <div className='flex flex-col justify-center items-center justify-items-center	'>
    <div className='mt-24 flex flex-row items-end justify-center gap-44'>
      <ul className='flex flex-row gap-4'>
        <li>
          <select name="" id="">
            <option value="">COUNTRY</option>
            <option value="">Jordan</option>
          </select>
        </li>
        <li>
          <select name="" id="">
            <option value="">CITY</option>
            <option value="">Amman</option>
            <option value="">Zarqaa</option>
          </select>
        </li>
      </ul>
      <ul className='flex flex-row gap-4'>
        <li>
          <select name="" id="">
            <option value="">DATE</option>
            <option value="">aug 2023</option>
            <option value="">sep 2023</option>
            <option value="">oct 2023</option>
          </select>
        </li>
        <li className='hover:text-[#18E074]'><Link>LINKED</Link></li>
        <li className='hover:text-[#FBE62E]'><Link>FOUNDS</Link></li>
        <li className='hover:text-[#E83434]'><Link>LOSTS</Link></li>
      </ul>
    </div>
    <hr className=" w-[44rem] mt-4 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
    <select name="" id="" className='mt-4 my-12 ml-[37.5rem]'>
      <option value="">CATEGORY</option> 
      <option value="">Animal</option>
    </select>
    </div>

    <div className='flex flex-row flex-wrap	 justify-center items-center gap-12 mb-28'>
      
    <div className='flex flex-row flex-wrap	 justify-center items-center gap-12 mb-28'>
      {combinedData.map((item, user_id) => (
        <div className="max-w-screen-2xl m-0 overflow-hidden relative">
          {item.type === "losts" ? (
            <div key={item.user_id} className="flex flex-col">
              <div className="flex flex-col">
            <span className="flex flex-row gap-4 inline-block pb-2 text-[#E83434] bg-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <Minus /> I’VE LOST
            </span>
            <div className="p-8 justify-stretch grid grid-col-1 grid-flow-row  bg-[#373737] rounded-[1.25rem] w-[20rem] h-[36rem] ">
              <div className="flex flex-col">
              <button onClick={onRequestClose} className="flex justify-end">
          <Cancel />
        </button>
                <div className="flex flex-row gap-4 ">
                  <img
                    src=""
                    alt="userpic"
                    className="bg-[#CDCDCD] row-span-2 w-10 h-10 rounded-full"
                  />
                  <div className="text-[#CDCDCD] font-light text-[0.9rem]">
                    {item.type}
                    <span className="block text-[#CDCDCD85] font-light text-[0.75rem]">
                      Amman
                    </span>{" "}
                  </div>
                  <div className="pt-[0.3rem] pl-16 text-end text-[#CDCDCD] font-light text-[0.65rem]">
                    21:00 pm <span className="block">11 Nov 2023</span>
                  </div>
                </div>
                <hr className="w-56 content-end m-2 border-[#CDCDCD50] border-dashed  sm:mx-auto dark:border-gray-700" />
                <span className="text-[#CDCDCD] text-start font-light text-[0.75rem]">
                  I’ve lost my wallet please HELP !!
                  <span className="block text-start flex gap-2 items-center ">
                    <Location /> Amman II
                    <span className="inline-block ml-4 flex gap-2 items-center">
                      <Calendar /> 11 Nov 2023
                    </span>
                  </span>
                </span>
                <div className="pt-[0.3rem] pl-16 text-[#CDCDCD] font-light text-[0.65rem]"></div>
              </div>

              <div className="flex flex-col"></div>

              <div className="mt-4 border border-1-solid rounded-[1.25rem]  w-[14rem] h-[14rem]">
                <img src="" alt="" className="rounded-[1.25rem]" />
              </div>

              <div className="mt-8 col-span-1 w-[16rem] h-[4rem] bg-[#86868637] p-4 rounded-[0.75rem]">
                <Comment />
              </div>

              <div className="flex flex-row gap-[4.75rem] items-center">
              <button onClick={openConfirmContact}>
                      <FoundItBtn />
                    </button>
                    <ConfirmContact
                      isOpen={confirmContactIsOpen }
                      onRequestClose={closeModal}
                    />
                <div className="pl-8">
                  <Share />
                </div>
              </div>
            </div>
          </div>
              
              </div>
          ) : (
            <div
      className=" left-[30rem] flex flex-col"
      
    >
      <span className="flex flex-row gap-4 inline-block pb-2 text-[#FBE62E] bg-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Plus /> I’VE FOUND
      </span>
      <div className="p-8 justify-stretch grid grid-col-1 grid-flow-row  bg-[#373737] rounded-[1.25rem] w-[20rem] h-[36rem] ">
        <div className="flex flex-col">
          <div className="flex flex-row gap-4 ">
            <img
              src=""
              alt="userpic"
              className="bg-[#CDCDCD] row-span-2 w-10 h-10 rounded-full"
            />
            <div className="text-[#CDCDCD] font-light text-[0.9rem]">
              {item.username}
              <span className="block text-[#CDCDCD85] font-light text-[0.75rem]">
                {item.city}
              </span>{" "}
            </div>
            <div className="pt-[0.3rem] pl-16 text-end text-[#CDCDCD] font-light text-[0.65rem]">
              21:00 pm <span className="block">
                {item.created_at}
                </span>
            </div>
          </div>
          <hr className="w-56 content-end m-2 border-[#CDCDCD50] border-dashed  sm:mx-auto dark:border-gray-700" />
          <span className="text-[#CDCDCD] text-start font-light text-[0.75rem]">
            {item.description}
            <span className="block text-start flex gap-2 items-center ">
              <Location /> 
              {item.city} II
              <span className="inline-block ml-4 flex gap-2 items-center ">
                <Calendar /> 
                {item.date_found}
              </span>
            </span>
          </span>
          <div className="pt-[0.3rem] pl-16 text-[#CDCDCD] font-light text-[0.65rem]"></div>
        </div>

        <div className="flex flex-col"></div>

        <div className="mt-4 border border-1-solid rounded-[1.25rem]  w-[14rem] h-[14rem]">
          <img src="" alt="" className="rounded-[1.25rem]" />
        </div>

        <div className="mt-8 col-span-1 w-[16rem] h-[4rem] bg-[#86868637] p-4 rounded-[0.75rem]">
          <Comment />
        </div>

        <div className="flex flex-row gap-[4.75rem] items-center">
                        <button onClick={openPayment}>
                        <MineBtn />
                    </button>
                    <Payment 
                      isOpen={paymentIsOpen }
                      onRequestClose={closeModal}
                    />
          <div className="pl-8">
            <Share />
          </div>
        </div>
      </div>
    </div>
          )}
        </div>
      ))}
      </div>
    </div>

    </>
  )
}


