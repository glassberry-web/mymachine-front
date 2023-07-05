import React, { useEffect, useState } from 'react'
import Application_detailcontent from './Application_detailcontent'
import {useLocation} from "react-router-dom";
import DOMPurify from 'isomorphic-dompurify';

const Application_detail = () => {
    const [subdata, setSubData] = useState([])
    const location = useLocation();
    const { namee } = location.state;
    const fetchData = () => {
        // fetch("http://localhost:5000/api/getapplication")
        fetch("http://localhost:5000/getapplication")
    
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
    <div
        className="about-area pt-80 pb-80 respad" 
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
            {subdata?.map((app, idx) => (
                app.application_name === namee ? (
                 <div key={app._id} className="row">
                 <div className="col-xl-6 col-lg-6 ">
                   <div
                     className="about-image w-img  wow slideInRight"
                     data-wow-duration="2s"
                   >
                     <img className='appimg' src={app.application_image} alt={app.application_name} />
                   </div>
                 </div>
                 <div className="col-xl-6 col-lg-6">
                   <div
                     className="about-content wow slideInLeft"
                     data-wow-duration="2s"
                   >
                     <span>{app.application_name}</span>
                     <h4>{app.application_subtitle}</h4>
                     <p className='app_p'>
                       {app.application_shortdiscription}
                     </p>
                     
                    
                    
                   </div>
                 </div>
                 <div className='row mt-45'>
                 <div className="col-xl-12 col-lg-12">
                    <h2>Application Details</h2>
                    <Application_detailcontent  HTML = {
                               DOMPurify.sanitize(app.application_content)} />
                    
                 </div>
                 </div>
               </div> 
               ): ""
            ))}
         
        </div>
      </div>
   </>
  )
}

export default Application_detail