import axios, { AxiosResponse } from "axios";

const Key = process.env.NEXT_PUBLIC_API_URL

const options = {
  params: {
    language: 'pt-BR', 
  },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${Key}`  
  }
};

interface Cache {
  [url: string]: AxiosResponse;
}

const cache:Cache = {};
export const DatasApi = async (url: string) => {
    try {
      if (cache[url]) {
        return cache[url]
       }

       const response = await axios.get(url, options)
       cache[url] = response.data

       return response.data
    } catch(erro) {
      
    }
}

