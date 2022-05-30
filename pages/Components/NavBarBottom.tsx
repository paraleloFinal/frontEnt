import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { NextPage } from 'next';
const NavBarBottom:NextPage = () => {
  const [navButton, setNavButton] = useState(false);
  return (
    <nav className='flex bg-transparent px-2 sm:px-4 py-2.5 rounded text-center overflow-visible' >
      {/*Container*/}
      <div className='flex container  flex-wrap mx-auto py-2 lg:inline-flex lg:items-center'>
        {/*Logo*/}

        <button
         onClick={()=>setNavButton(!navButton)}
        className=' lg:hidden inline-flex items-center justify-center text-black border h-10 w-10 rounded-md outline-none focus:outline-none ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/*Menú*/}
        <div className={`${navButton? '':'hidden'} flex w-full lg:inline-flex mt-2 lg:mt-0 lg:text-center justify-center`}  >
          <ul className='flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:text-center'>
            <li>
              <Link href='/economia/'><p className='flex px-4 py-2 bg-white font-medium text-black hover:bg-gray-100 rounded-md'>Economía</p></Link>
            </li>
            <li>
              <Link href='/politica'><p className='flex px-4 py-2 bg-white font-medium text-black hover:bg-gray-100 rounded-md'>Política</p></Link>
            </li>
            <li>
              <Link href='/deportes'><p className='flex px-4 py-2 bg-white font-medium text-black hover:bg-gray-100 rounded-md'>Deportes</p></Link>
            </li>
            <li>
              <Link href='/tecnologia'><p className='flex px-4 py-2 bg-white font-medium text-black hover:bg-gray-100 rounded-md'>Tecnología</p></Link>
            </li>
            <li>
              <Link href='/tendencias'><p className='flex px-4 py-2 bg-white font-medium text-black hover:bg-gray-100 rounded-md'>Tendencias</p></Link>
            </li>
            <li>
              <Link href='/internacional'><p className='flex px-4 py-2 bg-white font-medium text-black hover:bg-gray-100 rounded-md'>Internacional</p></Link>
            </li>
          </ul>
          
        </div>

      </div>



    </nav>

  )
}

export default NavBarBottom;