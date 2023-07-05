      
      
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";
import { sectionTitleData, topSubData } from "./data";
import SectionTitle from "./SectionTitle";
import { Link, useLocation  } from 'react-router-dom';
import ProductEnquiryForm from './ProductEnquiryForm';
import { getpopup } from '../Redux/products/PopupSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setShow } from '../Redux/products/PopupSlice';

const RelatedProducts = ({titlee}) => {
    const [title, SetTitle] = useState(sectionTitleData); 
    const [data, setData] = useState([])
    // const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const location = useLocation();
  const popup = useSelector(getpopup);
  const dispatch = useDispatch();
  const {id, namee} = location.state
    const fetchData = () => {
       fetch("http://localhost:5000/companyproducts")
      // fetch("http://localhost:5000/api/companyproducts")
      
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

    // for brand matching logic
    // const brand_name = namee.slice(0,3);
    // console.log("brandnamee=>", brand_name );
    const company_name = namee.replace(/PVT LTD|Pvt Ltd|Pvt LTD|PRIVATE LIMITED|Private Limited/g, "").trim();
    console.log("comnamee=>", company_name );
  return (
    <>
   
    <section className="featured light-bg pt-40 pb-45">
        <div className="container">
          {/* <SectionTitle title={title.filter((data) => data.id === 1)} /> */}
          <div className="section__title">
              <h4 className="st-titile ">Company Products</h4>
            </div>
      <div className="row">
        <div className="product-bs-slider product-bs-slider-2">
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
              disableOnInteraction: false,
            }}       
        
        className="swiper-wrapper">{
          data.map((detail, i) => (
            detail.brand.toLowerCase().includes(company_name.toLowerCase())? (            
            <SwiperSlide className="product__item product__item-2 b-radius-2 mb-20 swiper-slide">
              <div className="product__thumb fix">
                <div className="product-image w-img">
                  <Link to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                    <img className='pimg' src={detail.image} alt={detail.product_name}  />
                  </Link>
                </div>                  
                
              </div>
              <div className="product__content product__content-2">
                <h6>
                  <Link  to={`/productDetails/${detail.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${detail._id}`, namee:`${detail.product_name}`}}>
                  {detail.product_name}
                  </Link>
                </h6>               
                
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
            </SwiperSlide>
            ) : ""
          ))
        }
        
          
        </Swiper>
        <div className="bs-button bs2-button-prev">
                     
                     <FaAngleLeft style={{fontSize:'20px'}} />
                   </div>
                   <div className="bs-button bs2-button-next">
                    
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

export default RelatedProducts