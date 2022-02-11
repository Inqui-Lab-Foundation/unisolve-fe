import axios from "axios";

 const apiClient = () => {
     const {API_URL} = process.env;
     
     const axiosInstance = axios.create({
         baseURL:'https://jsonplaceholder.typicode.com/',
         responseType:"json",
     })
     return axiosInstance;
 }

 export default apiClient;