import React, { useState } from 'react'
import { Button, Row, Col, Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import PopupForm from './PopupForm';

const Homecta = () => {
  const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
   <>
     <div className="p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-banner-content text-center">
              <img src='assets/img/new/slidertrad.jpg' className='w-100 resnone' />
              <img src='assets/img/new/restrade.png' className='w-100 disnone' />
              {/* <h4 className="breadcrumb-title visually-hidden">Newest machine for sale on the marketplace</h4>
              <p className="parallax visually-hidden">Our very human specialists work behind the scenes to ensure that buyers find the exact machinery they’re looking for and sellers get the serious, qualified leads they want, in sectors ranging from wood, metal and plastic to print, packaging, food, textile and pharma, just to name a few.The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p> */}
              <div className="banner-buttond-sm-block absp">
                <a  className="st-btn-3 b-radius ctabtn" onClick={handleShow}>Trade Enquiry</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal size='lg' show={show} onHide={handleClose}>
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
                        <PopupForm />
                        </Col>
                    </Row>
                    
                </ModalBody>
                 </Modal>
                 <PopupForm show={show} setShow={setShow} onHide={handleClose}/>
   </>
   
  )
}

export default Homecta