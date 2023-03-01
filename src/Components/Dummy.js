<div>
  {/* back to top start */}
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {/* back to top end */}
  {/* desktop view */}
  {/* header-start */}
  <header className="header d-blue-bg headerres">      
    <div className="header-mid">
      <div className="container">
        <div className="heade-mid-inner">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="header__info">
                <div className="logo">
                  <a href="#" className="logo-image"><img src="assets/img/new/logo3.png" alt="logo" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7  d-none d-lg-block">
              <div className="header__search">
                <form action="#">
                  <div className="header__search-box">
                    <input className="search-input" type="text" placeholder="I'm Searching for..." />
                    <button className="button" type="submit"><i className="far fa-search" /></button>
                  </div>
                  <div className="header__search-cat">
                    <select>
                      <option>All Categories</option>
                      <option>Engraving machine</option>
                      <option>Fiber leaser cutting machines</option>
                      <option>Lease hardining</option>
                      <option>Lease Welding machine</option>
                      <option>Leaser clading</option>                                            
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 btnclass">
              <a href="#" className="st-btn-3 b-radius" data-bs-toggle="modal" data-bs-target="#mymodal">Trade Enquiry</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header__bottom">
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-lg-4">                        
            <div className="cat__menu-wrapper side-border d-none d-lg-block">
              <div className="cat-toggle">
                <button type="button" className="cat-toggle-btn cat-toggle-btn-1"><i className="fal fa-bars" /> Shop by Brands</button>
                <div className="cat__menu">
                  <nav id="mobile-menu" style={{display: 'block'}}>
                    <ul>
                      <li>
                        <a href="#">HSG</a>
                      </li>
                      <li>
                        <a href="#">alfexlaser</a>
                      </li>
                      <li><a href="#">G30</a></li>
                      <li className="d-laptop-none"><a href="#">GCC Technologies</a></li>
                      <li className="d-laptop-none"><a href="#">Laser Technologies</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-3">
            <div className="header__bottom-left d-flex d-xl-block align-items-center">
              <div className="side-menu d-lg-none mr-20">
                <button type="button" className="side-menu-btn offcanvas-toggle-btn"><i className="fas fa-bars" /></button>
              </div>
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul>
                    <li>
                      <a href="index.html" className="active">Home</a>
                    </li>
                    <li><a href>Machines</a></li>                           
                    <li><a href>Applications<i className="far fa-angle-down" /></a>
                      <ul className="submenu">
                        <li><a href="#">Gym Equipment</a></li>
                        <li><a href="#">Furniture</a></li>
                        <li><a href="#">Automobile</a></li>
                        <li><a href="#">Process Equipment</a></li>
                        <li><a href="#">Agricultural</a></li>
                        <li><a href="#">Textile</a></li>
                        <li><a href="#">Chemical process</a></li>
                        <li><a href="#">Semiconductor</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Media</a></li>
                    <li><a href>Blog</a></li>
                    <li><a href>Contact-Us</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-9">
            <div className="header-action">
              <div className="block-wishlist action">
                <a className="icon-link" href="#">
                  <img src="assets/image/slider/compare-new.png" />
                  <span className="text mt-1">
                    &nbsp;Compare</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header-end */}
  {/* desktop view end */}
  {/* header responsive */}
  <header className="header d-blue-bg d-lg-none">      
    <div className="header-mid">
      <div className="container">
        <div className="heade-mid-inner">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="header__info">
                <div className="logo">
                  <a href="#" className="logo-image"><img src="assets/image/logo-small.png" alt="logo" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-end" style={{marginTop: 12}}>
              <div className="block-wishlist action">
                <a className="icon-link" href="#">
                  <img src="assets/image/slider/compare-new.png" />
                  <span className="text text-light">
                    Compare</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header__bottom">
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-lg-12">                        
            <div className="header__search">
              <form action="#">
                <div className="header__search-box">
                  <input className="search-input" type="text" placeholder="I'm shopping for..." />
                  <button className="button" type="submit"><i className="far fa-search" /></button>
                </div>
                <div className="header__search-cat">
                  <select>
                    <option>All Categories</option>
                    <option>Best Seller Products</option>
                    <option>Top 10 Offers</option>
                    <option>New Arrivals</option>
                    <option>Metal Machine</option>
                    <option>Electronics</option>
                    <option>Food processing machines</option>
                    <option>Sheet Metal Machine</option>
                    <option>Wood Working Machine</option>
                    <option>Textile Machine</option>
                    <option>Packaging Machine</option>
                    <option>Metal Machine</option>
                  </select>
                </div>
              </form>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header responsive */}
  {/* offcanvas area start */}
  <div className="offcanvas__area">
    <div className="offcanvas__wrapper">
      <div className="offcanvas__close">
        <button className="offcanvas__close-btn" id="offcanvas__close-btn">
          <i className="fal fa-times" />
        </button>
      </div>
      <div className="offcanvas__content">
        <div className="offcanvas__logo mb-40">
          <a href="#">
            <img src="assets/img/logo/logo-white.png" alt="logo" />
          </a>
        </div>
        <div className="offcanvas__search mb-25">
          <form action="#">
            <input type="text" placeholder="What are you searching for?" />
            <button type="submit"><i className="far fa-search" /></button>
          </form>
        </div>
        <div className="mobile-menu fix" />
        <div className="offcanvas__action">
        </div>
      </div>
    </div>
  </div>
  {/* offcanvas area end */}      
  <div className="body-overlay" />
  {/* offcanvas area end */}
  <main>
    {/* slider-area-start */}
    <div className="slider-area">
      <div className="swiper-container slider__active">
        <div className="slider-wrapper swiper-wrapper">
          <div className="single-slider swiper-slide slider-height d-flex align-items-center">
            <img src="assets/image/home/webpageslider1.jpg" alt="slider" className="img-fluid" />
          </div>
          {/*  <div class="main-slider-paginations"></div> */}
        </div>
      </div>
    </div>
    {/* slider-area-end */}
    {/* Top Featured Product */}
    <section className="featured light-bg pt-90 pb-45">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__head d-flex justify-content-between mb-30">
              <div className="section__title">
                <h5 className="st-titile ">Top Most Searched Products</h5>
              </div>
              <div className="button-wrap">
                <a href="#">See All Product <i className="fal fa-chevron-right" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="single-features-item single-features-item-d b-radius mb-20">
              <div className="row  g-0 align-items-center">
                <div className="col-md-6">
                  <div className="features-thum">
                    <div className="features-product-image w-img">
                      <a href="#"><img src="assets/image/top-searched-product/product1.png" alt /></a>
                    </div>
                    {/*    <div class="product__offer">
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
                </div>
                <div className="col-md-6">
                  <div className="product__content product__content-d">
                    <h6><a href="#">GCC C180II</a></h6>
                    <div className="rating mb-5">
                      <ul className="rating-d">
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                      </ul>
                    </div>
                    <div className="features-des mb-25">
                      <ul>
                        <li><a href="#"><i className="fas fa-circle" />Work Area - 18 x 12 in. </a></li>
                        <li><a href="#"><i className="fas fa-circle" />Drive - Closed Loop DC Servo Control</a></li>
                        <li><a href="#"><i className="fas fa-circle" />Dimentions - 30.7 X 29.1 X 16.1 in.</a></li>
                        <li><a href="#"><i className="fas fa-circle" />Maximum Motor Speed - 40 IPS</a></li>
                      </ul>
                    </div>
                    <div className="cart-option">
                      <a href="#" data-bs-toggle="modal" data-bs-target="#modalone" className="cart-btn-2 w-100 mr-10">enquire now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="row">
              <div className="col-md-6">
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#"><img src="assets/image/top-searched-product/Effective S.png" alt /></a>
                        </div>
                        {/*    <div class="product__offer">
                                              <span class="discount">-15%</span>
                                          </div> */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
                        <h6><a href="#">Effective S</a></h6>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#"><img src="assets/image/top-searched-product/G3015X-B7-One.png" alt /></a>
                        </div>
                        {/*   <div class="product__offer">
                                              <span class="discount">-5%</span>
                                          </div> */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
                        <h6><a href="#">G3015X-B7</a></h6>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#"><img src="assets/image/top-searched-product/LASER WELDING MACHINE ONE.png" alt /></a>
                        </div>
                        {/*  <div class="product__offer">
                                              <span class="discount">-25%</span>
                                          </div> */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#"><img src="assets/image/top-searched-product/Upstroke NC Press Brake.png" alt /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
                        <h6><a href="#">Upstroke NC Press Brake</a></h6>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Top Featured Product */}
    {/* page-banner-area-start */}
    <div className="page-banner-area page-banner-height-2" data-background="assets/img/new/bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-banner-content text-center">
              <h4 className="breadcrumb-title">Newest machine for sale on the marketplace</h4>
              <p className="parallax">Our very human specialists work behind the scenes to ensure that buyers find the exact machinery they’re looking for and sellers get the serious, qualified leads they want, in sectors ranging from wood, metal and plastic to print, packaging, food, textile and pharma, just to name a few.The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              <div className="banner-button mt-20 d-none d-sm-block">
                <a href="#" className="st-btn-3 b-radius" data-bs-toggle="modal" data-bs-target="#mymodal">Trade Enquiry</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* page-banner-area-end */}
    {/* topsell__area-start */}
    <section className="topsell__area-2 pt-60 pb-10" style={{backgroundColor: '#F4F5F7'}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__head d-flex justify-content-between mb-10">
              <div className="section__title">
                <h5 className="st-titile">Top Categories</h5>
              </div>
              <div className="product__nav-tab"> 
                <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="computer-tab" data-bs-toggle="tab" data-bs-target="#engravingmachine" type="button" role="tab" aria-controls="computer" aria-selected="false">Engraving machine</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="samsung-tab" data-bs-toggle="tab" data-bs-target="#samsung" type="button" role="tab" aria-selected="false">Fiber leaser cutting machines</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="htc-tab" data-bs-toggle="tab" data-bs-target="#htc" type="button" role="tab" aria-selected="false">
                      Lease hardining</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="nokia-tab" data-bs-toggle="tab" data-bs-target="#nokia" type="button" role="tab" aria-selected="false">Lease Welding machine</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="cell-tab" data-bs-toggle="tab" data-bs-target="#cell" type="button" role="tab" aria-selected="true">Leaser clading</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="sheet-tab" data-bs-toggle="tab" data-bs-target="#sheet-metal-foaming" type="button" role="tab" aria-selected="true">Sheet metal foaming</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tab-content" id="flast-sell-tabContent">
              <div className="tab-pane fade active show" id="engravingmachine" role="tabpanel" aria-labelledby="computer-tab">
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
              </div>
              {/* second category */}
              <div className="tab-pane fade" id="samsung" role="tabpanel" aria-labelledby="samsung-tab">
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
              </div>
              {/* third */}
              <div className="tab-pane fade" id="htc" role="tabpanel" aria-labelledby="htc-tab">
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
              </div>
              <div className="tab-pane fade" id="nokia" role="tabpanel" aria-labelledby="nokia-tab">
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
              </div>
              <div className="tab-pane fade" id="cell" role="tabpanel" aria-labelledby="cell-tab">
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
              </div>
              {/*  */}
              <div className="tab-pane fade" id="sheet-metal-foaming" role="tabpanel" aria-labelledby="sheet-tab">
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
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* topsell__area-end */}
    {/*Brands-end */}
    <section className="featured light-bg pt-45 pb-45" style={{backgroundColor: '#ffffff'}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__head d-flex justify-content-between mb-30">
              <div className="section__title">
                <h5 className="st-titile ">Popular Brands</h5>
              </div>
              <div className="button-wrap">
                <a href="#">See All Brands <i className="fal fa-chevron-right" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="brand-slider swiper-container pt-30 pb-60">
          <div className="swiper-wrapper">
            <div className="brand-item w-img swiper-slide">
              <a href="#"><img src="assets/image/brands/1.png" alt="brand" className="shadow" /></a>
            </div>
            <div className="brand-item w-img swiper-slide">
              <a href="#"><img src="assets/image/brands/2.png" alt="brand" className="shadow" /></a>
            </div>
            <div className="brand-item w-img swiper-slide">
              <a href="#"><img src="assets/image/brands/3.png" alt="brand" className="shadow" /></a>
            </div>
            <div className="brand-item w-img swiper-slide">
              <a href="#"><img src="assets/image/brands/4.png" alt="brand" className="shadow" /></a>
            </div>
            <div className="brand-item w-img swiper-slide">
              <a href="#"><img src="assets/image/brands/5.png" alt="brand" className="shadow" /></a>
            </div>
            <div className="brand-item w-img swiper-slide">
              <a href="#"><img src="assets/image/brands/3.png" alt="brand" className="shadow" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Brands-end */}
    {/* Top Featured Product */}
    <section className="featured light-bg pt-60 pb-45">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__head d-flex justify-content-between mb-30">
              <div className="section__title">
                <h5 className="st-titile ">Latest Products</h5>
              </div>
              <div className="button-wrap">
                <a href="#">See All Product <i className="fal fa-chevron-right" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="single-features-item single-features-item-d b-radius mb-20">
              <div className="row  g-0 align-items-center">
                <div className="col-md-6">
                  <div className="features-thum">
                    <div className="features-product-image w-img">
                      <a href="#"><img src="assets/image/Latest-products/latest1.png" alt /></a>
                    </div>
                    {/*  <div class="product__offer">
                                      <span class="discount">-15%</span>
                                  </div> */}
                    <div className="product-action">
                      <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product__content product__content-d">
                    <h6><a href="#">Effective L</a></h6>
                    <div className="rating mb-5">
                      <ul className="rating-d">
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                      </ul>
                      {/*   <span>(01 review)</span> */}
                    </div>
                    <div className="features-des mb-25">
                      <ul>
                        <li><a href="#"><i className="fas fa-circle" />Dimentions - Footprint approx 34 m<sup>2</sup></a></li>
                        <li><a href="#"><i className="fas fa-circle" /> Beam Source - fiber laser</a></li>
                        <li><a href="#"><i className="fas fa-circle" />Structural Steel - 3mm 10mm</a></li>
                        <li><a href="#"><i className="fas fa-circle" />Cutting gases - nitrogen or oxygen </a></li>
                      </ul>
                    </div>
                    <div className="cart-option">
                      <a href="#" data-bs-toggle="modal" data-bs-target="#modalone" className="cart-btn-2 w-100 mr-10">enquire now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="row">
              <div className="col-md-6">
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#"><img src="assets/image/Latest-products/20210326-G3015A PRO-HSG.png" alt /></a>
                        </div>
                        {/*    <div class="product__offer">
                                              <span class="discount">-15%</span>
                                          </div> */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
                        <h6><a href="#">20210326-G3015A PRO-HSG</a></h6>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#"><img src="assets/image/Latest-products/GCC Mercury.png" alt /></a>
                        </div>
                        {/*  <div class="product__offer">
                                              <span class="discount">-5%</span>
                                          </div> */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
                        <h6><a href="#">GCC Mercury</a></h6>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#"><img src="assets/image/Latest-products/G3015X-B4.png" alt /></a>
                        </div>
                        {/*   <div class="product__offer">
                                              <span class="discount">-25%</span>
                                          </div> */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#"><img src="assets/image/Latest-products/venus.png" alt /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
                        <h6><a href="#">venus</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          {/*     <span>(01 review)</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Top Featured Product */}
    {/* blog-area-start */}
    <div className="blog-area pt-55 pb-45">
      <div className="container 0">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__head d-flex justify-content-between mb-30">
              <div className="section__title section__title-2">
                <h5 className="st-titile">From The Blog</h5>
              </div>
              <div className="button-wrap button-wrap-2">
                <a href="#">See All Blog <i className="fal fa-chevron-right" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <a href="#"><img src="assets/img/new/b1.png" alt /></a>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2">
                <h6><a href="#">STUDER S31 Cylindrical grinding machine</a></h6>
                <span className="author mb-10">posted by <a href="#">Adlop</a></span>
                <div className="smblog-foot pt-15">
                  <div className="post-readmore">
                    <a href="#"> Read More <span className="icon" /></a>
                  </div>
                  <div className="post-date">
                    <a href="#">Jan 24, 2022</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <a href="#"><img src="assets/img/new/b2.png" alt /></a>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2">
                <h6><a href="#">EX CELL O XK237 Thread rolling machine</a></h6>
                <span className="author mb-10">posted by <a href="#">Angelia</a></span>
                <div className="smblog-foot pt-15">
                  <div className="post-readmore">
                    <a href="#">Read More <span className="icon" /></a>
                  </div>
                  <div className="post-date">
                    <a href="#">Jan 24, 2022</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <a href="#"><img src="assets/img/new/b3.png" alt /></a>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2">
                <h6><a href="#">Cylindrical centreless grinding machine</a></h6>
                <span className="author mb-10">posted by <a href="#">Iqbal</a></span>
                <div className="smblog-foot pt-15">
                  <div className="post-readmore">
                    <a href="#"> Read More <span className="icon" /></a>
                  </div>
                  <div className="post-date">
                    <a href="#">Jan 24, 2022</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <a href="#"><img src="assets/img/new/b4.png" alt /></a>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2">
                <h6><a href="#">WMW UPW 25x100 Thread rolling machine</a></h6>
                <span className="author mb-10">posted by <a href="#">Jenny</a></span>
                <div className="smblog-foot pt-15">
                  <div className="post-readmore">
                    <a href="#"> Read More <span className="icon" /></a>
                  </div>
                  <div className="post-date">
                    <a href="#">Jan 24, 2022</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* blog-area-end */}
  </main>
  {/* footer-start */}
  <footer>
    <div className="fotter-area bgdark">
      <div className="footer__top pt-40 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="footer__widget">
                <div className="footer__widget-title mb-20">
                  <h4>About The Store</h4>
                </div>
                <div className="footer__widget-content">
                  <p className="footer-text mb-35">Our mission statement is to provide the absolute best customer experience available in the  industry without exception.</p>
                  <div className="footer__widget-title mb-20">
                    <h4>Follow Us</h4>
                  </div>
                  <div className="cta-social">
                    <div className="social-icon">
                      <a href className="facebook"><i className="fab fa-facebook-f" /></a>
                      <a href className="twitter"><i className="fab fa-twitter" /></a>
                      <a href className="youtube"><i className="fab fa-youtube" /></a>
                      <a href className="linkedin"><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-md-1">
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h4>Customer Service</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                      <li><a href>Help Center</a></li>
                      <li><a href>Contact Us</a></li>
                      <li><a href>Report Abuse</a></li>
                      <li><a href>Submit a Dispute</a></li>
                      <li><a href>Policies &amp; Rules</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-md-1">
              <div className="footer__widget text-left">
                <div className="footer__widget-title">
                  <h4>Quick Links</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                      <li><a href>About Us</a></li>
                      <li><a href>Career</a></li>
                      <li><a href>Contact Us</a></li>
                      <li><a href>FAQs</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h4>My Account</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                      <li><a href="#">Product Support</a></li>
                      <li><a href="#">Compare</a></li>
                      <li><a href="#">Terms &amp; Conditions &amp;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content pt-20 bottom">
            <div className="row">
              <div className="col-xl-12">
                <div className="copy-right-area text-center">
                  <p>Copyright © <span>My Machine Store</span> All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer-end */}
  {/* Header Responsive */}
  <div className="header-fixed d-lg-none">
    <div className="blog-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 pt-2 pb-2 text-center">
            <img src="assets/image/slider/category.png" />
            <h6 className="text-light pt-1">Categories</h6>
          </div>
          <div className="col-3 pt-2 pb-2 text-center">
            <img src="assets/image/slider/brandicon.png" />
            <h6 className="text-light pt-1">Brands</h6>
          </div>
          <div className="col-3 pt-2 pb-2 text-center">
            <img src="assets/image/slider/laundry.png" />
            <h6 className="text-light pt-1">Machines</h6>
          </div>
          <div className="col-3 pt-2 pb-2 text-center">
            <img src="assets/image/slider/form.png" />
            <a data-bs-toggle="modal" data-bs-target="#mymodal"><h6 className="text-light pt-1">Enquiry</h6></a>
          </div>
        </div>
      </div>
    </div> 
  </div>
  {/* Header Responsive */} 
  {/* Modal */}
  <div className="modal fade" id="modalone" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content popup-bg1">
        <div className="modal-header text-center">
          <h3 className="modal-title text-center" id="exampleModalLabel">Product Enquiry Form</h3>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body" style={{backgroundImage: 'url(assets/image/slider/black.jpg)'}}>
          <div className="row">
            <div className="col-md-5 pt-4">
              <img src="assets/image/slider/modalimg2.png" className="img-fluid" />
            </div>
            <div className="col-md-7 mx-auto pt-4">
              <div className="basic-login modal-login">
                <form action="contact1.php" method="POST">
                  <div className="row">
                    <div className="col-lg-12">
                      <input id="username" name="name" className="madalform" type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-12">
                      <input id="product" name="product" className="madalform" type="text" placeholder="Product Name" />
                    </div>
                    <div className="col-lg-12">
                      <input id="email-id" name="email" className="madalform" type="text" placeholder="Email Id" />
                    </div>
                    <div className="col-lg-12">
                      <input id="phone" name="phone" className="madalform" type="text" placeholder="Phone No." />
                    </div>
                    <div className="col-lg-4 mx-auto mt-3 mb-4">
                      {/*   <a href="" type="submit" class="tp-in-btn">Register</a> */}
                      <button type="submit" className="tp-in-btn">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  {/* model demo */}
  <div className="modal fade" id="mymodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content popup-bg1" style={{backgroundColor: '#f5f5f5'}}>
        <div className="row">
          <div className="col-lg-12">
            <div className="modal-header">
              <h3 className="modal-title text-center" id="exampleModalLabel">Trade Enquiry Form</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/image/slider/laser4.png" className="img-fluid" />
            </div>
            <div className="col-lg-6 modaldiv">
              <div className="basic-login">
                <form action="contact.php" method="POST">
                  <div className="row">
                    <div className="col-lg-12">
                      <input id="username" name="companyname" className="madalform1" type="text" placeholder="Company Name" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} />
                    </div>
                    <div className="col-lg-12">
                      <input id="email-id" name="email" className="madalform1" type="text" placeholder="Email Id" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} />
                    </div>
                    <div className="col-lg-12">
                      <input id="location" name="location" className="madalform1" type="text" placeholder="Location" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} />
                    </div>
                    <div className="col-lg-12">
                      <input id="phone" name="phone" className="madalform1" type="text" placeholder="Phone No." style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} />
                    </div>
                    <div className="col-lg-6">
                      <input id="managername" name="managername" className="madalform1" type="text" placeholder="Manager Name" style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} />
                    </div>
                    <div className="col-lg-6">
                      <input id="managernumber" name="managernumber" className="madalform1" type="text" placeholder="Manager Phone No." style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} />
                    </div>
                    <div className="col-lg-4 mx-auto mt-3 mb-4">
                      {/*   <a href="" type="submit" class="tp-in-btn">Register</a> */}
                      <button type="submit" className="tp-in-btn">Register</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
