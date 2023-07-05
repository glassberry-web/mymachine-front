import axios from "axios";
// const baseURL="https://my-machine-store-restapi.onrender.com"
// const baseURL = "http://localhost:5000/api"
// const baseURL = "http://15.207.31.23:5000"
const baseURL = "http://localhost:5000"

export default axios.create({ baseURL:  baseURL});