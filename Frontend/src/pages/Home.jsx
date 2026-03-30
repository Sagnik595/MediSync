import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'


const Home = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
    </>
  )
}

export default Home
