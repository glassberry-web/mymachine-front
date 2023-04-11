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
import { setLatestShow } from '../Redux/products/PopupSlice';
import { getAllpopup, getLatestSelectedImage } from "../Redux/products/PopupSlice";

import {
  Button,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const LatestEnquiryForm = ({ show, onHide }) => {
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
  const LatestselectedImage = useSelector(getLatestSelectedImage);
  console.log("selectedimage", LatestselectedImage);
  const navigate = useNavigate();
  // console.log("ref=>", ref.current.value);
  
  const register = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // const productname = ref.current.value;
    // formData.append('productname', productname);
    // console.log("frm", formData);
    // const productname = ref.current.value;
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
          dispatch(setLatestShow(false));
          toast.success("Submitted Successfully !", {
            position: toast.POSITION.TOP_RIGHT,
          });

          
          submit ?
            setSubmit(false) : setSubmit(true)
        }
      } catch (error) {
        console.log("error===>", error);
      }
    }
  };

//   const fetchData = () => {
//     fetch("http://localhost:5000/fetch")

//       .then(response => {
//         console.log(response);
//         return response.json()
//       })
//       .then(data => {
//         setData(data)
//       })
//   }

  useEffect(() => {
    dispatch(fetchAsyncImages())
  }, [])
  const latest=popupimage.slice(0).sort((a,b)=>
  b.Publish_Date.localeCompare(a.Publish_Date));
  console.log("latest=>", latest);
  
  
  let renderpopup = latest?.map((detail, index) =>(
           LatestselectedImage === index ? (
            <Modal size="lg" show={show}>
            <ModalHeader closeButton onClick={() => dispatch(setLatestShow(false))}>
              <ModalTitle className="modal_titleml">My Machine Store</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col md={6} className="modmar">
                  <img
                    src={`https://my-machine-store-dashboardapi.onrender.com/${detail.image}`}
                    alt="d1"
                    className="modal-img"
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
 
  return (
    <>
      {renderpopup}


    </>
  );
};
export default LatestEnquiryForm;
