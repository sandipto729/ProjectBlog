import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './pages/cardFetch/CardFetch';
import BlogDetails from './pages/Blog/BlogDetails';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import Login from './Authentication/LoginForm/Login';
import Profilepage from './pages/Profile/Profilepage';
import Slider from './layouts/Navbar/Slider';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <>
        <Navbar/>
        <Slider/>
      </>
      
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/blog',
      element: <Blog/>,
    },
    {
      path:'/profile',
      element:<Profilepage/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
