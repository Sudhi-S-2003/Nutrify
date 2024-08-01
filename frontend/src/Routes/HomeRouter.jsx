import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Home/Page/Home'
import Food from '../Home/Page/Food'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import About from '../Home/Page/About'
import Contact from '../Home/Contact'
function HomeRouter() {
  return (
    <>
      <Navbar />
      <div className='min-h-[63vh] mt-20'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
            <Route path="Foods" element={<Food />} />
            
            <Route path='*'/>
        </Routes>
        </div>
        <Footer/>
    </>
  )
}

export default HomeRouter