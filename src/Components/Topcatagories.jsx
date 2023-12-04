import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { sectionTitleData } from "./data";
import SectionTitle from "./SectionTitle";
import TabContent from "./TabContent";
import TabsandPill from "./TabsandPill";
import TabPhills from "./TabPhills";
import { tabData } from "./data";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";
import {GiLaserPrecision} from "react-icons/gi"
import { useEffect } from "react";
import ProductEnquiryForm from './ProductEnquiryForm';
 import { getpopup } from '../Redux/products/PopupSlice';
 import { useSelector, useDispatch } from 'react-redux';
  import { setShow,setCategoryShow } from '../Redux/products/PopupSlice';
import { NavLink, Link } from "react-router-dom";

const Topcatagories = () => {
  const [title, SetTitle] = useState(sectionTitleData);
  const [activeTab, setActiveTab] = useState("Cutting Solution");
  const [data, setData] = useState([])
  const popup = useSelector(getpopup);
  const dispatch = useDispatch();
  console.log("popop=>", popup);

  const fetchData = () => {
    // fetch("https://api.mymachinestore.in/api/fetch")
    fetch("https://api.mymachinestore.in/fetch")

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

  return (
    <>
      <section
        className="topsell__area-2 pt-60 pb-10 respt30"
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
                <TabContent id="Cutting Solution" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade active show"
                id="engravingmachine"
                role="tabpanel"
                aria-labelledby="computer-tab"
              > */}
                  <div className="product-bs-slider-2"> {
                    data.length > 0 && (
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
                          navigation={{
                            prevEl: ".bs2-button-prevc", nextEl: ".bs2-button-nextc"

                          }}
                          autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                          }} className="swiper-wrapper">{
                            data.map((detail, i) => (
                              detail.category === activeTab &&
                              <SwiperSlide key={detail._id} className="product__item prr swiper-slide pbm1">
                                <div className="product__thumb fix">
                                  <div className="product-image w-img">
                                    {/* <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`}}>
                                     <img className='pimg radius' src={detail.image} alt="product"  />
                                    </Link> */}
                                     <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                     <img className='pimg radius' src={detail.image} alt="product"  />
                                    </Link>
                                  </div>
                                  {/*   <div class="product__offer">
                                              <span class="discount">-15%</span>
                                              </div> */}

                                </div>
                                <div className="product__content">
                                  <h6>
                                   
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                   {detail.product_name}
                                 </NavLink>
                                  </h6>
                                  {/* <h6>
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`}}>
                                   {detail.discription}
                                 </NavLink>
                                  </h6> */}
                                 


                                </div>
                                <div className="product__add-cart text-center  postioncategory btnflex">
                             <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}` , namee:`${detail.product_name}`}}
                  
                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  
                  
                >
                 Get Details
                </Link>
                <button 
                  type="submit"
                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  onClick={()=>dispatch(setCategoryShow(["true", i, detail.category]))}
                  
                >
                 Enquire Now
                </button>
               
                
              </div>
                                
                              </SwiperSlide>
                            ))
                          }
                         
                        </Swiper>
                      </div>
                    )
                  }

                    {/* If we need navigation buttons */}
                    <div className="bs-button bs2-button-prevc">

                      <FaAngleLeft style={{ fontSize: '20px' }} />
                    </div>
                    <div className="bs-button bs2-button-nextc">

                      <FaAngleRight style={{ fontSize: '20px' }} />
                    </div>
                  </div>
                  {/* </div> */}
                </TabContent>
                {/* second category */}
                <TabContent
                  id="Welding Solution"
                  activeTab={activeTab}
                >
                  {/* <div
                className="tab-pane fade"
                id="samsung"
                role="tabpanel"
                aria-labelledby="samsung-tab"
              > */}
                  <div className="product-bs-slider-2"> {
                    data.length > 0 && (
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
                          navigation={{
                            prevEl: ".bs2-button-prevc", nextEl: ".bs2-button-nextc"

                          }}
                          autoplay={{
                            delay: 8500,
                            disableOnInteraction: true,
                          }} className="swiper-wrapper">{
                            data.map((detail, i) => (
                              detail.category === activeTab &&
                              <SwiperSlide key={detail._id} className="product__item prr swiper-slide pbm1">
                                <div className="product__thumb fix">
                                  <div className="product-image w-img">
                                    <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                     <img className='pimg radius' src={detail.image} alt="product"  />
                                    </Link>
                                  </div>
                                  {/*   <div class="product__offer">
                                              <span class="discount">-15%</span>
                                              </div> */}
                                 
                                </div>
                                <div className="product__content">
                                  <h6>
                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                 {detail.product_name}
                                  </NavLink>
                                  </h6>
                                  {/* <h6>                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`}}>
                                 {detail.discription}
                                  </NavLink>
                                  </h6> */}


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
                  onClick={()=>dispatch(setCategoryShow(["true", i, detail.category]))}
                  
                >
                 Enquire Now
                </button>
               
                
              </div>
                              </SwiperSlide>
                            ))
                          }
                        </Swiper>
                      </div>
                    )
                  }

                    {/* If we need navigation buttons */}
                    <div className="bs-button bs2-button-prevc">

                      <FaAngleLeft style={{ fontSize: '20px' }} />
                    </div>
                    <div className="bs-button bs2-button-nextc">

                      <FaAngleRight style={{ fontSize: '20px' }} />
                    </div>
                  </div>
                  {/* </div> */}
                </TabContent>
                {/* third */}
                <TabContent id="Forming Solution" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade"
                id="htc"
                role="tabpanel"
                aria-labelledby="htc-tab"
              > */}


                  <div className="product-bs-slider-2"> {
                      data.length > 0 && (
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

                          spaceBetween={50}
                          slidesPerView={4}
                          navigation={{
                            prevEl: ".bs2-button-prevc", nextEl: ".bs2-button-nextc"

                          }}
                          autoplay={{
                            delay: 8500,
                            disableOnInteraction: true,
                          }} className="swiper-wrapper">{
                            data.map((detail, i) => (
                              detail.category === activeTab &&
                              <SwiperSlide key={detail._id} className="product__item prr swiper-slide pbm1">
                                <div className="product__thumb fix">
                                  <div className="product-image w-img">
                                  <Link  to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                     <img className='pimg radius' src={detail.image} alt="product"  />
                                    </Link>
                                  </div>
                                  {/*   <div class="product__offer">
                                              <span class="discount">-15%</span>
                                              </div> */}
                                  {/* <div className="product-action">
                                    <a
                                      href="#"
                                      className="icon-box icon-box-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#productModalId"
                                    >
                                      <FaRegEye />
                                      <FaRegEye />
                                    </a>
                                  </div> */}
                                </div>
                                <div className="product__content">
                                <h6>
                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                 {detail.product_name}
                                  </NavLink>
                                  </h6>
                                  {/* <h6>                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`}}>
                                 {detail.discription}
                                  </NavLink>
                                  </h6> */}


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
                  onClick={()=>dispatch(setCategoryShow(["true", i, detail.category]))}
                  
                >
                 Enquire Now
                </button>
               
                
              </div>
                              </SwiperSlide>
                            ))
                          }
                        </Swiper>
                      </div>
                    )

                  }
                   <div className="bs-button bs2-button-prevc">

