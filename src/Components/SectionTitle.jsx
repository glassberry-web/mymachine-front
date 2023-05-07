import React from "react";
import { Link } from "react-router-dom";
import {FaChevronRight } from "react-icons/fa";
import TabPhills from "./TabPhills";

const SectionTitle = (props) => {
    const { title ,activeTab, setActiveTab } = props;
    
  return (
    <>
      {title.map((titles) => (
        <div className="col-xl-12">
          <div className={`section__head ${titles.id===2 ? 'topcat':""} d-flex justify-content-between mb-30`}>
            <div className="section__title">
              <h5 className="st-titile ">{titles.name}</h5>
            </div>
            {titles.id === 2 ? (
              <div className="product__nav-tab">
                <ul className="nav nav-tabs flexcen" id="flast-sell-tab" role="tablist">
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
              <div className="button-wrap">
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
