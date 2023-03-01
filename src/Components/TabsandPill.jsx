import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane'


const TabsandPill = () => {
    const [key, setKey] = useState('home');
  return (
   <>
   <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
     <div className="row">
          <div className="col-xl-12">
            <TabContent className="tab-content" id="flast-sell-tabContent">
              <TabPane className="tab-pane fade active show" id="engravingmachine" role="tabpanel" aria-labelledby="computer-tab">
                <div className="product-bs-slider-2">
                  <div className="product-slider-2 swiper-container">
                    <div className="swiper-wrapper">
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Engraving machine/GCCC180II-06.png" alt="product" className="radius" />
                            </a>
                          </div>
                          {/*   <div class="product__offer">
                                              <span class="discount">-15%</span>
                                              </div> */}
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">GCC C 180</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                          {/*  <div class="price">
                                                  <span>$105-$110</span>
                                              </div> */}
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Engraving machine/GCCMercury.png" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">GCC Mercury</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Engraving machine/GCCSpirit.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">GCC SPRIT</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Engraving machine/HS-B1390M.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">PhotonX - iCut</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*   <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Engraving machine/venus.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">Venus</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*   <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                  <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                </div>
              </TabPane>
              {/* second category */}
              <TabPane className="tab-pane fade" id="samsung" role="tabpanel" aria-labelledby="samsung-tab">
                <div className="product-bs-slider-2">
                  <div className="product-slider-2 swiper-container">
                    <div className="swiper-wrapper">
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Fiber leaser cutting machines/EffectiveL.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">Effective L</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div> 
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Fiber leaser cutting machines/EffectiveS.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">Effective S</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      {/*  */}
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Fiber leaser cutting machines/20210326-G3015APRO-HSG.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">GA</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      {/*  */}
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Fiber leaser cutting machines/G3015X-B4.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">G3015X-B4</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*    <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Fiber leaser cutting machines/G3015X-B7.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">G3015X-B7</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*   <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Fiber leaser cutting machines/G3015X-B9.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">G3015X-B9</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*   <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Fiber leaser cutting machines/R3.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">Tube Metal Cutting R3</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*   <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Fiber leaser cutting machines/202108-TS65II+OptionalAL-07Semiauto-loading.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">Tube Metal Cutting Ts-Series</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item swiper-slide">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/machines/Fiber leaser cutting machines/Ts-series/202108-TS65II+Optional-Auto-loading.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">Tube Metal Cutting Ts-Series</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*   <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                    </div>
                    {/* If we need navigation buttons */}
                  </div>
                  <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                  <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                </div>
              </TabPane>
              {/* third */}
              <TabPane className="tab-pane fade" id="htc" role="tabpanel" aria-labelledby="htc-tab">
                <div className="product-bs-slider-2">
                  <div className="product-slider-2 swiper-container">
                    <div className="swiper-wrapper">
                      <div className="product__item">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Lease hardining/LASER-WELDING-MACHINE-06.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">LASER WELDING MACHINE</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  {/*   <div class="bs-button bs2-button-prev"><i class="fal fa-chevron-left"></i></div>
                              <div class="bs-button bs2-button-next"><i class="fal fa-chevron-right"></i></div> */}
                </div>
              </TabPane>
              <TabPane className="tab-pane fade" id="nokia" role="tabpanel" aria-labelledby="nokia-tab">
                <div className="product-bs-slider-2">
                  <div className="product-slider-2 swiper-container">
                    <div className="swiper-wrapper">
                      <div className="product__item">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Lease Welding machine/ALMmachinephoto-06.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">ALM Machine</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*    <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                      <div className="product__item">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Lease Welding machine/LASER-WELDING-MACHINE-06.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">LASER WELDING MACHINE</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                  <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                </div>
              </TabPane>
              <TabPane className="tab-pane fade" id="cell" role="tabpanel" aria-labelledby="cell-tab">
                <div className="product-bs-slider-2">
                  <div className="product-slider-2 swiper-container">
                    <div className="swiper-wrapper">
                      <div className="product__item">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Leaser clading/LASERWELDINGMACHINE.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">LASER WELDING MACHINE</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                            {/*  <span>(01 review)</span> */}
                          </div>
                          {/*   <div class="price">
                                                  <span>$105-$150</span>
                                              </div> */}
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>   
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                  <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                </div>
              </TabPane>
              {/*  */}
              <TabPane className="tab-pane fade" id="sheet-metal-foaming" role="tabpanel" aria-labelledby="sheet-tab">
                <div className="product-bs-slider-2">
                  <div className="product-slider-2 swiper-container">
                    <div className="swiper-wrapper">
                      <div className="product__item">
                        <div className="product__thumb fix">
                          <div className="product-image w-img">
                            <a href="#">
                              <img src="assets/image/categories/Sheet metal foaming/UpstrokeNCPressBrake-06.png" alt="product" className="radius" />
                            </a>
                          </div>
                          <div className="product-action">
                            <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                              <i className="fal fa-eye" />
                              <i className="fal fa-eye" />
                            </a>
                            <a href="#" className="icon-box icon-box-1">
                              <i className="fal fa-layer-group" />
                              <i className="fal fa-layer-group" />
                            </a>
                          </div>
                        </div>
                        <div className="product__content">
                          <h6><a href="#">Upstroke-NC-Press-Brake</a></h6>
                          <div className="rating mb-5">
                            <ul>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                              <li><a href="#"><i className="fal fa-star" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product__add-cart text-center">
                          <a href data-bs-toggle="modal" data-bs-target="#modalone"><button type="button" className="cart-btn product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100">
                              enquire now
                            </button></a>
                        </div>
                      </div>   
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div className="bs-button bs2-button-prev"><i className="fal fa-chevron-left" /></div>
                  <div className="bs-button bs2-button-next"><i className="fal fa-chevron-right" /></div>
                </div>
              </TabPane>
              {/*  */}
            </TabContent>
          </div>
        </div>
    </Tabs>
   </>
  )
}

export default TabsandPill