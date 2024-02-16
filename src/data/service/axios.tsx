import axios from "axios";

const Key = process.env.NEXT_PUBLIC_API_URL


const axiosInstancia = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${Key}`  
    },

})

export default axiosInstancia