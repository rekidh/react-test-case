import React, { useEffect, useState }  from 'react'
import { Link ,useParams,useLocation } from 'react-router-dom';
import {newsApi} from '../../../api/newsApi';
import type {ResType} from './index'
import { imgAssets } from '../../../helper/imgAssets';
import './content.css'
import { Card,Button } from 'antd';
const { Meta } = Card;

export default function Content() {

  const [cardNews, setCardNews] = useState<ResType[]>([] as ResType[]);
  const [defaultImg,setDefaultImg] = useState('')
  const paramsId = useParams()
  //  console.log(paramsId,useLocation())
   const get = async ()  => {
    if(paramsId.id){
      await newsApi.getHeadLine({
      page:12,
      country:'id',
      category:paramsId?paramsId.id.toString():'general'
    })
      .then(response => response.data)
      .then(data=>{setCardNews(data.articles)
      })
      await setDefaultImg(imgAssets(paramsId.id?paramsId.id.toString():''))
    }else{
      await newsApi.getEverything('everything')
      .then(response => response.data)
      .then(data=>{setCardNews(data.articles)
      })
      await setDefaultImg(imgAssets(paramsId.id?paramsId.id.toString():''))
    }
  }
  useEffect(()=>{
    get()
  },[paramsId])
  return (
          <div className='container'>
          <h2>{paramsId.id?paramsId.id.toUpperCase():''}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            <div className='card-container'>
              {cardNews.map((news,key) =>(
                  <Card key={key}
                    hoverable
                    style={{ width: 400 }}
                    cover={
                    <img alt="example" 
                    src={news.urlToImage?news.urlToImage:defaultImg} 
                    className='.card-img'/>}
                  >
                    <div className='card-content'>
                        <span>{news.publishedAt}</span>
                        <Link to={news.url?news.url:''} target='to_blank'>
                          <h3>{news.author}</h3>
                        </Link>

                        <Link to={`/detail?title=${news.source?news.source.id:''}`} state={news}>
                          <p title={news.title}>{news.title}</p>
                        </Link>
                        
                      </div>
                  </Card>
                ))}
            </div>
      </div>
  )
}
