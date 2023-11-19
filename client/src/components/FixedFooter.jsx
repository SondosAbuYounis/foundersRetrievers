import { Backtotop, BurgurList, Minus } from '../assets/icons/IconsSVGConst'
import { Link } from 'react-router-dom'
import { Plus } from '../assets/icons/IconsSVGConst'
import React, { useState, useEffect } from 'react';

    
export const FixedFooter = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position and update the visibility state
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100); // Adjust the value based on when you want the button to appear
    
    const scrollPosition = window.scrollY;

      // Adjust the threshold value as needed (e.g., 500 pixels)
      const threshold = 50;
  
      setShowFooter(scrollPosition > threshold);
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach the scroll event listener when the component mounts
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
 
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   
  }, []);


  return (
    <>
    <div className={`${showFooter ? 'fixed' : ''}  bottom-8 z-[1000] left-[28rem] mt-20 flex flex-row items-center justify-center gap-8 mr-16`}>
        
        <button className={`w-[3rem] h-[3rem] rounded-[0.55rem] bg-[#222222] flex justify-center items-center scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <Backtotop />
        </button>

        <div className='w-[30rem] h-[4rem] bg-[#4E4E4E] rounded-[0.55rem] flex flex-row gap-2 p-1.5 justify-end'>
            <div className='w-[8rem] bg-[#222222] rounded-[0.55rem] text-[#fff] text-center text-[0.75rem] flex justify-center items-center gap-1'>BELONGINGS <BurgurList />  </div>
            <div className='w-[24rem] bg-[#3E3E3E] rounded-[0.55rem] flex flex-row gap-2 p-1 justify-end	'>
                <Link  to="/" className="w-[5rem] h-[2.6rem] p-[0.5rem] text-center justify-center flex flex-row inline-block gap-x-2 text-[#fff] bg-none border border-1 border-[#ffffff50]  hover:text-[#FFFFFF50] text-[0.9rem] font-[0.85rem] rounded-[0.5rem] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">HOME</Link>
                <Link  to="/signup" className="w-[7rem] h-[2.6rem] p-[0.5rem] text-center justify-center flex flex-row inline-block gap-x-2 text-[#FBE62E] bg-none border border-1 border-[#ffffff50]  hover:text-[#FFFFFF] text-[0.8rem] font-[1.5rem] rounded-[0.5rem] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><Plus />  I’VE FOUND</Link>
                <Link  to="/signup" className="w-[7rem] h-[2.6rem] p-[0.5rem] text-center justify-center flex flex-row inline-block gap-x-2 text-[#E83434] bg-none border border-1 border-[#ffffff50]  hover:text-[#FFFFFF] text-[0.8rem] font-[1.5rem] rounded-[0.5rem] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><Minus />  I’VE LOST</Link>

            </div>
        </div>

    </div>
    </>
    )
}
