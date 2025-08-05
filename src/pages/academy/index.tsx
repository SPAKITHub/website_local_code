import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyHero from "./components/AcademyHero";
import AcademyStats from "./components/AcademyStats";
import AcademyCourses from "./components/AcademyCourses";
import AcademyTestimonials from "./components/AcademyTestimonials";
import AcademyCTA from "./components/AcademyCTA";

const Academy = () => {
  return (
    <>
      <Helmet>
        <title>Academy - SPAK IT Hub Tech Education</title>
        <meta
          name="description"
          content="Explore career-focused software training courses with industry-relevant skills. Java, Python, AI/ML, Cloud Computing, and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <AcademyHero />
        <AcademyStats />
        <AcademyCourses />
        <AcademyTestimonials />
        <AcademyCTA />
        <Footer />
      </div>
    </>
  );
};

export default Academy;