import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Navbar from '../src/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Sponser from "./pages/Sponser";
import Member from './pages/Member';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


const router = createBrowserRouter([
  {
   path: '/',
   element: <Navbar /> ,
   children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/team',
      element: <Team />,
    },
    {
      path: '/events',
      element: <Events />,
    },
    {
      path: '/member',
      element: <Member />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/sponser',
      element: <Sponser />,
    },
   ]
  }
]);


function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
