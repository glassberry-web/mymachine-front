import React from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Trade_Enquiry } from "../Api/ApiEndpoint";
import { useNavigate } from "react-router-dom";
import Axios from "../Api/Axios";
import { useState, useEffect } from "react";
import axios from "axios";

const PopupForm = () => {
  const [inputFeild, setInputFeild] = useState({
    name:'',
    location:'',
    email:'',
    phoneNo:'',
    
  })
  const inputHandler=(e)=>{
    setInputFeild({...inputFeild, [e.target.name]: e.target.value})
  }
  const handleFileUpload = (event) =>{
    setInputFeild({...inputFeild, myFile: event.target.files[0]})
 }
  // const [errFeild, setErrFeild] = useState({
  //   name:'',
  //   location:'',
  //   email:'',
  //   phoneNo:'',
  //   image:''
  // })
  const navigate = useNavigate();

  const handleSubmit =  async(e)=>{
    e.preventDefault();
    const formdata = new FormData();
    // formdata.append('myFile', inputFeild.myFile, inputFeild.myFile.name)
    formdata.append("name", inputFeild.name )
    formdata.append("location", inputFeild.location )
    formdata.append("email", inputFeild.email )
    formdata.append("phoneNo", inputFeild.phoneNo )
    console.log(formdata)
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    try{
      let res= await Axios.post(Trade_Enquiry, formdata,
        config)
      if(res.status===200){
        console.log('added succesfully')
        navigate("/");
      }
    }catch (error) {
      console.log("error===>", error);
    }
  } 

 

    return (
      <>
        <Form className="text-center formpt" onSubmit={handleSubmit}>
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
              id="form_email"
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
              id="phone"
              name="PhoneNo"
              className="madalform1 boxinp"
              type="tel"
              placeholder="Phone No"
              onChange={inputHandler}
              value={inputFeild.phoneNo}
              
              // {...register("PhoneNo", {
              //   required: true,
              // })}
            />
            {/* {errors.PhoneNo?.type === "required" && (
              <p role="alert" id="error">
                Enter your valid Phone number
              </p>
            )} */}
          </FormGroup>
          {/* <FormControl
             type='file'
             lable="image"
              name="myFile"
              id='myFile'
              accept='.jpeg,.png,jpg'
              onChange={ handleFileUpload}
              {...register("myFile", {
                required: true,
              })}
          >
            

          </FormControl>
          <FormGroup>

          </FormGroup> */}
          <Button className="tp-in-btn" type="submit">
            Register
          </Button>{" "}
        </Form>       
      </>
    );  
};
export default PopupForm
