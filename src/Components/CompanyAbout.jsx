import React from 'react'
import SpeedoMeter from './SpeedoMeter'
import CountUp from 'react-countup';
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

const CompanyAbout = () => {
    const [data, setData] = useState([])
    const location = useLocation()
    const {id} = location.state

    const fetchData = () => {
        // fetch("http://15.207.31.23:5000/machinelisting")
        fetch("http://194.31.53.145:5000/machinelisting")  
        // fetch("http://194.31.53.145:5000/api/machinelisting")      

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
    return (
        <>
            <div className="container pt-60 respt30 mb-45">
                { data.length > 0 && (
                    data.map((item=>(
                        id === item._id ? (
                        <div className="row align-items-center">                   
                        
                     <div className="col-xl-6 col-lg-6 backalign resnone">
                         <div className="about-image w-img  wow slideInRight" data-wow-duration="2s">
                             <div className='row d-flex'>
                                 <div className='col-lg-6 col-6'>
                                     {/* <div class="ab-counter">
                                         <div class="counter-icon mr-10">
 
                                     </div>
                                     <div class="counter_info">
                                         {
                                          <CountUp   start={0} end={100} duration={4.75} suffix='+'class="counter"/>  
                                         }
                                       
                                         </div>
                                         </div> */}
                                     <SpeedoMeter title={"Machine " + "" + "Installed"} value ={item.machine}/>
                                 </div>
                                 <div className='col-lg-6 col-6'>
                                     <SpeedoMeter title={"Service " + "" + "Engineers"}  value ={item.engineer} />
                                 </div>
                             </div>
                             <div className='row d-flex'>
                                 <div className='col-lg-6 col-6'>
                                     <SpeedoMeter title={"Total " + "" + "Employees"}  value ={item.employees} />
                                 </div>
                                 <div className='col-lg-6 col-6'>
                                     <SpeedoMeter title={"Customer " + "" + "Served"} value ={item.customer} />
                                 </div>
                             </div>
                             {/* <SpeedoMeter /> */}
                         </div>
                     </div>
                     <div class="col-xl-6 col-lg-6"><div class="about-content rescen wow slideInLeft" data-wow-duration="2s"><span>{item.company_name}</span>
                     {/* <h4>Welcome to My Machine Store</h4> */}
                     <p class="about-text">{item.discription}</p>
                     </div>
                     </div> 
                     <div className="col-xl-6 col-lg-6 backalign disnone">
                         <div className="about-image w-img  wow slideInRight" data-wow-duration="2s">
                             <div className='row d-flex'>
                                 <div className='col-lg-6 col-6'>
                                     {/* <div class="ab-counter">
                                         <div class="counter-icon mr-10">
 
                                     </div>
                                     <div class="counter_info">
                                         {
                                          <CountUp   start={0} end={100} duration={4.75} suffix='+'class="counter"/>  
                                         }
                                       
                                         </div>
                                         </div> */}
                                     <SpeedoMeter title={"Machine " + "" + "Installed"} value ={item.machine}/>
                                 </div>
                                 <div className='col-lg-6 col-6'>
                                     <SpeedoMeter title={"Service " + "" + "Engineers"}  value ={item.engineer} />
                                 </div>
                             </div>
                             <div className='row d-flex'>
                                 <div className='col-lg-6 col-6'>
                                     <SpeedoMeter title={"Total " + "" + "Employees"}  value ={item.employees} />
                                 </div>
                                 <div className='col-lg-6 col-6'>
                                     <SpeedoMeter title={"Customer " + "" + "Served"} value ={item.customer} />
                                 </div>
                             </div>
                             {/* <SpeedoMeter /> */}
                         </div>
                     </div> 
                     </div>) : ""
                    )))
                    
                     )                 
                
          
            
              }
              </div> 
               
            

        </>
    );
}

export default CompanyAbout