import React from "react";
import { Star } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at TCS",
    course: "Java Full-Stack Development",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "The Java Full-Stack course transformed my career. The hands-on projects and industry mentorship helped me land my dream job at TCS.",
    rating: 5
  },
  {
    name: "Rahul Kumar",
    role: "Data Scientist at Wipro",
    course: "Data Science & Analytics",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "Excellent curriculum with real-world projects. The instructors are industry experts who provide valuable insights and career guidance.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Cloud Engineer at Infosys",
    course: "AWS & DevOps",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "The AWS & DevOps program is comprehensive and up-to-date. I got certified and placed within 3 months of completion.",
    rating: 5
  }
];

const AcademyTestimonials = () => {
  return (
    <section className="py-24 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates who have successfully transformed their careers
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={200 + (index * 100)}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-xs text-spak-600">{testimonial.course}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyTestimonials;