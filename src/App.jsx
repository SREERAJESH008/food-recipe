import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/nav"
import Home from "./components/home/home"
import Explore from './components/explore/export'
import Footer from './components/footer/footer'
import Curosal from './components/curosal/curosal'
import Login from './components/login/login'





function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div className='home'><Navbar></Navbar><Curosal></Curosal>
     <Home></Home> <Explore></Explore> <Login></Login><Footer></Footer>
     </div>
  
  )
}

export default App;
