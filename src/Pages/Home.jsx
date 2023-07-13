import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Features from '../Components/Features'
import HomeBlog from '../Components/HomeBlog'
import Homecta from '../Components/Homecta'
import LatestProduct from '../Components/LatestProduct'
import PopularBrands from '../Components/PopularBrands'
import Slider from '../Components/Slider'
import SliderNavigation from '../Components/SliderNavigation'
import Topcatagories from '../Components/Topcatagories'
import TopMost from '../Components/TopMost'
import { fetchAsyncProducts } from '../Redux/products/productSlice'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  const dispatch = useDispatch();
  const productText = "laser";
  // const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncProducts(productText));
 
  }, [dispatch]);
  return(
  <>
  <h1>
    here
  </h1>
  <Slider />
  <SliderNavigation />
  <Topcatagories />
  <TopMost />
  
  <PopularBrands />
  
  {/* <Features /> */}
  <Homecta />  
  <LatestProduct />
  <Testimonials />
  <HomeBlog />
  </>
   
  )
}

export default Home
