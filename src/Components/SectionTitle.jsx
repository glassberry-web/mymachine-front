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
                <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist">
                  <TabPhills
                    title="Engraving Machine"
                    id="engravingmachine"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabPhills
                    title="Fiber Leaser Cutting Machines"
                    id="Fiber-Leaser-Cutting-Machines"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabPhills
                    title="Lease Hardining"
                    id="Lease-Hardining"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabPhills
                    title="Lease Welding Machine"
                    id="Lease-Welding-Machine"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabPhills
                    title="Leaser-Clading"
                    id="leaser-clading"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <TabPhills
                    title="Sheet Metal Foaming"
                    id="sheet-metal-foaming"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </ul>
              </div>
            ) : (
              <div className="button-wrap">
                <Link to={`${titles.link}`}>
                  {titles.See}{" "}
                  {titles.name === "Top Categories" ? "" : <FaChevronRight />}
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
