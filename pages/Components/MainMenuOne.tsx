import { NextPage } from 'next'
import React from 'react'

const MainMenuOne:NextPage = () => {
  return (
    <div className=' bg-blue-400  flex items-center justify-center '>
    
    <div className='grid md:grid-col-2 lg:grid-col-3 gap-2 w-full lg:ml-56 2xl:ml-64 2xl:mr-64 lg:mr-56 md:ml-24 md:mt-16 md:mr-20 sm:mt-20 sm:ml-7 sm:mr-7 ml-5 mr-5 mt-20'>
        <div className='md:col-span-2 lg:col-span-3 bg-white p-3 rounded lg:h-96'>
        1
        </div>
        <div className='lg:col-span-2 bg-white p-3 rounded lg:h-96 lg:w-auto'>2</div>
        <div className='md:row-span-2 bg-white p-3 rounded '>3</div>
        <div className='bg-white p-3 rounded lg:h-64'>4</div>
        <div className='bg-white p-3 rounded'>5</div>
        <div className='lg:row-span-2 bg-white p-3 rounded lg:h-80'>6</div>
        <div className='md:col-span-2 bg-white p-3 rounded'>7</div>
        <div className='bg-white p-3 rounded'>8</div>
        <div className='bg-white p-3 rounded'>9</div>
        <div className='md:col-span-2 lg:col-span-2 bg-white p-3 rounded lg:h-80'>10</div> 
        <div className='bg-white p-3 rounded'>11</div> 
        <div className='bg-white p-3 rounded lg:h-80'>12</div>
        <div className='md:col-span-2 bg-white p-3 rounded'>13</div> 
    </div>
    
    
    
    </div>
  )
}

export default MainMenuOne