import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { sectionTitleData } from "./data";
import SectionTitle from "./SectionTitle";
import TabContent from "./TabContent";
import TabsandPill from "./TabsandPill";
import TabPhills from "./TabPhills";
import { tabData } from "./data";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";

const Topcatagories = () => {
  const [title, SetTitle] = useState(sectionTitleData);
  const [activeTab, setActiveTab] = useState("engravingmachine");
  
  return (
    <>
      <section
        className="topsell__area-2 pt-60 pb-10"
        style={{ backgroundColor: "#F4F5F7" }}
      >
        <div className="container">
          <div className="row">
            <SectionTitle activeTab={activeTab}
                  setActiveTab={setActiveTab} title={title.filter((data) => data.id === 2)} />
            {/* <div className="product__nav-tab">
              <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                <TabPhills
                  title="Engraving Machine"
                  id="engravingmachine"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabPhills
                  title="Fiber Leaser Cutting Machines"
                  id="Fiber-Leaser-Cutting-Machines"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabPhills
                  title="Lease Hardining"
                  id="Lease-Hardining"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabPhills
                  title="Lease Welding Machine"
                  id="Lease-Welding-Machine"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabPhills
                  title="Leaser-Clading"
                  id="leaser-clading"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabPhills
                  title="Sheet Metal Foaming"
                  id="sheet-metal-foaming"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ul>
            </div> */}

            {/* <TabPhills activeTab={activeTab} setActiveTab={setActiveTab} id =
           {
              tabData.map((data)=>(
                  {data}  ))  }
              /> */}

            {/* // <TabPhills id ={tabData[0]}  activeTab={activeTab} setActiveTab={setActiveTab} /> */}
          </div>

          {/* <TabContent  activeTab={activeTab} id=
      /> */}
          <div className="row">
            <div className="col-xl-12">
              <div className="tab-content" id="flast-sell-tabContent">
                <TabContent id="engravingmachine" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade active show"
                id="engravingmachine"
                role="tabpanel"
                aria-labelledby="computer-tab"
              > */}
                  <div className="product-bs-slider-2">
                    <div className="product-slider-2 swiper-container">
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
                        }} className="swiper-wrapper">
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Engraving machine/GCCC180II-06.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                            {/*   <div class="product__offer">
                                            <span class="discount">-15%</span>
                                            </div> */}
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">GCC C 180</a>
                            </h6>
                            
                            {/*  <div class="price">
                                                <span>$105-$110</span>
                                            </div> */}
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Engraving machine/GCCMercury.png"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">GCC Mercury</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Engraving machine/GCCSpirit.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">GCC SPRIT</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Engraving machine/HS-B1390M.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">PhotonX - iCut</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Engraving machine/venus.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">Venus</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    {/* If we need navigation buttons */}
                    <div className="bs-button bs2-button-prev">
                     
                      <FaAngleLeft style={{fontSize:'20px'}} />
                    </div>
                    <div className="bs-button bs2-button-next">
                     
                      <FaAngleRight style={{fontSize:'20px'}}  />
                    </div>
                  </div>
                  {/* </div> */}
                </TabContent>
                {/* second category */}
                <TabContent
                  id="Fiber-Leaser-Cutting-Machines"
                  activeTab={activeTab}
                >
                  {/* <div
                className="tab-pane fade"
                id="samsung"
                role="tabpanel"
                aria-labelledby="samsung-tab"
              > */}
                  <div className="product-bs-slider-2">
                    <div className="product-slider-2 swiper-container">
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
                        className="swiper-wrapper"
                      >
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Fiber leaser cutting machines/EffectiveL.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">Effective L</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Fiber leaser cutting machines/EffectiveS.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">Effective S</a>
                            </h6>
                             
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        {/*  */}
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Fiber leaser cutting machines/20210326-G3015APRO-HSG.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">GA</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        {/*  */}
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Fiber leaser cutting machines/G3015X-B4.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">G3015X-B4</a>
                            </h6>
                            <div className="rating mb-5">
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
                              {/*    <span>(01 review)</span> */}
                            </div>
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Fiber leaser cutting machines/G3015X-B7.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">G3015X-B7</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Fiber leaser cutting machines/G3015X-B9.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">G3015X-B9</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Fiber leaser cutting machines/R3.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">Tube Metal Cutting R3</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Fiber leaser cutting machines/202108-TS65II+OptionalAL-07Semiauto-loading.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">Tube Metal Cutting Ts-Series</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="product__item swiper-slide">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/machines/Fiber leaser cutting machines/Ts-series/202108-TS65II+Optional-Auto-loading.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">Tube Metal Cutting Ts-Series</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      {/* If we need navigation buttons */}
                    </div>
                    <div className="bs-button bs2-button-prev">
                      <i className="fal fa-chevron-left" />
                    </div>
                    <div className="bs-button bs2-button-next">
                      <i className="fal fa-chevron-right" />
                    </div>
                  </div>
                  {/* </div> */}
                </TabContent>
                {/* third */}
                <TabContent id="Lease-Hardining" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade"
                id="htc"
                role="tabpanel"
                aria-labelledby="htc-tab"
              > */}
                  <div className="product-bs-slider-2">
                    <div className="product-slider-2 swiper-container">
                      <div className="swiper-wrapper">
                        <div className="product__item">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Lease hardining/LASER-WELDING-MACHINE-06.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">LASER WELDING MACHINE</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                    {/* If we need navigation buttons */}
                    {/*   <div class="bs-button bs2-button-prev"><i class="fal fa-chevron-left"></i></div>
                            <div class="bs-button bs2-button-next"><i class="fal fa-chevron-right"></i></div> */}
                  </div>
                  {/* </div> */}
                </TabContent>
                <TabContent id="Lease-Welding-Machine" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade"
                id="nokia"
                role="tabpanel"
                aria-labelledby="nokia-tab"
              > */}
                  <div className="product-bs-slider-2">
                    <div className="product-slider-2 swiper-container">
                      <div className="swiper-wrapper">
                        <div className="product__item">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Lease Welding machine/ALMmachinephoto-06.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">ALM Machine</a>
                            </h6>
                           
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className="product__item">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Lease Welding machine/LASER-WELDING-MACHINE-06.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">LASER WELDING MACHINE</a>
                            </h6>
                            
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* If we need navigation buttons */}
                    <div className="bs-button bs2-button-prev">
                      <i className="fal fa-chevron-left" />
                    </div>
                    <div className="bs-button bs2-button-next">
                      <i className="fal fa-chevron-right" />
                    </div>
                  </div>
                  {/* </div> */}
                </TabContent>
                <TabContent id="leaser-clading" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade"
                id="cell"
                role="tabpanel"
                aria-labelledby="cell-tab"
              > */}
                  <div className="product-bs-slider-2">
                    <div className="product-slider-2 swiper-container">
                      <div className="swiper-wrapper">
                        <div className="product__item">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Leaser clading/LASERWELDINGMACHINE.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">LASER WELDING MACHINE</a>
                            </h6>
                            
                            {/*   <div class="price">
                                                <span>$105-$150</span>
                                            </div> */}
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* If we need navigation buttons */}
                    <div className="bs-button bs2-button-prev">
                      <i className="fal fa-chevron-left" />
                    </div>
                    <div className="bs-button bs2-button-next">
                      <i className="fal fa-chevron-right" />
                    </div>
                  </div>
                  {/* </div> */}
                </TabContent>
                {/*  */}
                <TabContent id="sheet-metal-foaming" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade"
                id="sheet-metal-foaming"
                role="tabpanel"
                aria-labelledby="sheet-tab"
              > */}
                  <div className="product-bs-slider-2">
                    <div className="product-slider-2 swiper-container">
                      <div className="swiper-wrapper">
                        <div className="product__item">
                          <div className="product__thumb fix">
                            <div className="product-image w-img">
                              <a href="#">
                                <img
                                  src="assets/image/categories/Sheet metal foaming/UpstrokeNCPressBrake-06.png"
                                  alt="product"
                                  className="radius"
                                />
                              </a>
                            </div>
                             <div className="product-action">
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
                          <div className="product__content">
                            <h6>
                              <a href="#">Upstroke-NC-Press-Brake</a>
                            </h6>
                             
                          </div>
                          <div className="product__add-cart text-center">
                            <a
                              href
                              data-bs-toggle="modal"
                              data-bs-target="#modalone"
                            >
                              <button
                                type="button"
                                className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                              >
                                enquire now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* If we need navigation buttons */}
                    <div className="bs-button bs2-button-prev">
                      <i className="fal fa-chevron-left" />
                    </div>
                    <div className="bs-button bs2-button-next">
                      <i className="fal fa-chevron-right" />
                    </div>
                  </div>
                  {/* </div> */}
                </TabContent>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topcatagories;
