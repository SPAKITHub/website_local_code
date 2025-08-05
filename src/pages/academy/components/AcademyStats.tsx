import React from "react";
import { Users, Award, BookOpen, Star } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const stats = [
  { icon: <Users className="h-8 w-8" />, value: "10,000+", label: "Students Trained" },
  { icon: <Award className="h-8 w-8" />, value: "95%", label: "Placement Rate" },
  { icon: <BookOpen className="h-8 w-8" />, value: "50+", label: "Industry Projects" },
  { icon: <Star className="h-8 w-8" />, value: "4.8/5", label: "Average Rating" }
];

const AcademyStats = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-spak-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={100 * index}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-spak-100">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyStats;