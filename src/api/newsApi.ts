import axios from 'axios'

const baseUrl ='https://newsapi.org/v2'
const apiKey = 'b77f1b29ea3743aeb73ced232201af0e'

const  headers={"Content-Type": "application/json"}

interface params{
   page: number,
   category:string,
   country:string,
}

export const  newsApi ={

   getHeadLine : (params:params)=>{
      return axios.get(`${baseUrl}/top-headlines`,{
           headers,
            params: { 
            country: params.country, 
            apiKey:apiKey,
            pageSize:params.page,
            category:params.category
            }
         })
   },
   getEverything : (params:string)=>{
      return axios.get(`${baseUrl}/everything`,{
            headers,
            params: { 
            // country: "id", 
            // sortBy:'popularity',
            apiKey:apiKey,
            // pageSize:12,
            q:params
            }
         })
   } 
}
