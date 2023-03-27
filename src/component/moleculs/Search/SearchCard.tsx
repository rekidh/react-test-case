import React, { useState } from 'react'
import { Card, Col, Row } from 'antd';
import './search.css'

export default function SearchCard() {

   const [data,setData]=useState([1,2,3,4,5,6,7,8,9,10,11])
  return (
    <div className='container display'>
      <div className="left">
         <Row gutter={16}>
         {  data.map((item, i) =>{
               return(
               <Col span={16} style={{margin:'1em'}}>
                  <Card title="Card title" bordered={false}>
                  Card content {item}
                  </Card>
               </Col>
               )
            })
         }
         </Row>
      </div>
      <div className="right">fffff</div>
    </div>
  )
}
