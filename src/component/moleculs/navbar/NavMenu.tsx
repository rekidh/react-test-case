import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu ,Input} from 'antd';
import './navMenu.css'
const { Search } = Input;

const items: MenuProps['items'] = [

  {
    label: (
       <Link to="/"  rel="noopener noreferrer">
       RD News.tv
       </Link>
    ),
    key: 'logo',
  },
  {
    label: <Link to={'topics/business'}>Business</Link> ,
    key: 'business',
  },
  {
    label: <Link to={'topics/science'}>Science</Link> ,
    key: 'science',
  },
  {
    label: <Link to={'topics/technology'}>Technology</Link> ,
    key: 'technology',
  },
  {
    label: <Link to={'topics/entertainment'}>Entertainment</Link> ,
    key: 'entertainment',
  },
  {
    label: <Link to={'topics/health'}>Health</Link> ,
    key: 'health',
  },

];
export default function NavMenu() {
  const [current, setCurrent] = useState('mail');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
      <div className='container-nav'>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
         <Search
         placeholder="input search text"
         onChange={(e)=>console.log(e.target.value)}
         style={{
            width: 400,
         }}
         />
      </div>
  )
}
