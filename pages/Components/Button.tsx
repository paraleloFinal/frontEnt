import { NextPage } from 'next'
import React from 'react'

const Button:NextPage = ({texto='SELECCIONAR'}) => {
  return (
    <div>
        <button className= 'text-white font-bold p-3 rounded-full'>{texto}</button>
        <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold p-3 rounded-lg'>{texto}</button>
    </div>
  ) 
}

export default Button