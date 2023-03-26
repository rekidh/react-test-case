import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { Link ,useParams} from 'react-router-dom';

import type {ResType} from './index'

import { Card } from 'antd';
const { Meta } = Card;

export default function Content() {

  const [cardNews, setCardNews] = useState<ResType[]>([] as ResType[]);
   const params = useParams()
   
   const get = async ()  => {
    await axios.get('https://newsapi.org/v2/top-headlines',{
      params: { 
        country: "id", 
        apiKey: '1795b94d26114a2d9dabb6eadbbd8593' ,
        pageSize:12,
        category:params?params:''
      },
    }).then(response =>{
      console.log(response.data)
      setCardNews(response.data.articles)
   });
  }
  useEffect(()=>{
    get()
  },[])
  return (
      <div className='card-container'>
        {cardNews.map((news,key) =>(
            <Card key={key}
              hoverable
              style={{ width: 400 }}
              cover={
              <img alt="example" 
              src={news.urlToImage?news.urlToImage:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} 
              style={{maxWidth:400,maxHeight:250,objectFit:'cover'}}/>}
            >
              <div className="card-list__card-body">
                  <span>{news.publishedAt}</span>
                  <Link to={`/detail?title=${news.title}`} state={news}>
                    <h3 title={news.title}>{news.title}</h3>
                  </Link>
                </div>
            </Card>
          ))}
      </div>
  )
}
