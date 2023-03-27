import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { newsApi } from '../../../api/newsApi';

import type { ResType } from './index.d';

import images from '../../../assets/alex-marquez.jpeg'
import './banner.css'

const Banner = () => { 

  const [articles,setArticles] = useState<ResType[]>([] as ResType[])
  
  const get = async ()  => {
    await newsApi.getHeadLine({
      page:5,
      category:'general',
      country:'id'
    }).then(response =>setArticles(response.data.articles));
  }
  useEffect(()=>{
    get()
  },[])

  return(
    <Carousel autoplay speed={1000} autoplaySpeed={5000}>
      {articles.map((article, i) => (
        <div key={i} className='banner' >
          <img src={article.urlToImage?article.urlToImage:images} alt="" />
          <h3 className='content-style'>{article.title}</h3>
        </div>
      ))}

    </Carousel>
  )};

export default Banner;