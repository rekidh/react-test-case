import React from 'react';
import Banner from '../../component/moleculs/banner/Banner'
import {Outlet} from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <>
      <div className="container">
        <Banner/>
      </div>
      <div className='container'>
          <h2>Hot News</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
      </div>
      <Outlet/>

    </>
  )
};

export default Home;