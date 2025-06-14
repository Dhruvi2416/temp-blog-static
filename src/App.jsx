
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import OurProcessSection from "./components/OurProcessSection";
import TestimonialAndBlogs from "./components/TestimonialAndBlogs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const timeout = setTimeout(scrollToHash, 100); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      
      <div
        className="bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: "url('../assets/HeroLayer.png')" }}
      >
        <Navbar />
        <HeroSection />
      </div>
     
      <ServicesSection />
      <AboutUsSection />
      <OurProcessSection />
      <TestimonialAndBlogs />
      <ContactForm />
      <Footer />
    </div>

  );
}

export default App;

