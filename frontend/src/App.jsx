import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeRouter from './Routes/HomeRouter'
import DashboardRouter from './Routes/DashboardRouter'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<HomeRouter />}  />
      <Route path="/dashboard/*" element={<DashboardRouter />} />
      </Routes>
      </BrowserRouter>
    
        </>
   
   
  )
}