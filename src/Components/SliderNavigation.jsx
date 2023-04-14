import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SliderNavigation = () => {
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const fetchData = () => {
    // http://localhost:5000/uniquecategories
    fetch("http://15.207.31.23:5000/fetch")

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
  const fetchCategory = () => {
   
    fetch("http://15.207.31.23:5000/uniquecategories")

      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(data => {
        setCategory(data)
      })
  }

  useEffect(() => {
    fetchCategory()
  }, [])
  const fetchSubCategory = () => {
   
    fetch("http://15.207.31.23:5000/uniquesubcategories")

      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(data => {
        setSubCategory(data)
      })
  }

  useEffect(() => {
    fetchSubCategory()
  }, [])
  const machineData = Object.entries(data);
  console.log("machineunique=>", machineData);
  // const machineData = Object.values(data);
  // let uniqueCat = [...new Set(machineData.map((cat) => cat[1].category))];
  // console.log("catee", uniqueCat);
  return (
    <div className="header__bottom d-none d-lg-block">
      <div className="container">    
         
            <div className="box-items-inner pt-10 pb-10">   
               {  
                category.map((category)=>(
            
            <div className="box-item">            
                
              <a href="shop.html">
              <img src="assets/image/press-machine.gif" className="wid-mr" />
             
                      {category}
               </a>
                
              {
                
                  <div className="mega-menu">
                    {
                    data.map((detail, i) =>(
                     
                  <div className="container container-mega">
                    {
                     detail.category === category ? (
                    <ul>
                      <li>
                        <ul>
                          <li className="title">
                            <a href="shop.html">{detail.subCategory === subcategory[0] ? "" : detail.subCategory}</a>
                          </li>
                          <li>
                            <a href="shop.html">{detail.product_name}</a>
                          </li>
                          {/* <li>
                            <a href="shop.html">Ajax Load More</a>
                          </li>
                          <li>
                            <a href="shop.html">Infinite Scroll</a>
                          </li>
                          <li>
                            <a href="shop.html">Sidebar Right</a>
                          </li>
                          <li>
                            <a href="shop.html">Sidebar Left</a>
                          </li> */}
                        </ul>
                      </li>
                      <li> 
                         <ul>
                         <li className="title">
                            <a href="shop.html">{detail.subCategory === subcategory[1] ? "" : detail.subCategory}</a>
                          </li>
                         <li>
                            <a href="shop.html">{detail.product_name}</a>
                          </li>
                          {/* <li>
                            <a href="shop.html">Small Products</a>
                          </li>
                          <li>
                            <a href="shop.html">Large Products</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop — 3 Items</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop — 4 Items</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop — 5 Items</a>
                          </li> */}
                        </ul>
                      </li>
                      
                      {/* <li>
                        <ul>
                          <li className="title">
                            <a href="shop.html">PRODUCT LAYOUT</a>
                          </li>
                          <li>
                            <a href="shop.html">Description Sticky</a>
                          </li>
                          <li>
                            <a href="shop.html">Product Carousel</a>
                          </li>
                          <li>
                            <a href="shop.html">Gallery Modern</a>
                          </li>
                          <li>
                            <a href="shop.html">Thumbnail Left</a>
                          </li>
                          <li>
                            <a href="shop.html">Thumbnail Right</a>
                          </li>
                          <li>
                            <a href="shop.html">Thumbnail Botttom</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="title">
                            <a href="shop.html">Basketball</a>
                          </li>
                          <li>
                            <a href="shop.html">East Hampton Fleece</a>
                          </li>
                          <li>
                            <a href="shop.html">Faxon Canvas Low</a>
                          </li>
                          <li>
                            <a href="shop.html">Habitasse Dictumst</a>
                          </li>
                          <li>
                            <a href="shop.html">Kaoreet Lobortis</a>
                          </li>
                          <li>
                            <a href="shop.html">NikeCourt Zoom</a>
                          </li>
                          <li>
                            <a href="shop.html">NikeCourts Air Zoom</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="title">
                            <a href="shop.html">Basketball</a>
                          </li>
                          <li>
                            <a href="shop.html">East Hampton Fleece</a>
                          </li>
                          <li>
                            <a href="shop.html">Faxon Canvas Low</a>
                          </li>
                          <li>
                            <a href="shop.html">Habitasse Dictumst</a>
                          </li>
                          <li>
                            <a href="shop.html">Kaoreet Lobortis</a>
                          </li>
                          <li>
                            <a href="shop.html">NikeCourt Zoom</a>
                          </li>
                          <li>
                            <a href="shop.html">NikeCourts Air Zoom</a>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li
                        className="mega-image hover-effect"
                        style={{
                          backgroundImage: "url(assets/img/bg/menu-item.jpg)",
                        }}
                      >
                        <ul>
                          <li>
                            <a href="shop.html" className="hidvis">
                              <h4>
                                Top Cameras <br /> Bestseller Products
                              </h4>
                              <h5>4K</h5>
                              <h6>
                                Sale Up To <span>60% Off</span>
                              </h6>
                            </a>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                    ) : "" }
                  </div>
                   ))}
                </div>
                
              }            
            
           
         
            </div>

                 
            )) }  
           
          
         
         
       
        {/* <div className="box-item">
          <a href="shop.html">
            <img src="assets/image/press-machine.gif" className="wid-mr" />
            Engraving
            <br />
            Machine
          </a>
          <div className="mega-menu">
            <div className="container container-mega">
              <ul>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Pagination</a>
                    </li>
                    <li>
                      <a href="shop.html">Ajax Load More</a>
                    </li>
                    <li>
                      <a href="shop.html">Infinite Scroll</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Left</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP PAGES</a>
                    </li>
                    <li>
                      <a href="shop.html">List View</a>
                    </li>
                    <li>
                      <a href="shop.html">Small Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Large Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 3 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 4 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 5 Items</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">PRODUCT LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Description Sticky</a>
                    </li>
                    <li>
                      <a href="shop.html">Product Carousel</a>
                    </li>
                    <li>
                      <a href="shop.html">Gallery Modern</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Left</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Botttom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="mega-image hover-effect"
                  style={{
                    backgroundImage: "url(assets/img/bg/menu-item.jpg)",
                  }}
                >
                  <ul>
                    <li>
                      <a href="shop.html" className="hidvis">
                        <h4>
                          Top Cameras <br /> Bestseller Products
                        </h4>
                        <h5>4K</h5>
                        <h6>
                          Sale Up To <span>60% Off</span>
                        </h6>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-item">
          <a href="shop.html">
            <img src="assets/image/laser-cutting.gif" className="wid-mr" />
            Fiber Laser <br />
            Cutting Machines
          </a>
          <div className="mega-menu">
            <div className="container container-mega">
              <ul>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Pagination</a>
                    </li>
                    <li>
                      <a href="shop.html">Ajax Load More</a>
                    </li>
                    <li>
                      <a href="shop.html">Infinite Scroll</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Left</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP PAGES</a>
                    </li>
                    <li>
                      <a href="shop.html">List View</a>
                    </li>
                    <li>
                      <a href="shop.html">Small Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Large Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 3 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 4 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 5 Items</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">PRODUCT LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Description Sticky</a>
                    </li>
                    <li>
                      <a href="shop.html">Product Carousel</a>
                    </li>
                    <li>
                      <a href="shop.html">Gallery Modern</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Left</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Botttom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="mega-image hover-effect"
                  style={{
                    backgroundImage: "url(assets/img/bg/menu-item.jpg)",
                  }}
                >
                  <ul>
                    <li>
                      <a href="shop.html">
                        <h4>
                          Top Cameras <br /> Bestseller Products
                        </h4>
                        <h5>4K</h5>
                        <h6>
                          Sale Up To <span>60% Off</span>
                        </h6>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="box-item">
          <a href="shop.html">
            <img src="assets/image/laser-cutting.gif" className="wid-mr" />
            Laser
            <br />
            Hardening
          </a>
          <div className="mega-menu">
            <div className="container container-mega">
              <ul>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Pagination</a>
                    </li>
                    <li>
                      <a href="shop.html">Ajax Load More</a>
                    </li>
                    <li>
                      <a href="shop.html">Infinite Scroll</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Left</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP PAGES</a>
                    </li>
                    <li>
                      <a href="shop.html">List View</a>
                    </li>
                    <li>
                      <a href="shop.html">Small Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Large Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 3 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 4 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 5 Items</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">PRODUCT LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Description Sticky</a>
                    </li>
                    <li>
                      <a href="shop.html">Product Carousel</a>
                    </li>
                    <li>
                      <a href="shop.html">Gallery Modern</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Left</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Botttom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="mega-image hover-effect"
                  style={{
                    backgroundImage: "url(assets/img/bg/menu-item.jpg)",
                  }}
                >
                  <ul>
                    <li>
                      <a href="shop.html">
                        <h4>
                          Top Cameras <br /> Bestseller Products
                        </h4>
                        <h5>4K</h5>
                        <h6>
                          Sale Up To <span>60% Off</span>
                        </h6>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>             
          </div>
        </div>
        <div className="box-item">
          <a href="shop.html">
            <img src="assets/image/laser-cutting.gif" className="wid-mr" />
            Laser Welding
            <br />
            Machines
          </a>
          <div className="mega-menu">
            <div className="container container-mega">
              <ul>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Pagination</a>
                    </li>
                    <li>
                      <a href="shop.html">Ajax Load More</a>
                    </li>
                    <li>
                      <a href="shop.html">Infinite Scroll</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Left</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP PAGES</a>
                    </li>
                    <li>
                      <a href="shop.html">List View</a>
                    </li>
                    <li>
                      <a href="shop.html">Small Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Large Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 3 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 4 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 5 Items</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">PRODUCT LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Description Sticky</a>
                    </li>
                    <li>
                      <a href="shop.html">Product Carousel</a>
                    </li>
                    <li>
                      <a href="shop.html">Gallery Modern</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Left</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Botttom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="mega-image hover-effect"
                  style={{
                    backgroundImage: "url(assets/img/bg/menu-item.jpg)",
                  }}
                >
                  <ul>
                    <li>
                      <a href="shop.html">
                        <h4>
                          Top Cameras <br /> Bestseller Products
                        </h4>
                        <h5>4K</h5>
                        <h6>
                          Sale Up To <span>60% Off</span>
                        </h6>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
        <div className="box-item">
          <a href="shop.html">
            <img src="assets/image/laser-cutting.gif" className="wid-mr" />
            Laser
            <br />
            Clading
          </a>
          <div className="mega-menu">
            <div className="container container-mega">
              <ul>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Pagination</a>
                    </li>
                    <li>
                      <a href="shop.html">Ajax Load More</a>
                    </li>
                    <li>
                      <a href="shop.html">Infinite Scroll</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Left</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP PAGES</a>
                    </li>
                    <li>
                      <a href="shop.html">List View</a>
                    </li>
                    <li>
                      <a href="shop.html">Small Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Large Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 3 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 4 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 5 Items</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">PRODUCT LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Description Sticky</a>
                    </li>
                    <li>
                      <a href="shop.html">Product Carousel</a>
                    </li>
                    <li>
                      <a href="shop.html">Gallery Modern</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Left</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Botttom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="mega-image hover-effect"
                  style={{
                    backgroundImage: "url(assets/img/bg/menu-item.jpg)",
                  }}
                >
                  <ul>
                    <li>
                      <a href="shop.html">
                        <h4>
                          Top Cameras <br /> Bestseller Products
                        </h4>
                        <h5>4K</h5>
                        <h6>
                          Sale Up To <span>60% Off</span>
                        </h6>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>              
          </div>
        </div>
        <div className="box-item">
          <a href="shop.html">
            <img src="assets/image/laser-cutting.gif" className="wid-mr" />
            Sheet
            <br /> Metal Foaming
          </a>
          <div className="mega-menu">
            <div className="container container-mega">
              <ul>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Pagination</a>
                    </li>
                    <li>
                      <a href="shop.html">Ajax Load More</a>
                    </li>
                    <li>
                      <a href="shop.html">Infinite Scroll</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Sidebar Left</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">SHOP PAGES</a>
                    </li>
                    <li>
                      <a href="shop.html">List View</a>
                    </li>
                    <li>
                      <a href="shop.html">Small Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Large Products</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 3 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 4 Items</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop — 5 Items</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">PRODUCT LAYOUT</a>
                    </li>
                    <li>
                      <a href="shop.html">Description Sticky</a>
                    </li>
                    <li>
                      <a href="shop.html">Product Carousel</a>
                    </li>
                    <li>
                      <a href="shop.html">Gallery Modern</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Left</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Right</a>
                    </li>
                    <li>
                      <a href="shop.html">Thumbnail Botttom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="title">
                      <a href="shop.html">Basketball</a>
                    </li>
                    <li>
                      <a href="shop.html">East Hampton Fleece</a>
                    </li>
                    <li>
                      <a href="shop.html">Faxon Canvas Low</a>
                    </li>
                    <li>
                      <a href="shop.html">Habitasse Dictumst</a>
                    </li>
                    <li>
                      <a href="shop.html">Kaoreet Lobortis</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourt Zoom</a>
                    </li>
                    <li>
                      <a href="shop.html">NikeCourts Air Zoom</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="mega-image hover-effect"
                  style={{
                    backgroundImage: "url(assets/img/bg/menu-item.jpg)",
                  }}
                >
                  <ul>
                    <li>
                      <a href="shop.html">
                        <h4>
                          Top Cameras <br /> Bestseller Products
                        </h4>
                        <h5>4K</h5>
                        <h6>
                          Sale Up To <span>60% Off</span>
                        </h6>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="box-item d-lg-none">
          <a href="shop.html">
            <img src="assets/image/laser-cutting.gif" className="wid-mr" />
            Garden <br /> &amp; Home Kitchen
          </a>
        </div>
        <div className="box-item d-lg-none">
          <a href="shop.html">
            <img src="assets/image/laser-cutting.gif" className="wid-mr" />
            Audio <br /> &amp; Headphones
          </a>
        </div> */}
           </div>
          
          
           
          
        
       
      </div>
    </div>
  );
};

export default SliderNavigation;
