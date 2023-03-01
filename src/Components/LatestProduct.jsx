import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";

import { sectionTitleData } from './data'
import SectionTitle from './SectionTitle'


const LatestProduct = () => {
    const [title , SetTitle] = useState(sectionTitleData);
  return (
   <>
    <section className="featured light-bg pt-60 pb-45">
      <div className="container">
      <SectionTitle title={title.filter((data)=>data.id === 4)} />
      <div className="row">
        <div className="product-bs-slider">
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
                  slidesPerView: 5,
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
                slidesPerView={5}
                navigation ={{
                  prevEl: ".bs2-button-prev", nextEl: ".bs2-button-next"
                  
              }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}       
            
            className="swiper-wrapper">
              {/* <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2"> */}
              <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="#">
                      <img src="assets/image/categories/Engraving machine/GCCC180II-06.png" alt="product" />
                    </a>
                  </div>                  
                  <div className="product-action product-action-2">
                    <a
                      href="#"
                      className="icon-box icon-box-1"
                      data-bs-toggle="modal"
                      data-bs-target="#productModalId"
                    >
                      <FaRegEye />
                      <FaRegEye />
                    </a>                   
                  </div>
                </div>
                <div className="product__content product__content-2">
                  <h6>
                    <a href="product-details.html">
                    GCC C 180
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
              </SwiperSlide>
              {/* </div> */}
              <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="product-details.html">
                      <img src="assets/image/categories/Engraving machine/GCCMercury.png" alt="product" />
                    </a>
                  </div>
                  <div className="product-action product-action-2">
                    <a
                      href="#"
                      className="icon-box icon-box-1"
                      data-bs-toggle="modal"
                      data-bs-target="#productModalId"
                    >
                      <FaRegEye />
                      <FaRegEye/>
                    </a>
                    
                  </div>
                </div>
                <div className="product__content product__content-2">
                  <h6>
                    <a href="#">
                    GCC Mercury
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
              </SwiperSlide>
              <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="product-details.html">
                      <img src="assets/image/categories/Engraving machine/GCCSpirit.png" alt="product" />
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
                    <a href="#">
                    GCC SPRIT
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
              </SwiperSlide>
              <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="product-details.html">
                      <img src="assets/image/categories/Engraving machine/HS-B1390M.png" alt="product" />
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
                    <a href="#">
                    PhotonX - iCut
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
              </SwiperSlide>
              <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
                <div className="product__thumb fix">
                  <div className="product-image w-img">
                    <a href="product-details.html">
                      <img src="assets/image/categories/Engraving machine/venus.png" alt="product" />
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
                    <a href="#">
                    Venus
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
              </SwiperSlide>
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
          </div>
        </div>
      </div>
      </div>
    </section>
   </>
  )
}

export default LatestProduct