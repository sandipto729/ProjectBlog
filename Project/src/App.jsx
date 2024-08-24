import { useState } from 'react'
import './App.css'
import CardFetch from "./layouts/cardFetch/cardFetch";
 // if layouts is in the same directory as the current file
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
    const Router=createBrowserRouter([
        {
            path:'/',
            element:<CardFetch/>
        }
    ])
  return (
    <>
      <RouterProvider router={Router} />
      
    </>
  )
}

export default App
