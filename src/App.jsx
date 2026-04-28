import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageTitle from "./components/PageTitle.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import HowItWorksPage from "./pages/HowItWorks.jsx";
import FAQs from "./pages/FAQs.jsx";
import SeasonInfo from "./pages/SeasonInfo.jsx";
import Stats from "./pages/Stats.jsx";
import Contact from "./pages/Contact.jsx";
import Partners from "./components/Partners.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/season-info" element={<SeasonInfo />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Partners />
    </>
  );
}

export default App;
