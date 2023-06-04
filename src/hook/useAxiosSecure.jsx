import  { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-liart.vercel.app',
   });

const useAxiosSecure = () => {
   const {logOutUser} = useContext(AuthContext);
   const navigate = useNavigate();

   
   useEffect(() => {
    axiosSecure.interceptors.request.use((config) =>{
        const token = localStorage.getItem('access_token');
        if(token){
            config.headers.Authorization = `bearer ${token}`;
        
        }
        return config;
    });
    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error)=> {
            if(error.response && (error.response.status === 401 || error.response.status === 403)){
                await logOutUser();
                navigate('/login')
            }
            return Promise.reject(error);
        }
    );
   }, [logOutUser, navigate]);

   return [axiosSecure];
};

export default useAxiosSecure;