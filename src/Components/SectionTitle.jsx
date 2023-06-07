import React from "react";
import { Link } from "react-router-dom";
import {FaChevronRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TabPhills from "./TabPhills";

const SectionTitle = (props) => {
    const { title ,activeTab, setActiveTab } = props;
    
  return (
    <>
      {title.map((titles) => (
        <div className="col-xl-12">
          <div className={`section__head ${titles.id===2 ? 'topcat':""} d-flex justify-content-between mb-30`}>
            <div className="section__title">
              <h5 className="st-titile restl">{titles.name}</h5>
            </div>
            {titles.id === 2 ? (
              <div className="product__nav-tab resnone">
                <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                <TabPhills
                    title="Cutting Solution"
                    id="Cutting Solution"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabPhills
                    title="Welding Solution
                    "
                    id="Welding Solution"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                    <TabPhills
                    title="Forming Solution"
                    id="Forming Solution"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabPhills
                    title="Safety and Security Devices"
                    id="Safety and Security Devices"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabPhills
                    title="Power Solutions"
                    id="Power Solutions"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                 
                  <TabPhills
                    title="Surface Treatment"
                    id="Surface Treatment"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                 
                  
                </ul>
              </div>
              
            ) : (
              <div className="button-wrap resnone">
                <Link to={`${titles.link}`}>
                  {titles.See}{" "}
                  {titles.name === "Top Categories" || "Testimonials" ? "" : <FaChevronRight />}
                </Link>
              </div>
            )}
             {titles.id === 2 ? (
              <div className="product__nav-tab disnone brand-slider swiper-container">
                
                <Swiper   breakpoints={{
              370: {
                // width: 576,
                slidesPerView: 3,
              },
              450: {
                // width: 576,
                slidesPerView: 3,
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
            
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                loop
               
               slidesPerView={3}
                autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }} className="nav nav-tabs swiper-wrapper" id="flast-sell-tab" role="tablist">
                  <SwiperSlide>
                  <TabPhills
                    title="Cutting Solution"
                    id="Cutting Solution"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  </SwiperSlide>
                  <SwiperSlide>
                  <TabPhills
                    title="Welding Solution
                    "
                    id="Welding Solution"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TabPhills
                    title="Forming Solution"
                    id="Forming Solution"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  </SwiperSlide>
                  <SwiperSlide>
                  <TabPhills
                    title="Safety and Security Devices"
                    id="Safety and Security Devices"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  </SwiperSlide>
                  <SwiperSlide>
                  <TabPhills
                    title="Power Solutions"
                    id="Power Solutions"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  </SwiperSlide>
                  <SwiperSlide>
                  <TabPhills
                    title="Surface Treatment"
                    id="Surface Treatment"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  </SwiperSlide>
                 
                  
                </Swiper>
                {/* </Swiper> */}
              </div>
              
            ) : (
              <div className="button-wrap disnone">
                <Link to={`${titles.link}`}>
                  {titles.See}{" "}
                  {titles.name === "Top Categories" || "Testimonials" ? "" : <FaChevronRight />}
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionTitle;
