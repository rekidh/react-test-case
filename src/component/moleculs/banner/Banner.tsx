import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import axios from 'axios';
// import images from '../../../../public/assets/alex-marquez.jpeg'
import './banner.css'


interface Article{
  author?:string,
  content?:string,
  description?:string,
  publishedAt?:string
  source?:{
    id?:string,
    name?:string
  },
  title?:string,
  url?:string,
  urlToImage?:string
}[]
const Banner = () => { 

  const [articles,setArticles] = useState<Article[]>([] as Article[])
  
  const get = async ()  => {
    await axios.get('https://newsapi.org/v2/top-headlines',{
      params: { 
        country: "id", 
        apiKey: '1795b94d26114a2d9dabb6eadbbd8593',
        pageSize: 5,
      },
    }).then(response =>setArticles(response.data.articles));
  }
  useEffect(()=>{
    get()
  },[])

  return(
    <Carousel autoplay >
      {articles.map((item, i) => (
        <div key={i} style={{background:`url("http://localhost:3000/assets/alex-marquez.jpeg")`}} >
          <h3 className='content-style'>{item.title}</h3>
        </div>
      ))}

    </Carousel>
  )};

export default Banner;