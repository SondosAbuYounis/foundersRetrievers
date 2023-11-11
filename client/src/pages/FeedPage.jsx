import React from 'react'
import { MainCardFound } from '../components/MainCardFound'
import { Link } from 'react-router-dom'
import { MainCardLost } from '../components/MainCardLost'

export const FeedPage = () => {
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

    <div className='flex flex-row justify-center items-center gap-12 mb-28'>
      <MainCardFound />
      <MainCardFound />
      <MainCardLost />
    </div>

    </>
  )
}
