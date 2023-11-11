import React from 'react'
import { Link } from 'react-router-dom'
import { AlertRed, Copy, Phone } from '../../assets/icons/IconsSVGConst'

export const DeliveryAlertFound = () => {
  return (
    <>  
    <div className='ml-12 flex flex-col align-center justify-center gap-8 p-20 bg-[#373737] rounded-[1rem] w-[44rem] h-[26rem] ' >
        
        <div className='self-center'><AlertRed /> </div>
        <div className='text-[1rem] font-light text-[#fff] text-wrap text-center'> Kindly note that in the next 72hrs, our delivery firm will contact you to get the belonging you found. <span className='block text-[#ffffff95]'></span> </div>

        <button type='submit' className="mt-8 self-center text-center w-48 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Confirm Delivery</button>
        <div className='self-center col-span-3 text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD85]'>Contact the delivery company  <Link to='/signin' className='flex gap-4 items-center text-[#ffffff95] hover:text-[#ffffff95]  '> <Phone /> +962 70 0000 0000 <Copy /> </Link></div>

        {/* Have a nice day ! */}
    </div>
    </>
  )
}
