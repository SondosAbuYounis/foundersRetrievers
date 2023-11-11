import React from 'react'
import { Plus, LinkIcon, Minus } from '../assets/icons/IconsSVGConst'
import { Comment } from './uiPrimitives/Comment'
import heroNow from '../assets/clips/heroNow.png'

export const CardRetrievedHome = () => {
    return (
    <>  
    <div className='flex flex-col'>
      <span className="flex flex-row  gap-4 inline-block border-[#fff]  text-[#18E074] bg-none text-[0.7rem] font-semibold rounded-[0.65rem] text-xs dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-[7rem]"> <LinkIcon />  RETRIEVED</span>
      <div className='flex rounded-[1.25rem] w-[18rem] h-[25rem]' style={{ backgroundImage: `url(${heroNow})` }} >
          <div className='self-end bg-[#86868637] p-4 w-[18rem]  rounded-b-[1.25rem]'><Comment /></div>
      </div>
    </div>
    </>
  )
}
