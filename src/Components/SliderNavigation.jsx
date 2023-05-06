import React from "react";
import { useEffect } from "react";
import { useState } from "react";
 import { ProductCategory } from "./data";
 import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay, EffectCoverflow  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

const SliderNavigation = () => {
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  // const fetchData = () => {
  //   http://15.207.31.23:5000/uniquecategories
  //   fetch("http://15.207.31.23:5000/fetch")

  //     .then(response => {
  //       console.log(response);
  //       return response.json()
  //     })
  //     .then(data => {
  //       setData(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  // const fetchCategory = () => {
   
  //   fetch("http://15.207.31.23:5000/uniquecategories")

  //     .then(response => {
  //       console.log(response);
  //       return response.json()
  //     })
  //     .then(data => {
  //       setCategory(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchCategory()
  // }, [])
  // const fetchSubCategory = () => {
   
  //   fetch("http://15.207.31.23:5000/uniquesubcategories")

  //     .then(response => {
  //       console.log(response);
  //       return response.json()
  //     })
  //     .then(data => {
  //       setSubCategory(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchSubCategory()
  // }, [])
  const machineData = Object.entries(data);
  console.log("machineunique=>", machineData);
  // const machineData = Object.values(data);
  // let uniqueCat = [...new Set(machineData.map((cat) => cat[1].category))];
  // console.log("catee", uniqueCat);
  return (
    <div className="header__bottom d-lg-block">
      <div className="container"> 
      <div className="product-slider swiper-container catpsheight">
          <Swiper
       
        breakpoints={{
            370: {
              // width: 576,
              slidesPerView: 2,
            },
            500: {
              // width: 576,
              slidesPerView: 2,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
            },
            1024: {
              // width: 768,
              slidesPerView: 6,
            },
          }}
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              // EffectCoverflow,
              EffectFade,
              Autoplay,
            ]}
           loop
            spaceBetween={30}
            slidesPerView={6}
            navigation ={{
              prevEl: ".bs2-button-prev", nextEl: ".bs2-button-next"
              
          }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}       
        
        className="swiper-wrapper">
            <div className="box-items-inner pt-10 pb-10">   
               {  
                ProductCategory.map((category)=>(
            
            <SwiperSlide className="box-item disflex">            
                
              <Link to={`/products/${category.Category.replace(/ +/g, "-").toLowerCase()}`} state={{category:`${category.Category}`}}>
              <img src="assets/image/press-machine.gif" className="wid-mr" />
             
                      {category.Category}
               </Link>      
                      
            
           
         
            </SwiperSlide>

                 
            )) }  
           
          
         
         
       
        
           </div>
          
          
          
          </Swiper> 
          </div>  
         
          
          
          
           
          
        
       
      </div>
    </div>
  );
};

export default SliderNavigation;
