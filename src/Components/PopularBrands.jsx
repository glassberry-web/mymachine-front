import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "./SectionTitle";
import { sectionTitleData } from "./data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PopularBrands = () => {
    const [title , SetTitle] = useState(sectionTitleData);
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("https://mymachinestore.com/api/machinelisting")

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
    // const brandsdata = [
    //     {   
    //         id:1,
    //        src :"assets/image/brands/1.png"
    //     },
    //     {   
    //         id:2,
    //        src :"assets/image/brands/2.png"
    //     },
    //     {   
    //         id:3,
    //        src :"assets/image/brands/3.png"
    //     },
    //     {   
    //         id:4,
    //        src :"assets/image/brands/4.png"
    //     },
    //     {   
    //         id:5,
    //        src :"assets/image/brands/5.png"
    //     },
    //     {   
    //         id:6,
    //        src :"assets/image/brands/3.png"
    //     },
    // ]
  return (
    <>
      <section
        className="featured light-bg pt-45 pb-45"
        style={{ backgroundColor: "#ffffff" }}
      > 
        <div className="container">
            <SectionTitle title={title.filter((data)=> data.id === 3)} />
          {/* <div className="row">
            <div className="col-xl-12">
              <div className="section__head d-flex justify-content-between mb-30">
                <div className="section__title">
                  <h5 className="st-titile ">Popular Brands</h5>
                </div>
                <div className="button-wrap">
                  <a href="#">
                    See All Brands <i className="fal fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          <div className="brand-slider swiper-container pt-30 pb-60">
            <Swiper
            breakpoints={{
              370: {
                // width: 576,
                slidesPerView: 1,
              },
              450: {
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
            
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                loop
               spaceBetween={50}
               slidesPerView={6}
                autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }} className="swiper-wrapper">
                {
                    data.map((detail)=>(
                      detail.logo &&  detail.company_name  ?(
                        <SwiperSlide className="brand-item w-img  swiper-slide">
                           <Link to="http://15.207.31.23:3000/companiesDetails" state={{id:`${detail._id}`}} >
                              <img src={detail.logo}  alt="brand"
                            className="shadow  brandlogo" />
                            </Link> 
                        {/* <Link to  key={data._id}>
                          <img
                            src={data.src}
                           
                          />
                        </Link> */}
                      </SwiperSlide>
                      ) : ""
                    ))
                }
              {/* <div className="brand-item w-img swiper-slide">
                <a href="#">
                  <img
                    src="assets/image/brands/1.png"
                    alt="brand"
                    className="shadow"
                  />
                </a>
              </div>
              <div className="brand-item w-img swiper-slide">
                <a href="#">
                  <img
                    src="assets/image/brands/2.png"
                    alt="brand"
                    className="shadow"
                  />
                </a>
              </div>
              <div className="brand-item w-img swiper-slide">
                <a href="#">
                  <img
                    src="assets/image/brands/3.png"
                    alt="brand"
                    className="shadow"
                  />
                </a>
              </div>
              <div className="brand-item w-img swiper-slide">
                <a href="#">
                  <img
                    src="assets/image/brands/4.png"
                    alt="brand"
                    className="shadow"
                  />
                </a>
              </div>
              <div className="brand-item w-img swiper-slide">
                <a href="#">
                  <img
                    src="assets/image/brands/5.png"
                    alt="brand"
                    className="shadow"
                  />
                </a>
              </div>
              <div className="brand-item w-img swiper-slide">
                <a href="#">
                  <img
                    src="assets/image/brands/3.png"
                    alt="brand"
                    className="shadow"
                  />
                </a>
              </div> */}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularBrands;
