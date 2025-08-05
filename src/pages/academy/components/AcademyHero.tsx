import React from "react";
import { BookOpen, Download } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const AcademyHero = () => {
  return (
    <section className="relative pt-24 pb-16 px-6 md:px-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-spak-50/50 to-white"></div>
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-spak-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-spak-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-spak-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <FadeIn>
          <span className="inline-block px-4 py-2 bg-spak-100 text-spak-800 rounded-full text-sm font-medium mb-6 border border-spak-200">
            🚀 Industry-Leading Tech Education
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Career-Focused <br />
            <span className="bg-gradient-to-r from-spak-600 to-spak-800 bg-clip-text text-transparent">
              Software Training
            </span> <br />
            with Industry-Relevant Skills
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your career with our comprehensive software training programs. 
            Learn from industry experts, work on real projects, and get placed in top companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-spak-600 hover:bg-spak-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <BookOpen className="h-5 w-5" />
              Browse All Courses
            </button>
            <button className="border-2 border-spak-600 text-spak-600 hover:bg-spak-600 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2">
              <Download className="h-5 w-5" />
              Download Brochure
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AcademyHero;