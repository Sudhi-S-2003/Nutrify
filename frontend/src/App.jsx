import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeRouter from './Routes/HomeRouter'
import AuthRouter from './Routes/AuthRouter'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<HomeRouter />}  />
      <Route path="/Auth/*" element={<AuthRouter />} />
   
      </Routes>
      </BrowserRouter>
    
        </>
   
   
  )
}