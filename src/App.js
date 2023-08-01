import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AdminPage from "./Pages/HomePage/AdminPage";
import CustomerPage from "./Pages/HomePage/CustomerPage";
import SignUp from "./Pages/HomePage/SignUp";
import Signin from "./Pages/HomePage/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<CustomerPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />

          { /*
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
  <Route path="/request" element={<RequestPage />} />*/}
        </Routes>

       {/* <GetUpdate /> */}
       
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
