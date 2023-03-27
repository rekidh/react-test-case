import Layout from './component/layout';
import Detail from './pages/Detail/Detail';
import Content from './component/moleculs/content/Content';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import Home from './pages/Home/Home';
import SearchCard from './component/moleculs/Search/SearchCard';
export default function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
          children: [
            {
              path: '/topics/:id',
              element:<Content/> ,
            },
          ]
        },
        {
          path: '/detail',
          element: <Detail />,
        },
        {
          path: '/news/search',
          element: <SearchCard />,
        },
        {
          path: '/*',
          element: <h1 className='container'>404</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

 