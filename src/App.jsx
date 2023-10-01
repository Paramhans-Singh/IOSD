import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Sponsor from "./pages/Sponsor";
import Member from './pages/Member';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MantineProvider } from "@mantine/core";

const Layout=()=>{
  return (
       <>
        <Navbar/>
        <Footer/>
       </> 
  )
};

const router = createBrowserRouter([
  {
   path: '/',
   element: <Layout /> ,
   children: [
    {
      index: '/',
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
