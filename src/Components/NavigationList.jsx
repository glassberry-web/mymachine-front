import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import {data} from "./data"


const NavigationList = () => {    
      const [activeIndex, setActiveIndex] = useState(null);
      const handleDropdown = index => {
          setActiveIndex(index); 
      };

  return (
    <>
      <div className="col-lg-6 col-md-6 col-3">
        <div className="header__bottom-left d-flex d-xl-block align-items-center">
          <div className="side-menu d-lg-none mr-20">
            <button
              type="button"
              className="side-menu-btn offcanvas-toggle-btn"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div className="main-menu d-none d-lg-block">
            <nav>
              <ul>
                {data?.map((data, idx) => (
                  <li key={idx}  onClick={()=> handleDropdown(idx)} >
                    <Link to={data.links} className={`${activeIndex === idx ? 'active' : ''}`}>{data.name} {data.name ==="Applications" ? <HiChevronDown style={{fontSize:'22px', position:'absolute', top:'16px'}}/>: ""}</Link>
                    {data.namesub && (
                      <ul className="submenu">
                        {data?.namesub?.map((submenu) => (
                          <li key={submenu.id} >
                            <NavLink to={submenu.links}>{submenu.sub}</NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>            
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationList;
