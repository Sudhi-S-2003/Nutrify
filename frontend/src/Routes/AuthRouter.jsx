import { Routes, Route } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import AuthFood from "../Auth/AuthFood";
import Track from "../Auth/Track";
import DashboardRouter from "../Routes/DashboardRouter";
import NotFound from "../Home/Page/NotFound";
import AuthCheck from "../Auth/AuthCheck"
function AuthRouter() {
  return (
    <>
      <Navbar />
      <div className="min-h-[63vh] mt-16 ">
        <Routes>
          <Route
            path="Track/:id"
            element={
              <AuthCheck>
                <Track />
              </AuthCheck>
            }
          />
          <Route
            path="Foods"
            element={
              <AuthCheck>
                <AuthFood />
              </AuthCheck>
            }
          />
          <Route
            path="Dashboard"
            element={
              <AuthCheck>
                <DashboardRouter />
              </AuthCheck>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default AuthRouter;
