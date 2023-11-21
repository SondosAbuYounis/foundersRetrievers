// NORMAL CARDS

// import React from 'react'
// import { Comment } from './uiPrimitives/Comment'

// export const CaseStory = () => {
//   return (
//     <>
//     <div className='flex flex-row justify-items-center gap-8'>
//             <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
//                 <Comment />
//             </div>
//             <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
//                 <Comment />
//             </div>
//             <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
//                 <Comment />
//             </div> 
//     </div>
//     </>
//     )
// }


/////////////<< CARDS WITH SWIPER >>///////////////////

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Minus, Plus } from '../assets/icons/IconsSVGConst'
import { FoundItBtn } from '../assets/icons/IconsSVGConst';
import { NotSignedIn } from '../components/uiPrimitives/NotSignedIn';
import { MineBtn } from '../components/uiPrimitives/NotSignedIn';
// import SwiperCore, { Autoplay } from 'swiper/core';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Import Swiper modules
// SwiperCore.use([Autoplay]);

export const CaseStory = () => {
  const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [dataFromSecondAPI, setDataFromSecondAPI] = useState([]);

  useEffect(() => {
    // GET data from LOSTS
    axios.get('http://localhost:3000/users')
      .then(response => {
        setDataFromFirstAPI(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from the first API:', error);
      });

//     // GET data from FOUNDS
//     axios.get('http://localhost:3000/Founds')
//       .then(response => {
//         setDataFromSecondAPI(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data from the second API:', error);
//       });
  }, []);

//   const combinedData = [];

//   for (let i = 0; i < Math.max(dataFromFirstAPI.length, dataFromSecondAPI.length); i++) {
//     if (dataFromFirstAPI[i]) {
//       combinedData.push({ type: 'losts', data: dataFromFirstAPI[i] });
//     }

//     if (dataFromSecondAPI[i]) {
//       combinedData.push({ type: 'found', data: dataFromSecondAPI[i] });
//     }
//   }

  const swiperParams = {
    autoplay: {
      delay: 3000, // Set the autoplay delay in milliseconds
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
      },
      825: {
        slidesPerView: 3,
      },
      1120: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 10,
      },
    },
    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10,
    spaceBetween: -50,
    freeMode: true,
    navigation: false,
    loop: true,
    effect: "fade",
  };

  return (
    <div className='max-w-screen-2xl m-0 overflow-hidden relative'>

      <Swiper {...swiperParams}>
        {dataFromFirstAPI.map((item, user_id) => (
          <SwiperSlide key={item.user_id}>
            <div className='flex flex-row justify-items-center gap-8'>
            <div className='flex flex-row gap-6 '>
                <img src="" alt="userpic" className='bg-[#000] row-span-2 w-10 h-10 rounded-full'/>
                <div className='flex flex-col'>
                    <span className='text-[#000] font-light text-[0.9rem]'>{item.username}</span>
                    <span className='text-[#00000085] font-light text-[0.75rem]' >{item.description}</span> 
                </div>     
            </div>
         </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};
