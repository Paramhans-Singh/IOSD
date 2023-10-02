import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Sponsor from "./pages/Sponsor";
import Members from './pages/Members';
import Gallery from './pages/Gallery.jsx';
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
      path: '/members',
      element: <Members />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
    },
    {
      path: '/sponser',
      element: <Sponsor />,
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
