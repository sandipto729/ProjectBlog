import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './layouts/cardFetch/CardFetch';
import BlogDetails from './layouts/Blog/BlogDetails';
import Navbar from './layouts/Navbar/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/>,
    },
    {
      path: '/blog/:id',
      element: <BlogDetails />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
