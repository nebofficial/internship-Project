import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
import Slider from '../components/Sider';
import Topper from '../components/Topper';
import Paidbook from '../components/Paidbook';
import Team from '../components/team';






function Home() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Navbar/>
   <Banner/>
   <hr />
   <Slider/>
   <br /> <hr /> 
   <Freebook/>
   <Paidbook/>
   <Topper/>
  <Team/>


   <Footer/></div>
    </>
  )
}

export default Home;
