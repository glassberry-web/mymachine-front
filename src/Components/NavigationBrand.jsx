import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBrand = () => {
  const unordered = [
    "HSG",
    "Alfexlaser",
    "G30",
    "GCC Technologies",
    "Laser Technologies",
  ];
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
              className={
                toggle ? "cat__menu brand-block" : "cat__menu brand-none"
              }
            >
              <nav id="mobile-menu" style={{ display: "block" }}>
                <ul>
                  {unordered.map((list) => (
                    <li>
                      <a href="/something">{list}</a>
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
