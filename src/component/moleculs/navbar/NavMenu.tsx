import React,{ useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu ,Input} from 'antd';
import { newsApi } from '../../../api/newsApi';
import './navMenu.css'
const { Search } = Input;

const items: MenuProps['items'] = [

  {
    label: (
      <h3>
        RD News.tv
      </h3>
    ),
    key: 'logo',
  },
  {
    label: <Link to={'topics/business'}> <p>Business</p> </Link> ,
    key: 'business',
  },
  {
    label: <Link to={'topics/science'}> <p>Science</p></Link> ,
    key: 'science',
  },
  {
    label: <Link to={'topics/technology'}><p>Technology</p></Link> ,
    key: 'technology',
  },
  {
    label: <Link to={'topics/entertainment'}><p>Entertainment</p></Link> ,
    key: 'entertainment',
  },
  {
    label: <Link to={'topics/health'}><p>Health</p></Link> ,
    key: 'health',
  },

];
export default function NavMenu() {

  const navigate = useNavigate()
  const handleSearchClick=()=>{
    navigate('/news/search', {replace: true})
  }
  const handleSearch=(e:any)=>{
    console.log(e.target.value)
  }
  return (
      <div className='container-nav'>
        <Menu  mode="horizontal" items={items} />
         <Search
         placeholder="input search text"
         onChange={handleSearch}
         style={{
            width: 400,
         }}
         onClick={handleSearchClick}
         />
      </div>
  )
}
