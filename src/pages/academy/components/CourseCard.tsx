import React from "react";
import { Star, Clock, Download, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

interface Course {
  id: number;
  title: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  description: string;
  skills: string[];
  price: string;
  rating: number;
  students: number;
}

interface CourseCardProps {
  course: Course;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-spak-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-spak-500/5 to-spak-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-spak-500 to-spak-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            {course.icon}
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-yellow-500 mb-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
            <div className="text-xs text-gray-500">{course.students} students</div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-spak-600 transition-colors">
          {course.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </span>
          <span className="px-2 py-1 bg-spak-50 text-spak-700 rounded-full text-xs">
            {course.level}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
          {course.skills.length > 3 && (
            <span className="text-xs text-gray-500">+{course.skills.length - 3} more</span>
          )}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-2xl font-bold text-spak-600">{course.price}</div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-spak-600 hover:text-spak-700 text-sm font-medium transition-colors">
              <Download className="h-4 w-4" />
              Curriculum
            </button>
            <button className="bg-spak-600 hover:bg-spak-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 group-hover:gap-2">
              Enroll Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </FadeIn>
);

export default CourseCard;