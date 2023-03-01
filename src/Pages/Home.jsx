import React from 'react'
import Features from '../Components/Features'
import HomeBlog from '../Components/HomeBlog'
import Homecta from '../Components/Homecta'
import LatestProduct from '../Components/LatestProduct'
import PopularBrands from '../Components/PopularBrands'
import Slider from '../Components/Slider'
import SliderNavigation from '../Components/SliderNavigation'
import Topcatagories from '../Components/Topcatagories'
import TopMost from '../Components/TopMost'

const Home = () => {
  return(
  <>
  <Slider />
  <SliderNavigation />
  <TopMost />
  {/* <Features /> */}
  <Homecta />
  <Topcatagories />
  <PopularBrands />
  <LatestProduct />
  <HomeBlog />
  </>
   
  )
}

export default Home