import React, { useState } from "react";

import Select from "./Select";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";
import { Button, Row, Col, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';

import NavigationBrand from "./NavigationBrand";
import NavigationList from "./NavigationList";
import PopupForm from "./PopupForm";
import { ToastContainer } from "react-toastify";
import DebounceSearch from "./DebounceSearch";
import { Link, Route } from "react-router-dom";



const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
    <>
      <header className="header d-blue-bg headerres">
        <div className="header-mid">
          <div className="container">
            <div className="heade-mid-inner">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="header__info">
                    <div className="logo">
                      <Link to="/" className="logo-image">
                        <img src="../assets/img/new/logo3.png" alt="logo" />
                      </Link>
                    </div>
                  </div>
                </div>

                <DebounceSearch />

                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 btnclass">
                  <a
                    href="#"
                    className="st-btn-3 b-radius"
                    data-bs-toggle="modal"
                    data-bs-target="#mymodal"
                    onClick={handleShow}
                  >
                    Trade Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <div className="row g-0 align-items-center">
              <NavigationBrand />
              <NavigationList />
              <div className="col-lg-2 col-md-6 col-9">
                <div className="header-action">
                  <div className="block-wishlist action">
                    <a className="icon-link" href="#">
                      <img src="assets/image/slider/compare-new.png" style={{width:"35px;"}} />
                      <span className="text mt-1">&nbsp;Compare</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* header responsive */}
      <header className="header d-blue-bg d-lg-none">
        <div className="header-mid">
          <div className="container">
            <div className="heade-mid-inner">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="header__info">
                    <div className="logo">
                      <a href="#" className="logo-image">
                        <img src="assets/image/logo-small.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-end"
                  style={{ marginTop: 12 }}
                >
                  <div className="block-wishlist action">
                    <a className="icon-link" href="#">
                      <img src="assets/image/slider/compare-new.png" />
                      <span className="text text-light">Compare</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <div className="row g-0 align-items-center">
              <DebounceSearch />
            </div>
          </div>
        </div>
      </header>
      {/* header responsive */}

      {/* <Modal size='lg' show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <ModalTitle className="modal_titleml">
                       My Machine Store
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={6} className='modmar'>
                            <img src="assets/image/slider/laser4.png" alt="d1" className="modal-img" />
                        </Col>
                        <Col md={6} className='rescen'>
                        <PopupForm o />
                        </Col>
                    </Row>
                    
                </ModalBody>
                 </Modal> */}
      <div className="header-fixed d-lg-none">
        <div className="blog-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3 pt-2 pb-2 text-center">
                <img src="assets/image/slider/category.png" />
                <Link to="/"><h6 className="text-light pt-1">Home</h6></Link>
                
              </div>
              <div className="col-3 pt-2 pb-2 text-center">
                <img src="assets/image/slider/brandicon.png" />
                <Link to="/Companies"><h6 className="text-light pt-1">Brands</h6></Link>
                
              </div>
              <div className="col-3 pt-2 pb-2 text-center">
                <img src="assets/image/slider/laundry.png" />
                <Link to="/machines"><h6 className="text-light pt-1">Machines</h6></Link>
              </div>
              <div className="col-3 pt-2 pb-2 text-center">
                <img src="assets/image/slider/form.png" />
                <a href="#" onClick={handleShow}>
                  <h6 className="text-light pt-1">Enquiry</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupForm show={show} onHide={handleClose} />

      <ToastContainer />
    </>
  );
};

export default Header;
