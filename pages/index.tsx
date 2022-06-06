import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainMenuOne from './Components/MainMenuOne'
import NavBarBottom from './Components/NavBarBottom'
import ParaleloNavBar from './Components/ParaleloNavBar'

const Home: NextPage = () => {
  
  return (
    <div >
      <Head>
        <title>Noticias Colombia - Paralelo</title>
      </Head>
      <div>
        <ParaleloNavBar/>
        <NavBarBottom/>
        <MainMenuOne/>
        <i className='fas fa-home'/>
      </div>
    </div>
  )
}

export default Home
