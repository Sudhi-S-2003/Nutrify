import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Home/Page/Home'
import Food from '../Home/Page/Food'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import About from '../Home/Page/About'
import Contact from '../Home/Contact'
import Login from '../Home/Page/Login'
import Signup from '../Home/Page/Signup'
import { useState } from "react";
import NotFound from '../Home/Page/NotFound'
function HomeRouter() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <>
      <Navbar />
      <div className='min-h-[63vh] mt-16 pt-2'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
            {
              !token && (
                <Route path="Foods" element={<Food />} />
              )

            }
          
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup/>} />

            
            
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        </div>
        <Footer/>
    </>
  )
}

export default HomeRouter