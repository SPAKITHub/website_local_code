import React, { useEffect, useState, CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setMounted(true);

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear-done");
            const animatedElements = entry.target.querySelectorAll<HTMLElement>("[data-animate]");
            animatedElements.forEach((el) => {
              el.classList.add("animate-slide-up");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll<HTMLElement>("section");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [mounted]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.display = "block";
      root.classList.add("spak-it-hub-root");
    }
    document.body.classList.add("spak-it-hub");
    return () => {
      document.body.classList.remove("spak-it-hub");
    };
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin-slow w-16 h-16 border-4 border-spak-200 rounded-full"></div>
          <div className="animate-spin w-16 h-16 border-4 border-transparent border-t-spak-600 rounded-full absolute top-0 left-0"></div>
        </div>
      </div>
    );
  }

  const parallaxStyle: CSSProperties = {
    backgroundPositionY: `${scrollPosition * 0.2}px`,
  };

  return (
    <>
      <Helmet>
        <title>SPAK IT Hub - Innovative Software Solutions</title>
        <meta
          name="description"
          content="SPAK IT Hub offers cutting-edge web and software development services tailored to your business needs. Discover innovation and quality."
        />
        <link rel="canonical" href="https://spakithub.com/" />
      </Helmet>

      <div
        className="relative bg-background spak-it-container w-full min-h-screen overflow-hidden"
        style={parallaxStyle}
      >
        {/* Optional animated background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Blur blobs */}
            <div className="absolute top-[5%] left-[10%] w-64 h-64 bg-spak-100 rounded-full blur-3xl opacity-30 animate-float-slow"></div>
            <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-spak-200 rounded-full blur-3xl opacity-20 animate-float"></div>
            <div
              className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-spak-50 rounded-full blur-3xl opacity-30 animate-float-slow"
              style={{ animationDelay: "-2s" }}
            ></div>

            {/* Animated lines */}
            <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-spak-300/20 to-transparent animate-shimmer"></div>
            <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-spak-400/20 to-transparent animate-shimmer" style={{ animationDelay: "-1s" }}></div>
            <div className="absolute bottom-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-spak-500/20 to-transparent animate-shimmer" style={{ animationDelay: "-0.5s" }}></div>
          </div>
        </div>

        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
