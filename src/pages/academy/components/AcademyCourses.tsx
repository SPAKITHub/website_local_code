import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import CourseCard from "./CourseCard";
import { coursesPartA, coursesPartB } from "../data/coursesData";

const AcademyCourses = () => {
  return (
    <section className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic <span className="text-spak-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of software training programs designed 
            to meet industry demands and accelerate your career growth.
          </p>
        </FadeIn>

        {/* Software Courses Part A */}
        <div className="mb-20">
          <FadeIn delay={200}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-spak-600 text-white rounded-lg flex items-center justify-center font-bold">A</div>
              <h3 className="text-2xl font-bold text-gray-800">Core Software Development</h3>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coursesPartA.map((course, index) => (
              <CourseCard key={course.id} course={course} delay={300 + (index * 100)} />
            ))}
          </div>
        </div>

        {/* Software Courses Part B */}
        <div>
          <FadeIn delay={200}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-spak-600 text-white rounded-lg flex items-center justify-center font-bold">B</div>
              <h3 className="text-2xl font-bold text-gray-800">Advanced Technologies & Specializations</h3>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesPartB.map((course, index) => (
              <CourseCard key={course.id} course={course} delay={300 + (index * 100)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyCourses;