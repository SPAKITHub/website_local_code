import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const AcademyCTA = () => {
  return (
    <section className="py-24 px-6 md:px-10 bg-gradient-to-r from-spak-600 to-spak-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8 text-spak-100">
            Join thousands of successful graduates and transform your career with our industry-leading programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-spak-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
              <CheckCircle className="h-5 w-5" />
              Get Free Counseling
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-spak-600 px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2">
              <ArrowRight className="h-5 w-5" />
              View All Courses
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AcademyCTA;