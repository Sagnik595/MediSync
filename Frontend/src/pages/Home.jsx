import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Nav/>
      <Banner/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Header/>
      <Footer/>
    </>
  )
}

export default Home
