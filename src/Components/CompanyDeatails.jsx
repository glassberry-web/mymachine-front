import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SpeedoMeter from './SpeedoMeter'
import CompanyAbout from './CompanyAbout'
import PageBanner from './PageBanner'
 import ReleatedProducts from "./RelatedProducts"
import RelatedProducts from './RelatedProducts'

const CompanyDeatails = () => {
    const location = useLocation()
    const {id,  namee} = location.state
    console.log("Avii==>", id);
    console.log("comdetailmain=>", namee);
    const [data, setData] = useState([])

    const fetchData = () => {
        // fetch("http://15.207.31.23:5000/companyproducts")
        fetch("https://api.mymachinestore.com/companyproducts")
        // fetch("https://api.mymachinestore.com/api/companyproducts")

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
     <PageBanner background="url(../assets/img/new/p_bg2.jpg)" title={namee} info = "Home" />
    <CompanyAbout />     
      <RelatedProducts />
           
    </>
  )
}

export default CompanyDeatails