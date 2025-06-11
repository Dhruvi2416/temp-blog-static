
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import OurProcessSection from "./components/OurProcessSection";
import TestimonialAndBlogs from "./components/TestimonialAndBlogs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useEffect } from "react";

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
      <HeroSection />
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

