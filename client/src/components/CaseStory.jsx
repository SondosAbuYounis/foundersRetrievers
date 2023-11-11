import React from 'react'
import { Comment } from './uiPrimitives/Comment'

export const CaseStory = () => {
  return (
    <>
    <div className='flex flex-row justify-items-center gap-8'>
            <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
                <Comment />
            </div>
            <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
                <Comment />
            </div>
            <div className='col-span-1 w-[20rem] bg-[#86868637] p-4 rounded-[0.75rem]'>
                <Comment />
            </div> 
    </div>
    </>
    )
}
