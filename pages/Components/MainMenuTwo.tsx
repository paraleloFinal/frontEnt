import { NextPage } from 'next'
import React from 'react'

const MainMenuTwo:NextPage = () => {
    return (
        <div className='bg-blue-700 min-h-screen flex items-center justify-center'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:ml-56 2xl:ml-64 2xl:mr-64 lg:mr-56 md:ml-24 md:mt-16 md:mr-20 sm:mt-20 sm:ml-7 sm:mr-7 ml-5 mr-5 mt-20'>
                <div className='lg:col-span-2   bg-white p-3 rounded'>1</div>
                <div className='bg-white p-3 rounded'>2</div>
                <div className='bg-white p-3 rounded'>3</div>
                <div className='bg-white p-3 rounded'>4</div>
                <div className='bg-white p-3 rounded'>5</div>
                <div className='bg-white p-3 rounded'>6</div>
                <div className='bg-white p-3 rounded'>7</div>
                <div className='bg-white p-3 rounded'>8</div>
                <div className='bg-white p-3 rounded'>9</div>
                <div className='lg:col-span-2 bg-white p-3 rounded'>10</div>

            </div>

        </div>
    )
}

export default MainMenuTwo