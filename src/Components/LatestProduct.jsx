import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";
import { getLatestpopup } from '../Redux/products/PopupSlice';
import { useSelector, useDispatch } from 'react-redux';
 import { setLatestShow } from '../Redux/products/PopupSlice';
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
      // fetch("http://15.207.31.23:5000/fetch")
      fetch("https://mymachinestore.com/api/fetch")
      
        .then(response => {
          console.log(response);
          return response.json()
        })
        .then(data => {
          setData(data)
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
    <section className="featured light-bg pt-60 pb-45">
      <div className="container">
      <SectionTitle title={title.filter((data)=>data.id === 4)} />
      <div className="row">
        <div className="product-bs-slider product-bs-slider-2">
          <div className="product-slider swiper-container">
            <Swiper
            breakpoints={{
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
                  prevEl: ".bs2-button-prev", nextEl: ".bs2-button-next"
                  
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
             
              
              {/* <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/tp-3.jpg" alt="product" />
                    </a>
                  </div>                  
                  <div className="product-action product-action-2">
                    <a
                      href="#"
                      className="icon-box icon-box-1"
                      data-bs-toggle="modal"
                      data-bs-target="#productModalId"
                    >
                      <FaRegEye/>
                      <FaRegEye/>
                    </a>                    
                  </div>
                </div>
                <div className="product__content product__content-2">
                  <h6>
                    <a href="product-details.html">
                      Xbox Wireless Game Controller Pink
                    </a>
                  </h6>                
                  
                </div>
                <div className="product__add-cart text-center">
                  <button
                    type="button"
                    className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  >
                    Enquire Now
                  </button>
                </div>
              </SwiperSlide> */}
              {/* <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/tp-7.jpg" alt="product" />
                    </a>
                  </div>
                  <div className="product-action product-action-2">
                    <a
                      href="#"
                      className="icon-box icon-box-1"
                      data-bs-toggle="modal"
                      data-bs-target="#productModalId"
                    >
                      <i className="fal fa-eye" />
                      <i className="fal fa-eye" />
                    </a>
                    <a href="#" className="icon-box icon-box-1">
                      <i className="fal fa-heart" />
                      <i className="fal fa-heart" />
                    </a>
                    <a href="#" className="icon-box icon-box-1">
                      <i className="fal fa-layer-group" />
                      <i className="fal fa-layer-group" />
                    </a>
                  </div>
                </div>
                <div className="product__content product__content-2">
                  <h6>
                    <a href="product-details.html">
                      APPO R11s 64GB Dual 20MP Cameras
                    </a>
                  </h6>
                  <div className="rating mb-5 mt-10">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                    </ul>
                    <span>(01 review)</span>
                  </div>
                  <div className="price">
                    <span>$150.00-$270.00</span>
                  </div>
                </div>
                <div className="product__add-cart text-center">
                  <button
                    type="button"
                    className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/tp-10.jpg" alt="product" />
                    </a>
                  </div>
                  <div className="product-action product-action-2">
                    <a
                      href="#"
                      className="icon-box icon-box-1"
                      data-bs-toggle="modal"
                      data-bs-target="#productModalId"
                    >
                      <i className="fal fa-eye" />
                      <i className="fal fa-eye" />
                    </a>
                    <a href="#" className="icon-box icon-box-1">
                      <i className="fal fa-heart" />
                      <i className="fal fa-heart" />
                    </a>
                    <a href="#" className="icon-box icon-box-1">
                      <i className="fal fa-layer-group" />
                      <i className="fal fa-layer-group" />
                    </a>
                  </div>
                </div>
                <div className="product__content product__content-2">
                  <h6>
                    <a href="product-details.html">
                      G951s Pink Stereo Gaming Headset
                    </a>
                  </h6>
                  <div className="rating mb-5 mt-10">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                    </ul>
                    <span>(01 review)</span>
                  </div>
                  <div className="price">
                    <span>$120.00-$210.00</span>
                  </div>
                </div>
                <div className="product__add-cart text-center">
                  <button
                    type="button"
                    className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="product-details.html">
                      <img src="assets/img/product/tp-9.jpg" alt="product" />
                    </a>
                  </div>
                  <div className="product-action product-action-2">
                    <a
                      href="#"
                      className="icon-box icon-box-1"
                      data-bs-toggle="modal"
                      data-bs-target="#productModalId"
                    >
                      <i className="fal fa-eye" />
                      <i className="fal fa-eye" />
                    </a>
                    <a href="#" className="icon-box icon-box-1">
                      <i className="fal fa-heart" />
                      <i className="fal fa-heart" />
                    </a>
                    <a href="#" className="icon-box icon-box-1">
                      <i className="fal fa-layer-group" />
                      <i className="fal fa-layer-group" />
                    </a>
                  </div>
                </div>
                <div className="product__content product__content-2">
                  <h6>
                    <a href="product-details.html">
                      Epple iPhone 11 Pro Max 64GB Gold
                    </a>
                  </h6>
                  <div className="rating mb-5 mt-10">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fal fa-star" />
                        </a>
                      </li>
                    </ul>
                    <span>(01 review)</span>
                  </div>
                  <div className="price">
                    <span>$120.00-$140.00</span>
                  </div>
                </div>
                <div className="product__add-cart text-center">
                  <button
                    type="button"
                    className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide> */}
            </Swiper>
            <div className="bs-button bs2-button-prev">
                     
                     <FaAngleLeft style={{fontSize:'20px'}} />
                   </div>
                   <div className="bs-button bs2-button-next">
                    
                     <FaAngleRight style={{fontSize:'20px'}}  />
      
      </div> 
          </div>
        </div>
      </div>
      </div>
    </section>

    <LatestEnquiryForm show={popup}/>
   </>
  )
}

export default LatestProduct