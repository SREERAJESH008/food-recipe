import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/nav"
import Home from "./components/home/home"


function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='home'><Navbar></Navbar>
     <Home></Home>
     </div>
  
  )
}

export default App;
