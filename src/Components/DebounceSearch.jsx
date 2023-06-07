import React, { useEffect, useState, useCallback } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import Select from './Select'
import useDebounce from './useDebounce';
import { getsearch, setSearchTerm, debouncedSearch } from '../Redux/products/productSlice';
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from '../Redux/products/productSlice';
import {useNavigate} from 'react-router-dom';
import debounce from 'lodash.debounce';
import Swal from 'sweetalert2'



const DebounceSearch = () => {
    const navigate = useNavigate();
    const { debsearch } = useSelector((state) => state.products);

    const [searchTerm,setSearchTerm] = useState('');
    const search = useSelector((state) => state.products.searchTerm);

    // const searchTerm = useSelector(getsearch);
    console.log("searchterm=>", searchTerm);
    const dispatch = useDispatch();
  const [data,setData] = useState([]);
  const debouceSearchTerm = useDebounce(searchTerm, 300);
  console.log("usedebounce=>", debouceSearchTerm);
  useEffect(() => {
    if(debouceSearchTerm) {
       
      fetchAsyncProducts (debouceSearchTerm);
    }else {
      console.log('Something else')
    }
  },[debouceSearchTerm]) 


//   const fetchProduct = (debouceSearchTerm) => {
//     fetch(`http://15.207.31.23:5000/search/${debouceSearchTerm}`)
//     .then((res) => res.json())
//     .then((response) => {
//       console.log('Reponse', response);
//       setData(response)
//     })
//   }

// const debouncedFetchData = useCallback(
//   debounce((value) => {
//     dispatch(fetchAsyncProducts(value));
//   }, 500), // debounce delay in milliseconds
//   [dispatch]
// );
 
   
// const handleInputChange = (event) => {
//   const value = event.target.value;
//   dispatch(setSearchTerm(value));
//   // debouncedFetchData(value.toLowerCase());
//   debouncedSearch(dispatch, value);

//     navigate(`/machines/${value.replace(/ +/g, "-")}`)
//     console.log("nav=>", navigate)
// };
 
  const submitHandler =(e)=>{
    e.preventDefault();
    if (debouceSearchTerm === "") return Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please enter product name, brand and more!',
     
    })
    dispatch(fetchAsyncProducts(debouceSearchTerm));
    // dispatch(fetchAsyncShows(term));
    setSearchTerm("");
    navigate(`/machines/${debouceSearchTerm.replace(/ +/g, "-")}`, {state: debouceSearchTerm})
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
                        //  onChange={handleInputChange}
                         onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())}
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