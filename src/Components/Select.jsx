import React from "react";

const Select = () => {
  const data = [
    "All Categories",
    "Engraving machine",
    "Fiber leaser cutting machines",
    "Lease hardining",
    "Lease Welding machine",
    "Leaser clading"
  ];
  return (
    <>
      <div className="header__search-cat">
      <select className="selectt">
        {data.map((options) => (
          
            <option>{options}</option>          
        ))}
        </select>        
      </div>
    </>
  );
};

export default Select;
