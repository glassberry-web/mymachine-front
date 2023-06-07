import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";
import { getLatestpopup } from '../Redux/products/PopupSlice';
import { useSelector, useDispatch } from 'react-redux';
 import { setLatestShow, setShow } from '../Redux/products/PopupSlice';
 import ProductEnquiryForm from './ProductEnquiryForm';
 import { Link, NavLink } from 'react-router-dom';

import { sectionTitleData } from './data'
import SectionTitle from './SectionTitle'
import LatestEnquiryForm from './LatestEnquiryForm';
import {GiLaserPrecision} from "react-icons/gi"


const LatestProduct = () => {
    const [title , SetTitle] = useState(sectionTitleData);
    const [data, setData] = useState([])
    const popup = useSelector(getLatestpopup);
   
    const dispatch = useDispatch();
    const fetchData = () => {
      // fetch("http://localhost:5000/api/fetch")
      fetch("https://mymachinestore.com/api/fetch")
      
        .then(response => {
          console.log("lat=>",response);
          return response.json()
        })
        .then(data => {
          setData(data)
          console.log("latesttt=>",data);
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
    const res=data.slice(0).sort((a,b)=>
  b.Publish_Date.localeCompare(a.Publish_Date));
  console.log("dateee=>", res);
  return (
   <>
    <section className="featured light-bg pt-60 pb-45 respbo">
      <div className="container">
      <SectionTitle title={title.filter((data)=>data.id === 4)} />
      <div className="row">
        <div className="product-bs-slider product-bs-slider-2">
          <div className="product-slider swiper-container">
            <Swiper
            breakpoints={{
              235:{
                slidesPerView: 1,
              },
                370: {
                  // width: 576,
                  slidesPerView: 1,
                },
                500: {
                  // width: 576,
                  slidesPerView: 2,
                },
                768: {
                  // width: 768,
                  slidesPerView: 1,
                },
                1024: {
                  // width: 768,
                  slidesPerView: 4,
                },
              }}
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectFade,
                  Autoplay,
                ]}
                loop
                spaceBetween={50}
                slidesPerView={4}
                navigation ={{
                  prevEl: ".bs2-button-prevl", nextEl: ".bs2-button-nextl"
                  
              }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: true,
                }}       
            
            className="swiper-wrapper">
              {/* <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2"> */}
              {
                  res.map((detail, i)=>(
                    <SwiperSlide className="product__item prr product__item-2 b-radius-2 mb-20 swiper-slide">
                    <div className="product__thumb fix">
                      <div className="product-image w-img">
                        <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                          <img className='pimg' src={detail.image} alt="product"  />
                        </Link>
                        {/* <Link to="https://my-machine-store-0l73.onrender.com/productDetails" state={{id:`${detail._id}`}}>
                          <img className='pimg' src={`https://my-machine-store-dashboardapi.onrender.com/${detail.image}`} alt="product"/>
                        </Link> */}
                      </div>                  
                     
                    </div>
                    <div className="product__content product__content-2">
                    <h6>
                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                 {detail.product_name}
                                  </NavLink>
                                  </h6>
                                  {/* <h6>                                 
                                  <NavLink className="productlink" to="http://15.207.31.23:3000/productDetails" state={{id:`${detail._id}`}}>
                                 {detail.discription}
                                  </NavLink>
                                  </h6>                */}
                      
                    </div>
                    <div className="product__add-cart text-center  postioncategory btnflex">
              <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}
                  
                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  
                  
                >
                 Get Details
                </Link>
                <button 
                  type="submit"
                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  onClick={()=>dispatch(setLatestShow(["true", i]))}
                  
                >
                 Enquire Now
                </button>
               
                
              </div>
                  </SwiperSlide>
    
                  ))
              }
             
              
             
            </Swiper>
            <div className="bs-button bs2-button-prevl">
                     
                     <FaAngleLeft style={{fontSize:'20px'}} />
                   </div>
                   <div className="bs-button bs2-button-nextl">
                    
                     <FaAngleRight style={{fontSize:'20px'}}  />
      
      </div> 
          </div>
        </div>
      </div>
      </div>
    </section>

    <LatestEnquiryForm show={popup}/>
    {/* <ProductEnquiryForm show={popup} /> */}
   </>
  )
}

export default LatestProduct