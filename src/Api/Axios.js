import axios from "axios";
// const baseURL="https://my-machine-store-restapi.onrender.com"
// const baseURL = "http://localhost:5001"
const baseURL = "http://15.206.68.236:5001"

export default axios.create({ baseURL:  baseURL});