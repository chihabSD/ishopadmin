import React from 'react'
import SideBar from '../../components/sidebar'
import "./home.scss"
const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='homeContainer'> Container</div>
    </div>
  )
}

export default Home