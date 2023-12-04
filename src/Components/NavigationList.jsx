
import { Link, NavLink } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import {data} from "./data"
import React, { useEffect, useState } from 'react'


const NavigationList = () => {    
      const [activeIndex, setActiveIndex] = useState(null);
      const [subdata, setSubData] = useState([])
      const handleDropdown = index => {
          setActiveIndex(index); 
      };

      const fetchData = () => {
        // fetch("https://api.mymachinestore.in/api/getapplication")
        fetch("https://api.mymachinestore.in/getapplication")
    
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then(subdata => {
            setSubData(subdata)
          })
      }
      
        useEffect(() => {
          fetchData()
        }, [])

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
                        {subdata?.map((submenu) => (
                          <li key={submenu._id} >
                            <NavLink to={`/application/${submenu.application_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${submenu._id}`, namee:`${submenu.application_name}`}}>{submenu.application_name}</NavLink>
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
