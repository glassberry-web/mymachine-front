import React from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Trade_Enquiry, User_Enquiry } from "../Api/ApiEndpoint";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "../Api/Axios";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";
import { fetchAsyncImages, getpopup } from '../Redux/products/PopupSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setShow } from '../Redux/products/PopupSlice';
import { getAllpopup, getSelectedImage } from "../Redux/products/PopupSlice";
import Swal from "sweetalert2";

import {
  Button,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const ProductEnquiryForm = ({ show, onHide }) => {
  console.log("popup2=>", show);

  //  const location = useLocation();
  //  const {id} = location.state
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
  const [submit, setSubmit] = useState(false)
  const [data, setData] = useState([])
  const ref = useRef(null)
  const popupimage = useSelector(getAllpopup);
  
  const [inputFeild, setInputFeild] = useState({
    product_name: "",
    email: "",
    phone_number: "",
    location: "",
    
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    const updateValues = {product_name:ref.current.value, [name]: value }
    // setInputFeild({ ...inputFeild, [name]: value });
    setInputFeild((pre)=>({...pre, ...updateValues}));
  };
  //   const handleFileUpload = (event) =>{
  //     setInputFeild({...inputFeild, myFile: event.target.files[0]})
  //  }
  // const [errFeild, setErrFeild] = useState({
  //   name:'',
  //   location:'',
  //   email:'',
  //   phoneNo:'',
  //   image:''
  // })
  const dispatch = useDispatch();
  
  console.log("imagepopup", popupimage);
  const selectedImage = useSelector(getSelectedImage);
  console.log("selectedimage", selectedImage);
  const navigate = useNavigate();
  
  const register = async (e) => {
    e.preventDefault();   
    console.log("inputfeild=>", inputFeild);
    // console.log("ref=>",productname );
    const config = {
      headers: {
        // "Content-Type": "multipart/form-data"
        "Content-Type": "application/json",
      },
    };
    const { product_name,  email, phone_number, location } = inputFeild;

    if ( product_name && email && phone_number && location) {
      try {
        let res = await Axios.post(User_Enquiry, inputFeild, config);
        if (res.status === 200) {
          console.log("added succesfully");
          // navigate("/about");
          dispatch(setShow(false));
          // toast.success("Submitted Successfully !", {
          //   position: toast.POSITION.TOP_RIGHT,
          // });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Thank you for reaching out to us. We appreciate your enquiry for <br/><strong>${product_name}</strong>.<br/> We will make sure to respond to you as soon as possible.`,
            showConfirmButton: false,
            timer: 7500,
            customClass: {
              title: 'swal2-title-custom' // Custom CSS class for the title
            },
           
          })

          
          submit ?
            setSubmit(false) : setSubmit(true)
        }
      } catch (error) {
        console.log("error===>", error);
      }
    }
    setInputFeild("");
  };
  useEffect(() => {
    dispatch(fetchAsyncImages())
  }, [])
 
  let renderpopup = popupimage?.map((detail, index) =>(
           selectedImage === index ? (
            <Modal size="lg" show={show}>
            <ModalHeader closeButton onClick={() => dispatch(setShow(false))}>
              <ModalTitle className="modal_titleml">My Machine Store</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col md={6} className="modmar">
                  {/* <img
                    src={`http://my-machine-store-dashboardapi.onrender.com/${detail.image}`}
                    alt="d1"
                    className="modal-img"
                  /> */}
                  <img
                    src={detail.image}
                    alt="d1"
                    className="modal-img pimg"
                  />
                </Col>
                <Col md={6} className="rescen">
                  <Form className="text-center formpt" onSubmit={register}>
                    <FormGroup>
                      <FormControl
                        id="product_name"
                        name="product_name"
                        className="madalform1 boxinp visually-hidden"
                        type="text"
                        placeholder="product_name"
                        ref={ref}
                        onChange={inputHandler}                       
                        defaultValue={detail?.product_name}
                       
                        required
                      // {...register("name", {
                      //   required: true,
                      // })}
                      />

                      {/* {errors.name?.type === "required" && (
             <p role="alert" id="error">
               Enter your location
             </p>
           )} */}
                    </FormGroup>                   
                    <FormGroup className="my-3">
                      <FormControl
                        id="email"
                        name="email"
                        className="madalform1 boxinp"
                        type="text"
                        placeholder="Email Id"
                        onChange={inputHandler}
                        value={inputFeild.email}
                        required
                      // {...register("email", {
                      //   required: true,
                      //   pattern: {
                      //     value:
                      //       /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
                      //   },
                      // })}
                      />
                      {/* {errors.email?.type === "required" && (
             <p role="alert" id="error">
               Enter your valid Email
             </p>
           )} */}
                    </FormGroup>
                    <FormGroup className="my-3">
                      <FormControl
                        id="phone_number"
                        name="phone_number"
                        value={inputFeild.phone_number}
                        className="madalform1 boxinp"
                        type="text"
                        placeholder="phone_number"
                        onChange={inputHandler}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="my-3">
                      <FormControl
                        id="location"
                        name="location"
                        className="madalform1 boxinp"
                        type="location"
                        placeholder="location"
                        onChange={inputHandler}
                        value={inputFeild.location}
                        required
                      // {...register("location", {
                      //   required: true,
                      // })}
                      />
                      {/* {errors.location?.type === "required" && (
             <p role="alert" id="error">
               Enter your location
             </p>
           )} */}
                    </FormGroup>
                    <Button onClick={register} className="tp-in-btn">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </ModalBody>
    </Modal>
           ) : ""
  ))
  // let renderpopup = selectedImage !== null ? (
  //   image = popupimage[selectedImage] ? (
  //     <Modal size="lg" show={show}>
  //     <ModalHeader closeButton onClick={() => dispatch(setShow(false))}>
  //       <ModalTitle className="modal_titleml">My Machine Store</ModalTitle>
  //     </ModalHeader>
  //     <ModalBody>
  //       <Row>
  //         <Col md={6} className="modmar">
  //           <img
  //             src={`http://15.207.31.23:5001/${image.image}`}
  //             alt="d1"
  //             className="modal-img"
  //           />
  //         </Col>
  //         <Col md={6} className="rescen">
  //           <Form className="text-center formpt" onSubmit={register}>
  //             <FormGroup>
  //               <FormControl
  //                 id="name"
  //                 name="name"
  //                 className="madalform1 boxinp"
  //                 type="text"
  //                 placeholder="Name"
  //                 onChange={inputHandler}
  //                 value={inputFeild.name}
  //                 required
  //               // {...register("name", {
  //               //   required: true,
  //               // })}
  //               />
  
  //               {/* {errors.name?.type === "required" && (
  //      <p role="alert" id="error">
  //        Enter your location
  //      </p>
  //    )} */}
  //             </FormGroup>
  //             <FormGroup className="my-3">
  //               <FormControl
  //                 id="location"
  //                 name="location"
  //                 className="madalform1 boxinp"
  //                 type="location"
  //                 placeholder="location"
  //                 onChange={inputHandler}
  //                 value={inputFeild.location}
  //                 required
  //               // {...register("location", {
  //               //   required: true,
  //               // })}
  //               />
  //               {/* {errors.location?.type === "required" && (
  //      <p role="alert" id="error">
  //        Enter your location
  //      </p>
  //    )} */}
  //             </FormGroup>
  //             <FormGroup className="my-3">
  //               <FormControl
  //                 id="email"
  //                 name="email"
  //                 className="madalform1 boxinp"
  //                 type="text"
  //                 placeholder="Email Id"
  //                 onChange={inputHandler}
  //                 value={inputFeild.email}
  //                 required
  //               // {...register("email", {
  //               //   required: true,
  //               //   pattern: {
  //               //     value:
  //               //       /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
  //               //   },
  //               // })}
  //               />
  //               {/* {errors.email?.type === "required" && (
  //      <p role="alert" id="error">
  //        Enter your valid Email
  //      </p>
  //    )} */}
  //             </FormGroup>
  //             <FormGroup className="my-3">
  //               <FormControl
  //                 id="phoneNo"
  //                 name="phoneNo"
  //                 value={inputFeild.phoneNo}
  //                 className="madalform1 boxinp"
  //                 type="text"
  //                 placeholder="Phone No"
  //                 onChange={inputHandler}
  //                 required
  //               />
  //             </FormGroup>
  //             <Button onClick={register} className="tp-in-btn">
  //               Submit
  //             </Button>
  //           </Form>
  //         </Col>
  //       </Row>
  //     </ModalBody>
  //    </Modal>
  //   ) :''
   
  // ) : ""
 

  return (
    <>
      {renderpopup}


    </>
  );
};
export default ProductEnquiryForm;
