import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typewriter from 'typewriter-effect';

const Slider = () => {
  return (
    <>
      {/* <div className="slider-area">
        <div className="swiper-container slider__active">
          <div className="slider-wrapper swiper-wrapper">
            <div className="single-slider swiper-slide slider-height d-flex align-items-center">
              <img
                src="assets/image/home/webpageslider1.jpg"
                alt="slider"
                className="img-fluid"
              />
            </div>
             <div class="main-slider-paginations"></div>
          </div>
        </div>
      </div> */}
     <div className="slider-area">
  <div className="swiper-container" style={{height: 600}}>
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
                  slidesPerView: 1,
                },
              }}
                modules={[
                  Navigation,
                  Pagination,                                   
                  Autoplay,
                ]}
                loop
                spaceBetween={50}
                slidesPerView={1}
                navigation ={{
                  prevEl: ".bs2-button-prev", nextEl: ".bs2-button-next"
                  
              }}
                autoplay={{
                  delay: 13500,
                  disableOnInteraction: false,
                }} 
    
    className="slider-wrapper swiper-wrapper">
      <SwiperSlide className="single-slider swiper-slide slider-height d-flex align-items-center" style={{backgroundImage: "url(assets/img/slider/p11.png)"}}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content pt-4">                                  
                    <h2 data-animation="fadeInLeft" data-delay="1.7s" className="pt-15 slider-title pb-5">SALE 30% OFF <br />
                    <Typewriter
                      options={{
                        strings: ['Engraving Machine', 'Fiber Laser Cutting Machine', 'Laser Hardening', 'Laser Welding Machine'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    </h2>
                    <p className="pr-20 slider_text pt-2" data-animation="fadeInLeft" data-delay="1.9s">The GE IV series can cut both sheet and tube metals, replacing the need of having a seperate professional sheet laser cutting machine and tube laser cutting machine.</p>
                    <div className="row pt-4">
                      <div className="col-lg-4">
                        <div className="ab-counter-item mb-30">
                          <div className="ab-counter">
                            <div className="counter-icon mr-10">
                              <img src="assets/img/about/c-icon-01.png" alt />
                            </div>
                            <div className="counter_info">
                              <span className="counter">100</span>
                              <p>+</p>                                             
                            </div>
                          </div>  
                          <h5>Max Power</h5> 
                        </div>
                      </div>
                      {/*  */}
                      <div className="col-lg-4">
                        <div className="ab-counter-item mb-30">
                          <div className="ab-counter">
                            <div className="counter-icon mr-10">
                              <img src="assets/img/about/c-icon-01.png" alt />
                            </div>
                            <div className="counter_info">
                              <span className="counter">80</span>
                              <p>+</p>                                             
                            </div>
                          </div> 
                          <h5>Peak Pulse Power</h5> 
                        </div>
                      </div>
                      {/*  */}
                      <div className="col-lg-4">
                        <div className="ab-counter-item mb-30">
                          <div className="ab-counter">
                            <div className="counter-icon mr-10">
                              <img src="assets/img/about/c-icon-01.png" alt />
                            </div>
                            <div className="counter_info">
                              <span className="counter">70</span>
                              <p>+</p>  
                            </div>                                    
                          </div>  
                          <h5>Max Acceleration</h5> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src="assets/image/slider/slider1.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>{/* /single-slider */}
      <SwiperSlide className="single-slider swiper-slide slider-height d-flex align-items-center" style={{backgroundImage: "url(assets/img/slider/slider4.png)"}} data-background="assets/img/slider/slider4.png">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-content">
                <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1s">
                  <a href="#" className="st-btn b-radius">New Arraivels</a>
                </div>
                <h2 data-animation="fadeInLeft" data-delay="1.5s" className="pt-15 slider-title pb-5">SALE 20% OFF<br /> Motors</h2>
                <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.7s">Discount 30% On Products &amp; Free Shipping</p>
                <div className="slider-bottom-btn mt-75">
                  <a data-animation="fadeInUp" data-delay="1.9s" href="#" className="st-btn-b b-radius">Discover now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>{/* /single-slider */}
      <SwiperSlide className="single-slider swiper-slide slider-height d-flex align-items-center"  style={{backgroundImage: "url(assets/img/slider/slider13.png)"}}  data-background="assets/img/slider/slider13.png">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="slider-content">
                <div className="slider-top-btn" data-animation="fadeInLeft" data-delay="1s">
                  <a href="#" className="st-btn b-radius">New DEALS</a>
                </div>
                <h2 data-animation="fadeInLeft" data-delay="1.5s" className="pt-15 slider-title pb-5">SALE 30% OFF <br />Food processing machinery</h2>
                <p className="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.8s">Discount 30% On Products &amp; Free Shipping</p>
                <div className="slider-bottom-btn mt-75">
                  <a data-animation="fadeInUp" data-delay="1.10s" href="#" className="st-btn-b b-radius">Discover now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>{/* /single-slider */}
      <div className="main-slider-paginations" />
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

    </>
  );
};

export default Slider;
