import React,{useEffect, useState} from 'react'
import { Navigate,useLocation } from 'react-router-dom'
import type { ResType } from './detail.d'
import { imgAssets } from '../../helper/imgAssets';
import './detail.css'

export default function Detail() {
  const location = useLocation();
  const query = location.search;
  const [data,setData]=useState<ResType>()
    if (!query) {
    return <Navigate to="/" />;
    }
    useEffect(()=>setData(location.state),[])
  return (
    <div className='container'>
      <div className="container-detail">
        <div>
          <h1>{data?data.title:''}</h1>
          <p>{data?data.publishedAt:''}</p>
          <h4>{data?data.author:''}</h4>
        </div>
        <img src={imgAssets('')} alt="" />
        <p>{data?data.content:''}</p>
        <p>'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vel a nemo eius hic quam aspernatur? Sint veritatis sapiente laborum debitis sit consequatur, iste saepe id nostrum, maiores similique repellendus'</p>
        <p>{data?data.content:''}</p>
      </div>
    </div>
  )
}
