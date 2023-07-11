import {GoListUnordered } from "react-icons/go";

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBrand = () => {
  const [data, setData] = useState([])

  const fetchData = () => {
      // fetch("https://api.mymachinestore.com/api/fetch")
      fetch("https://api.mymachinestore.com/fetch")

          .then(response => {
              console.log(response);
              return response.json()
          })
          .then(data => {
              setData(data)
              console.log("brandd", data);
          })
  }

  useEffect(() => {
      fetchData()
  }, [])
  // const machineData = Object.values(data);
  let uniqueBrand = [...new Set(data.map((brand) => brand.brand))];
  console.log("uniqueyy=>", uniqueBrand);
  // let newuniqueBrand = uniqueBrand.join().replace(/^\s+|\s+$/gm,'');
  // console.log("newunique=>", newuniqueBrand);
  // const unordered = [
  //   "HSG",
  //   "Alfexlaser",
  //   "G30",
  //   "GCC Technologies",
  //   "Laser Technologies",
  // ];
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <div className="col-lg-4">
        <div className="cat__menu-wrapper side-border d-none d-lg-block">
          <div className="cat-toggle">
            <button
              type="button"
              onClick={handleClick}
              className="cat-toggle-btn cat-toggle-btn-1"
              style={{alignItems:"center",gap:'4px',display:'flex'}}
            >
              <GoListUnordered style={{ fontSize: "30px" }} /> Shop by Brands
              {/* here */}
            </button>
            <div
              className="cat__menu"
            >
              <nav id="mobile-menu" style={{ display: "block" }}>
                <ul>
                  {uniqueBrand.map((detail) => (                 

                    <li>
                      <Link to={`/${detail.replace(/ +/g, "-").toLowerCase()}`} state={{brand:`${detail}`}}>{detail}</Link>
                    </li>
                   
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBrand;
