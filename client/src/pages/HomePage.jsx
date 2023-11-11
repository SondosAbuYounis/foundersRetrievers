import React from 'react'
import { HomeHero } from '../components/HomeHero'
import { CardHomeFound } from '../components/uiPrimitives/CardHomeFound'
import { CardHomeLost } from '../components/uiPrimitives/CardHomeLost'
import { Link } from 'react-router-dom'
import HowItWorksStatic from '../assets/clips/HowItWorksStatic.png'
import { BeTheLink } from '../components/BeTheLink'
import { CaseStory } from '../components/CaseStory'
import { CardRetrievedHome } from '../components/CardRetrievedHome'
import {PublishLost } from '../components/PublishLost'

export const HomePage = () => {

  return (
    <div >
        <HomeHero />
        <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className='p-4 grid auto-rows-auto	 justify-items-center gap-8	'>
            <div className='place-items-center text-2xl font-semibold'>Recently Lost and Found </div>
            <div className='p-4 flex flex-row gap-8'>
            <CardHomeFound />
            <CardHomeLost />
            </div>
            <div className='text-[0.85rem]'><Link to='/signup' className='text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid ' >Sign Up/ In now.</Link> Be the Link !</div>
        </div>

        <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <div className='p-8 grid auto-rows-auto	 justify-items-center gap-8	'>
          <div className='place-items-center text-2xl font-semibold'>How it works ? </div>
          <img src={HowItWorksStatic} alt="" className='p-12 w-[80rem]'/>
          <div className='text-[0.85rem]'>Learn <Link to='/aboutus' className='text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid ' >more</Link></div>
        </div>
        
        <BeTheLink />

        <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />
        
        <div className='p-4 grid auto-rows-auto	 justify-items-center gap-8	mb-12'>
          <div className='place-items-center text-2xl font-semibold'>Recently Linked </div>
          <div className='flex flex-row gap-8 p-12'>
            <CardRetrievedHome />
            <CardRetrievedHome />
          </div>
          <div className='text-[0.85rem]'><Link to='/signup' className='text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid ' >Sign Up/In  </Link>now. Be the Link !</div>
        </div>

        <div className='flex flex-col place-items-center align-items-center gap-8 mb-12'>
          <div className='text-2xl font-semibold'> Case Story</div>
          <CaseStory />
        </div>

      <PublishLost />

    </div>
  )
}
