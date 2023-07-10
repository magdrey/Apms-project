import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AdminPage from "./Pages/HomePage/AdminPage";





function App() {
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          { /*
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
  <Route path="/request" element={<RequestPage />} />*/}
        </Routes>

       {/* <GetUpdate /> */}
        
      </Router>
    </>
  );
}

export default App;
