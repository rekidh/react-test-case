import React from 'react';
import Banner from '../../component/moleculs/banner/Banner'
import {Outlet,Navigate,useLocation } from 'react-router-dom';
import Content from '../../component/moleculs/content/Content';
import './home.css'

const Home = () => {
const path =useLocation()
if (path.pathname=='/'){
  return <Navigate to="/topics/business"/>
}

  return (
    <>
      <div className="container">
        <Banner/>
      </div>
      <Outlet/>
    </>
  )
};

export default Home;