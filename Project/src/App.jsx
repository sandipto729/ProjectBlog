// App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import CardFEtch from './layouts/cardFetch/cardFetch'
import CardFetch from './layouts/cardFetch/cardFetch';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          {/* <HomePage /> */}
          <CardFetch/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
