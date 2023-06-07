import React, { useState } from 'react'
 import { TestimonialsData, sectionTitleData } from './data'
 import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay, EffectCoverflow  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from './SectionTitle';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [title, SetTitle] = useState(sectionTitleData); 
  return (
    <section className="featured light-bg pt-60 pb-45 respt30 respbo">
    <div className="container">
    <SectionTitle title={title.filter((data) => data.id === 6)} />
    <div className="row">
        <div className="product-bs-slider">
        {
       TestimonialsData.length > 0 && (
        <div className="product-slider swiper-container tesh">
        <Swiper
         
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
              slidesPerView: 3,
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
            slidesPerView={3}
            navigation ={{
              prevEl: ".bs2-button-prev", nextEl: ".bs2-button-next"
              
          }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}       
        
        className="swiper-wrapper">{
          TestimonialsData.map((detail,i) => (
            
            <SwiperSlide key={i} className="product__item1 product__item-2 b-radius-2 mb-20 swiper-slide">
             <div class="news-quote-area text-center">
                           <FaQuoteLeft  style={{display:"flex", fontSize:"2rem", margin:"1rem auto"}}/>
                           <a class="news-quote-title mt-25">{detail.review}</a>
                           <h6 class="founder-name mt-25">{detail.name}</h6>
                           <span class="founder-title">{detail.deg}</span>
                        </div>
            </SwiperSlide>
            
          )
          )
        }
        
         
        </Swiper>
      </div>      
    )
   }
         
        </div>
      </div>
      </div>
      </section>
  )
}

export default Testimonials