import axios from "axios";
const baseURL="https://my-machine-store-restapi.onrender.com"
export default axios.create({ baseURL:  baseURL});