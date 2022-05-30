import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

const SocialNetworks:NextPage = () => {
  return (
    <div className='flex justify-center w-auto'>
      <ul>
        <li><Link href=''>Facebook</Link></li>
        <li><Link href=''>Twitter</Link></li>
        <li><Link href=''></Link></li>
      </ul>


    </div>
  )
}

export default SocialNetworks