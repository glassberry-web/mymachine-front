import React from 'react'
// import { useState, useEffect } from 'react';

const ProDetailContent = (props) => {
    const {HTML} = props
    // const [data, setData] = useState([]);
    // const fetchData = () => {
    //     fetch("http://localhost:5000/fetch")
        
    //       .then(response => {
    //         console.log(response);
    //         return response.json()
    //       })
    //       .then(data => {
    //         setData(data)
    //       })
    //   }
    
    //   useEffect(() => {
    //     fetchData()
    //   }, [])
  return (
    <>
     {

<span dangerouslySetInnerHTML={{ __html: HTML}} className="product__details-des-wrapper">   
</span> 

            }
    
    </>
  )
}

export default ProDetailContent