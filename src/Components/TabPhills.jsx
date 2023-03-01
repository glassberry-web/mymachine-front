import React, { useState } from 'react'
import { tabData } from './data'

const TabPhills = ({id, title, activeTab, setActiveTab}) => {
    // const [activeTab, setActiveTab] = useState("engravingmachine");
    const handleClick = () => {
        setActiveTab(id);
      };
  return (
    <>
      <div className="product__nav-tab">
              {/* <ul className="nav nav-tabs" id="flast-sell-tab" role="tablist"> */}
                
                    <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === id ? "active": "" }`}
                      // id="engravingmachine"
                      // data-bs-toggle="tab"
                      // data-bs-target="#engravingmachine"
                      type="button"
                      role="tab"                      
                      aria-selected="false"
                      onClick={handleClick}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    >
                     {title}
                    </button>
                  </li>  
                
                {/* <li className="nav-item" role="presentation">
                  <button
                    className={activeTab === idx ? "nav-link active": "" }
                    id="engravingmachine"
                    data-bs-toggle="tab"
                    data-bs-target="#engravingmachine"
                    type="button"
                    role="tab"
                    aria-controls="computer"
                    aria-selected="false"
                    onClick={()=>handleClick(id)}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  >
                    Engraving machine
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="samsung-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#samsung"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Fiber leaser cutting machines
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="htc-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#htc"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Lease hardining
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="nokia-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nokia"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Lease Welding machine
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="cell-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cell"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Leaser clading
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="sheet-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sheet-metal-foaming"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Sheet metal foaming
                  </button>
                </li> */}
              {/* </ul> */}
            </div>
    </>
  )
}

export default TabPhills