import axios from "axios";

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


export const DatasApi = async (url: string) => {
    try {
       const response = await axios.get(url, options)
       return response.data
    } catch(erro) {
      
    }
}

