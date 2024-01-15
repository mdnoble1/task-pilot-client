import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "http://localhost:5000/"
    // baseURL: "https://task-pilot-server-chi.vercel.app/"
}) 

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;