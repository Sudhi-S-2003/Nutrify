import { Routes, Route } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import AuthFood from "../Auth/AuthFood";
import Track from "../Auth/Track";
import DashboardRouter from "../Routes/DashboardRouter";

function AuthRouter() {
  return (
    <>
      <Navbar />
      <div className="min-h-[63vh] mt-15 ">
        <Routes>
          <Route path="Track/:id" element={<Track />} />
          <Route path="Foods" element={<AuthFood />} />
          <Route path="Dashboard"element={<DashboardRouter/>} />
          <Route path="*" />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default AuthRouter;
