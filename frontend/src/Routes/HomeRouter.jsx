import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Home/Page/Home'
import Food from '../Home/Page/Food'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
function HomeRouter() {
  return (
    <div>
      <Navbar />
      <div className='min-h-[63vh]'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="foods" element={<Food />} />
        </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default HomeRouter