import Layout from './component/layout';
import Detail from './pages/Detail';
import Content from './component/moleculs/content/Content';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import Home from './pages/Home/Home';

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

 