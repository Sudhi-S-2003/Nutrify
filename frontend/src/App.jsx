import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeRouter from './Routes/HomeRouter'
import AuthRouter from './Routes/AuthRouter'
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<HomeRouter />}  />
      <Route path="/Auth/*" element={<AuthRouter />} />
   
      </Routes>
      </BrowserRouter>
      <Toaster />
        </>
   
   
  )
}