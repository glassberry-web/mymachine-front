import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MachineContent from '../Components/MachineContent'
import { fetchAsyncProducts } from '../Redux/products/productSlice';
import Pagination from '../Components/Pagination';

const Machines = () => {
  const dispatch = useDispatch();
  const productText = "Press";
  // const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncProducts(productText));
 
  }, [dispatch]);
  return (
    <>
    <MachineContent />
   
    </>
  )
}

export default Machines