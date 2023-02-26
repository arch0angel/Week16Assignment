import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { HousesList } from './components/HousesList'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NavbarComp from './components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => {
  return(
    <>
    <NavbarComp/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        path: '/home',
        element: <Home/>
      },

      {
        path: "/about",
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

class App extends Component {
  render() {
    return(
      <div>
        <HousesList />
      </div>
    )
  }
}

export default App;