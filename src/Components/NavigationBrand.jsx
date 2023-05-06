import { GoThreeBars } from "react-icons/go";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBrand = () => {
  const [data, setData] = useState([])

  const fetchData = () => {
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
  const machineData = Object.values(data);
  let uniqueBrand = [...new Set(machineData.map((brand) => brand.brand))];
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
            >
              <GoThreeBars style={{ fontSize: "30px" }} /> Shop by Brands
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
