import React from 'react'
const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div
      className="tab-pane fade active show"
      id="engravingmachine"
      role="tabpanel"
      aria-labelledby="computer-tab"
    >
      {children}
    </div>
  ) : null;
};

export default TabContent

