import React from 'react'
import { RxDotFilled } from 'react-icons/rx'
import PageBanner from '../Components/PageBanner'
import Application_detail from '../Components/Application_detail';
import { useLocation } from 'react-router-dom';

const Applications = () => {
  const location = useLocation();
  const { id, namee } = location.state;
  return (
    <>
      <PageBanner background="black" title={namee} info="Home" />
     <Application_detail />   
    </>
  );
}

export default Applications