<FaAngleLeft style={{ fontSize: '20px' }} />
</div>
<div className="bs-button bs2-button-nextc">

<FaAngleRight style={{ fontSize: '20px' }} />
</div>
                  </div>

                    
                    {/* </div> */}
                </TabContent>
                <TabContent id="Safety and Security Devices" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade"
                id="nokia"
                role="tabpanel"
                aria-labelledby="nokia-tab"
              > */}
              
              <div className="product-bs-slider-2"> {
                    data.length > 0 && (
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
                        
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation ={{
                          prevEl: ".bs2-button-prevc", nextEl: ".bs2-button-nextc"
                          
                      }}
                        autoplay={{
                          delay: 8500,
                          disableOnInteraction: true,
                        }} className="swiper-wrapper">{
                          data.map((detail, i) =>(
                            detail.category === activeTab &&
                            <SwiperSlide key={detail._id} className="product__item prr swiper-slide pbm1">
                            <div className="product__thumb fix">
                              <div className="product-image w-img">
                                <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                  <img className='pimg radius' src={detail.image} alt="product"  />
                                </Link>
                              </div>
                              {/*   <div class="product__offer">
                                              <span class="discount">-15%</span>
                                              </div> */}
                             
                            </div>
                            <div className="product__content">
                            <h6>
                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                 {detail.product_name}
                                  </NavLink>
                                  </h6>
                                  {/* <h6>                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`}}>
                                 {detail.discription}
                                  </NavLink>
                                  </h6> */}
                              
                             
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
                  onClick={()=>dispatch(setCategoryShow(["true", i, detail.category]))}
                  
                >
                 Enquire Now
                </button>
               
                
              </div>
                          </SwiperSlide>
                          ))
                        }                       
                      </Swiper>
                    </div>
                    )
                  }  
                   <div className="bs-button bs2-button-prevc">

<FaAngleLeft style={{ fontSize: '20px' }} />
</div>
<div className="bs-button bs2-button-nextc">

<FaAngleRight style={{ fontSize: '20px' }} />
</div> 
                  </div>               
                
                  {/* </div> */}
                </TabContent>
                <TabContent id="Power Solutions" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade"
                id="cell"
                role="tabpanel"
                aria-labelledby="cell-tab"
              > */}
              
              <div className="product-bs-slider-2"> {
                    data.length > 0 && (
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
                          slidesPerView: 3,
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
                        
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation ={{
                          prevEl: ".bs2-button-prevc", nextEl: ".bs2-button-nextc"
                          
                      }}
                        autoplay={{
                          delay: 8500,
                          disableOnInteraction: true,
                        }} className="swiper-wrapper">{
                          data.map((detail, i) =>(
                            detail.category === activeTab ?(
                            <SwiperSlide key={detail._id} className="product__item prr swiper-slide pbm1">
                            <div className="product__thumb fix">
                              <div className="product-image w-img">
                                <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                  <img className='pimg radius' src={detail.image} alt="product"  />
                                </Link>
                              </div>
                              {/*   <div class="product__offer">
                                              <span class="discount">-15%</span>
                                              </div> */}
                             
                            </div>
                            <div className="product__content">
                            <h6>
                                  {/* */}
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                 {detail.product_name}
                                  </NavLink>
                                  </h6>
                                  {/* <h6>                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`}}>
                                 {detail.discription}
                                  </NavLink>
                                  </h6> */}
                              
                             
                            </div>
                            <div className="product__add-cart text-center postioncategory btnflex">
                              {/* <a
                                href
                                data-bs-toggle="modal"
                                data-bs-target="#modalone"
                              > */}
                                 <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}
                  
                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  
                  
                >
                 Get Details
                </Link>
                                <button
                                  type="button"
                                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                                  onClick={()=>dispatch(setCategoryShow(["true", i, detail.category]))}
                                >
                                  enquire now
                                </button>
                              {/* </a> */}
                            </div>
                          </SwiperSlide>
                          ) :""))
                        }  
                                             
                      </Swiper>
                    </div>
                    )
                  } 
                     <div className="bs-button bs2-button-prevc">

<FaAngleLeft style={{ fontSize: '20px' }} />
</div>
<div className="bs-button bs2-button-nextc">

<FaAngleRight style={{ fontSize: '20px' }} />
</div> 
               </div>                 
                 
                  {/* </div> */}
                </TabContent>
                {/*  */}
                <TabContent id="Surface Treatment" activeTab={activeTab}>
                  {/* <div
                className="tab-pane fade"
                id="sheet-metal-foaming"
                role="tabpanel"
                aria-labelledby="sheet-tab"
              > */}
              
              <div className="product-bs-slider-2"> {
                    data.length > 0 && (
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
                        
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation ={{
                          prevEl: ".bs2-button-prevc", nextEl: ".bs2-button-nextc"
                          
                      }}
                        autoplay={{
                          delay: 8500,
                          disableOnInteraction: true,
                        }} className="swiper-wrapper">{
                          data.map((detail, i) =>(
                            detail.category === activeTab &&
                            <SwiperSlide key={detail._id} className="product__item swiper-slide pbm1">
                            <div className="product__thumb fix">
                              <div className="product-image w-img">
                                <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                  <img className='pimg radius' src={detail.image} alt="product"  />
                                </Link>
                              </div>
                              {/*   <div class="product__offer">
                                              <span class="discount">-15%</span>
                                              </div> */}
                              
                            </div>
                            <div className="product__content">
                            <h6>
                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`,namee:`${detail.product_name}`}}>
                                 {detail.product_name}
                                  </NavLink>
                                  </h6>
                                  {/* <h6>                                 
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`}}>
                                 {detail.discription}
                                  </NavLink>
                                  </h6> */}
                             
                            </div>
                            <div className="product__add-cart text-center postioncategory btnflex">
                              {/* <a
                                href
                                data-bs-toggle="modal"
                                data-bs-target="#modalone"
                              > */}
                                    <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}
                  
                            className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  
                  
                >
                 Get Details
                </Link>
                                <button
                                  type="button"
                                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                                  onClick={()=>dispatch(setCategoryShow(["true", i, detail.category]))}
                                >
                                  enquire now
                                </button>
                              {/* </a> */}
                            </div>
                          </SwiperSlide>
                          ))
                        }                       
                      </Swiper>
                    </div>
                    )
                  } 
                     <div className="bs-button bs2-button-prevc">

<FaAngleLeft style={{ fontSize: '20px' }} />
</div>
<div className="bs-button bs2-button-nextc">

<FaAngleRight style={{ fontSize: '20px' }} />
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
     
      <ProductEnquiryForm show={popup}/>
    </>
  );
};

export default Topcatagories;
