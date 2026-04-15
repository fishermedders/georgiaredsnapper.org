import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import HowItWorksPage from "./pages/HowItWorks.jsx";
import FAQs from "./pages/FAQs.jsx";
import SeasonInfo from "./pages/SeasonInfo.jsx";
import Contact from "./pages/Contact.jsx";
import Partners from "./components/Partners.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/season-info" element={<SeasonInfo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Partners />
    </div>
  );
}

export default App;
