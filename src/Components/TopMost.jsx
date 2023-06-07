import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay, EffectCoverflow  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";
import { sectionTitleData, topSubData } from "./data";
import SectionTitle from "./SectionTitle";
import { Link, NavLink } from 'react-router-dom';
import ProductEnquiryForm from './ProductEnquiryForm';
 import { getpopup } from '../Redux/products/PopupSlice';
 import { useSelector, useDispatch } from 'react-redux';
  import { setShow } from '../Redux/products/PopupSlice';
  import {GiLaserPrecision} from "react-icons/gi"
import axios from 'axios';

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
    // fetch("http://localhost:5000/api/fetch")
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
    // const imageUrl = `data:image/png;base64,${data.image}`;

    // const [swiper, setSwiper] = useState(0);
    // const slideTo = (index) => {
    //   if(swiper) 
    //   swiper.slideTo(index)};

    // const swiperOptions = {
    //   effect:"coverflow",
    //   grabCursor:true,
    //   centeredSlides:true,
    //   slidesPerView:5,
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // },
    // };
  return (
    <>
   
    <section className="featured light-bg pt-90 pb-45 respt30">
        <div className="container">
          <SectionTitle title={title.filter((data) => data.id === 1)} />
      <div className="row">
        <div className="product-bs-slider product-bs-slider-2">
        {
       data.length > 0 && (
        <div className="product-slider swiper-container">
        <Swiper
        //  onSwiper={setSwiper}
        breakpoints={{
            370: {
              // width: 576,
              slidesPerView: 1,
            },
            500: {
              // width: 576,
              slidesPerView: 1,
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
              // EffectCoverflow,
              EffectFade,
              Autoplay,
            ]}
            loop
            spaceBetween={50}
            slidesPerView={4}
            navigation ={{
              prevEl: ".bs2-button-prevf", nextEl: ".bs2-button-nextf"
              
          }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}       
        
        className="swiper-wrapper">{
          data.map((detail,i) => (
            detail.featured === "true" ?
            <SwiperSlide key={i} className="product__item prr product__item-2 b-radius-2 mb-20 swiper-slide">
              <div className="product__thumb fix ">
                <div className="product-image w-img ">
                  {/* <Link to={"http://my-machine-store-0l73.onrender.com/productDetails"} state={{id:`${detail._id}`}}>
                    <img className='pimg' src={`http://my-machine-store-dashboardapi.onrender.com/${detail.image}`} alt="product"  />
                  </Link> */}
                  <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                    {/* <img className='pimg' src={`http://15.207.31.23:5001/${detail.image}`} alt="product"  /> */}
                    <img className='pimg' src={detail.image} alt="product"  />
                  </Link>
                </div>                  
               
              </div>
              <div className="product__content product__content-2">
              <h6>                             
                                  <NavLink className="productlink" to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`}  state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                                 {detail.product_name}
                                  </NavLink>
                                  </h6>
                                  {/* <h6 className='sech6'>                                 
                                  <NavLink className="productlink" to="http://15.207.31.23:3000/productDetails" state={{id:`${detail._id}`}}>
                                 {detail.discription}
                                  </NavLink>
                                  </h6>   */}
                                 
                {/* <h4 className='h4size'>
                  <NavLink className="productlink" to="http://15.207.31.23:3000/productDetails" state={{id:`${detail._id}`}}>
                  {detail.category}
                  </NavLink>
                </h4>                */}
                {/* <div className="product__add-cart text-center  postioncategory btnflex">
              <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}
                  
                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                   
                  
                >
                 Get Details
                </Link>
                <button 
                  type="submit"
                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  onClick={()=>dispatch(setShow(["true", i]))}
                  
                >
                 Enquire Now
                </button>
               
                
              </div> */}
                
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
                  onClick={()=>dispatch(setShow(["true", i]))}
                  
                >
                 Enquire Now
                </button>
               
                
              </div>
              {/* <div className="product__add-cart text-center">
                <button 
                  type="submit"
                  className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                  onClick={()=>dispatch(setShow(["true", i]))}
                  
                >
                 Enquire Now
                </button>
               
                
              </div> */}
            </SwiperSlide>
             : ""
          )
          )
        }       
          
        </Swiper>
                <div className="bs-button bs2-button-prevf">
                     
                     <FaAngleLeft style={{fontSize:'20px'}} />
                   </div>
                   <div className="bs-button bs2-button-nextf">
                    
                     <FaAngleRight style={{fontSize:'20px'}}  />
      
      </div> 
        
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