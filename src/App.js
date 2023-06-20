import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage/HomePage";





function App() {
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          { /*<Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
  <Route path="/request" element={<RequestPage />} />*/}
        </Routes>

       {/* <GetUpdate />
        <Footer /> */}
      </Router>
    </>
  );
}

export default App;
