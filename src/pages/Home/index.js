import React from 'react'
import Nabar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import "./home.scss"
const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='homeContainer'> 
      <Nabar />
      Home container
      </div>
    </div>
  )
}

export default Home