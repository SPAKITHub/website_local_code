
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set the document title
    document.title = "SPAK IT Hub - Innovative Software Solutions";
    
    // Mark component as mounted
    setMounted(true);
    
    // Handle hash navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear-done");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [mounted]);

  // Force an update to the DOM if needed
  useEffect(() => {
    // This will ensure the React components re-render correctly
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.display = 'block';
      rootElement.classList.add('spak-it-hub-root'); // Add a specific class to ensure our styles apply
    }
    
    // Add a class to the body to ensure our styles apply
    document.body.classList.add('spak-it-hub');
    
    // Clean up
    return () => {
      document.body.classList.remove('spak-it-hub');
    };
  }, []);

  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-spak-600 border-t-transparent rounded-full"></div>
    </div>;
  }

  return (
    <div className="relative bg-background spak-it-container w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
