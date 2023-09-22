
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Strategiai from "./pages/Strategiai"
import Implementacio from "./pages/Implementacio"
import Technologiai from "./pages/Technologiai"
import Rendszeruzemeltetes from "./pages/Rendszeruzemeltetes"
import Alkalmazas from "./pages/Alkalmazas"
import Projektmenedzsment from "./pages/Projektmenedzsment"
import Page404 from "./pages/Page404"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {



  AOS.init()

  return (
    <>

      <div className="fade-in">
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/" element={<About />} />
          <Route path="/contact-us/" element={<Contact />} />
          <Route path="/strategic-consulting/" element={<Strategiai />} />
          <Route path="/implementation-and-function-extension/" element={<Implementacio />} />
          <Route path="/technology-consulting/" element={<Technologiai />} />
          <Route path="/system-operation/" element={<Rendszeruzemeltetes />} />
          <Route path="/application-support/" element={<Alkalmazas />} />
          <Route path="/project-management-and-quality-assurance/" element={<Projektmenedzsment />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />

      </div>
    </>
  )

}

export default App
