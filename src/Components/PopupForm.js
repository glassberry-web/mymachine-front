import React from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Trade_Enquiry } from "../Api/ApiEndpoint";
import { useNavigate } from "react-router-dom";
import Axios from "../Api/Axios";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";
import {
  Button,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const PopupForm = ({show, setShow, onHide}) => {
  

  // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    const [submit, setSubmit] = useState(false)
  const [inputFeild, setInputFeild] = useState({
    name: "",
    location: "",
    email: "",
    phoneNo: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputFeild({ ...inputFeild, [name]: value });
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
  const navigate = useNavigate();
  const register = async () => {
    const config = {
      headers: {
        // "Content-Type": "multipart/form-data"
        "Content-Type": "application/json",
      },
    };
    const { name, location, email, phoneNo } = inputFeild;
    if (name && location && email && phoneNo) {
      try {
        let res = await Axios.post(Trade_Enquiry, inputFeild, config);
        if (res.status === 200) {
          console.log("added succesfully");
          toast.success("Submitted Successfully !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setShow(false)
          setInputFeild('')
          navigate("/");
          // submit? 
          // setSubmit(false ) : setSubmit(true )
        }
      } catch (error) {
        console.log("error===>", error);
      }
    }
  };

  // const handleSubmit =  async(e)=>{

  //   e.preventDefault();

  //   const formdata = new FormData();
  //   formdata.append('myFile', inputFeild.myFile, inputFeild.myFile.name)
  //   formdata.append("name", inputFeild.name )
  //   formdata.append("location", inputFeild.location )
  //   formdata.append("email", inputFeild.email )
  //   formdata.append("phoneNo", inputFeild.phoneNo )
  //   console.log(formdata)
  //   const config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //       "Content-Type": "application/json"
  //     }
  //   }

  //   try{
  //     let res = await Axios.post(Trade_Enquiry, inputFeild, config)
  //     if(res.status===200){
  //       console.log('added succesfully')
  //       navigate("/");
  //     }
  //   }catch (error) {
  //     console.log("error===>", error);
  //   }
  // }

  return (
    <>
    {
        
        (
          <Modal size="lg" show={show}>
         <ModalHeader closeButton onClick={onHide}>
           <ModalTitle className="modal_titleml">My Machine Store</ModalTitle>
         </ModalHeader>
         <ModalBody>
           <Row>
             <Col md={6} className="modmar">
               <img
                 src="assets/image/slider/laser4.png"
                 alt="d1"
                 className="modal-img"
               />
             </Col>
             <Col md={6} className="rescen">
               <Form className="text-center formpt" onSubmit={register}>
                 <FormGroup>
                   <FormControl
                     id="name"
                     name="name"
                     className="madalform1 boxinp"
                     type="text"
                     placeholder="Name"
                     onChange={inputHandler}
                     value={inputFeild.name}
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
                     id="phoneNo"
                     name="phoneNo"
                     value={inputFeild.phoneNo}
                     className="madalform1 boxinp"
                     type="text"
                     placeholder="Phone No"
                     onChange={inputHandler}
                     required
                   />
                 </FormGroup>
                 <Button onClick={register} className="tp-in-btn">
                   Register
                 </Button>
               </Form>
             </Col>
           </Row>
         </ModalBody>
      </Modal>
        ) 
      
    }
    
      
    </>
  );
};
export default PopupForm;
