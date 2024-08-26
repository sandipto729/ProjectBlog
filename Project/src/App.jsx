import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './layouts/cardFetch/CardFetch';
import BlogDetails from './layouts/Blog/BlogDetails';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import Login from './layouts/LoginForm/Login';
import Profilepage from './layouts/Profile/Profilepage';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <>
        <Login/>
      </>
      
    },
    {
      path:'/profile',
      element:<Profilepage/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
