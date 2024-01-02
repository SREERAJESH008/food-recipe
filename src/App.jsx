import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/nav"
import Home from "./components/home/home"
import Explore from './components/explore/export'
import Footer from './components/footer/footer'
import Curosal from './components/curosal/curosal'
import Login from './components/login/login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";





function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
          
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <div className="home">
      <RouterProvider router={router} />
      <Navbar></Navbar>
      <Curosal></Curosal>
      <Home></Home> <Explore></Explore> <Login></Login>
      <Footer></Footer>
    </div>
  );
}
export default App;
