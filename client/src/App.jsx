import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      errorElement: <div className='text text-red-700'>Wrong URL!</div>
    },
    {
      path: '/about',
      element: <About/>,
      errorElement: <div className='text text-red-700'>Wrong URL!</div>
    },
    {
      path: '/profile',
      element: <Profile/>,
      errorElement: <div className='text text-red'>Wrong URL!</div>
    }
  ]);

  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
