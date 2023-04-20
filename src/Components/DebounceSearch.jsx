import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import Select from './Select'
import useDebounce from './useDebounce';
import { useDispatch } from "react-redux";
import { fetchAsyncProducts } from '../Redux/products/productSlice';
import {useNavigate} from 'react-router-dom';



const DebounceSearch = () => {
    const navigate = useNavigate();

    const [searchTerm,setSearchTerm] = useState('');
    const dispatch = useDispatch();
  const [data,setData] = useState([]);
  const debouceSearchTerm = useDebounce(searchTerm, 500);
//   useEffect(() => {
//     if(debouceSearchTerm) {
       
//       fetchProduct(debouceSearchTerm);
//     }else {
//       console.log('Something else')
//     }
//   },[debouceSearchTerm]) 

//   const fetchProduct = (debouceSearchTerm) => {
//     fetch(`http://localhost:5000/search/${debouceSearchTerm}`)
//     .then((res) => res.json())
//     .then((response) => {
//       console.log('Reponse', response);
//       setData(response)
//     })
//   }
  const submitHandler =(e)=>{
    e.preventDefault();
    if (debouceSearchTerm === "") return alert("Please enter search term!");
    dispatch(fetchAsyncProducts(debouceSearchTerm));
    // dispatch(fetchAsyncShows(term));
    setSearchTerm("");
    navigate(`/machines/${debouceSearchTerm}`)
    console.log("nav=>", navigate)
  }
  return ( 
    <>
     <div className="col-xl-7 col-lg-7 d-lg-block">
                  <div className="header__search">
                    <form onSubmit={submitHandler}>
                      <div className="header__search-box">
                        <input
                         value={searchTerm}
                         onChange={(e)=>setSearchTerm(e.target.value)}
                          className="search-input"
                          type="text"
                          placeholder="Search for products, brands and more"
                        />
                        <button className="button" type="submit">
                          <HiOutlineSearch style={{ fontSize: "30px" }} />
                        </button>
                      </div>
                      {/* <Select /> */}
                    </form>
                  </div>
                </div>
    </>
  )
}

export default DebounceSearch