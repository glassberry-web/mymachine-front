import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";
import { sectionTitleData, topSubData } from "./data";
import SectionTitle from "./SectionTitle";
import { Link, NavLink } from 'react-router-dom';
import ProductEnquiryForm from './ProductEnquiryForm';
 import { getpopup } from '../Redux/products/PopupSlice';
 import { useSelector, useDispatch } from 'react-redux';
  import { setShow } from '../Redux/products/PopupSlice';

const TopMost = () => {
    const [title, SetTitle] = useState(sectionTitleData); 
    const [data, setData] = useState([])
    // const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const popup = useSelector(getpopup);
  const dispatch = useDispatch();
  console.log("popop=>", popup);

    const fetchData = () => {
      fetch("https://my-machine-store-0l73.onrender.com/fetch")
      
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
   
    <section className="featured light-bg pt-90 pb-45">
        <div className="container">
          <SectionTitle title={title.filter((data) => data.id === 1)} />
      <div className="row">
        <div className="product-bs-slider">
        {
       data.length > 0 && (
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
        
        className="swiper-wrapper">{
          data.map((detail,i) => (
            detail.featured === "true" ?
            <SwiperSlide key={i} className="product__item pitem1 product__item-2 b-radius-2 mb-20 swiper-slide">
              <div className="product__thumb fix">
                <div className="product-image w-img">
                  <Link to="https://my-machine-store-0l73.onrender.com/productDetails" state={{id:`${detail._id}`}}>
                    <img className='pimg' src={`http://localhost:5001/${detail.image}`} alt="product"  />
                  </Link>
                </div>                  
                <div className="product-action product-action-2">
                  <a
                    href="#"
                    className="icon-box icon-box-1"
                    data-bs-toggle="modal"
                    data-bs-target="#productModalId"
                  >
                    <FaRegEye />
                    {/* <FaRegEye /> */}
                  </a>                   
                </div>
              </div>
              <div className="product__content product__content-2">
                <h6>
                  <NavLink className="productlink" to="https://my-machine-store-0l73.onrender.com/productDetails" state={{id:`${detail._id}`}}>
                  {detail.product_name}
                  </NavLink>
                </h6> 
                <h4 className='h4size'>
                  <NavLink className="productlink" to="https://my-machine-store-0l73.onrender.com/productDetails" state={{id:`${detail._id}`}}>
                  {detail.category}
                  </NavLink>
                </h4>               
                
              </div>
              <div className="product__add-cart text-center">
                <button 
                  type="submit"
                  className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  onClick={()=>dispatch(setShow(["true", i]))}
                  
                >
                 Enquire Now
                </button>
              </div>
            </SwiperSlide>
             : ""
          )
          )
        }
        
          {/* <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
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
          </SwiperSlide> */}
          {/* </div> */}
          {/* <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
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
          </SwiperSlide>           */}
        </Swiper>
      </div>      
    )
   }
         
        </div>
      </div>
      </div>
      </section>

      <ProductEnquiryForm show={popup}/>

    </>
  );
}

export default TopMost