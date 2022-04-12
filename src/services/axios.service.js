import axios from "axios";
import baseURL from "../constsnts/urls";

const axiosService = axios.create({baseURL});

export {axiosService};