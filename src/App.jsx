import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import EducationPage from "./pages/EducationPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Navbar />
      
      <div className="pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
        <Footer/>
    </Router>
  );
}

export default App;
