import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  Code, 
  Database, 
  TestTube, 
  Smartphone, 
  Brain, 
  BarChart3, 
  Cloud, 
  Shield, 
  Settings, 
  Bot,
  ArrowRight,
  Download,
  Star,
  Users,
  Award,
  BookOpen,
  Clock,
  CheckCircle
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const coursesPartA = [
  {
    id: 1,
    title: "Java Full-Stack Development",
    icon: <Code className="h-8 w-8" />,
    duration: "6 Months",
    level: "Beginner to Advanced",
    description: "Master Java backend development with Spring Boot, React frontend, and database integration for complete web applications.",
    skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    price: "₹45,000",
    rating: 4.8,
    students: 1250
  },
  {
    id: 2,
    title: "Python Full-Stack Development",
    icon: <Database className="h-8 w-8" />,
    duration: "5 Months",
    level: "Beginner to Advanced",
    description: "Build scalable web applications using Python Django/Flask, React, and modern deployment practices.",
    skills: ["Python", "Django", "React", "PostgreSQL", "Docker"],
    price: "₹42,000",
    rating: 4.9,
    students: 980
  },
  {
    id: 3,
    title: "Software Testing & QA Automation",
    icon: <TestTube className="h-8 w-8" />,
    duration: "4 Months",
    level: "Beginner to Intermediate",
    description: "Learn manual and automated testing with Selenium, TestNG, and modern QA methodologies.",
    skills: ["Selenium", "TestNG", "Cucumber", "API Testing", "CI/CD"],
    price: "₹35,000",
    rating: 4.7,
    students: 750
  },
  {
    id: 4,
    title: "Mobile App Development",
    icon: <Smartphone className="h-8 w-8" />,
    duration: "6 Months",
    level: "Intermediate",
    description: "Create native Android & iOS apps using React Native and Flutter with backend integration.",
    skills: ["React Native", "Flutter", "Firebase", "API Integration", "App Store"],
    price: "₹48,000",
    rating: 4.6,
    students: 650
  }
];

const coursesPartB = [
  {
    id: 5,
    title: "AI & Machine Learning",
    icon: <Brain className="h-8 w-8" />,
    duration: "7 Months",
    level: "Intermediate to Advanced",
    description: "Deep dive into AI/ML algorithms, neural networks, and practical implementation using Python and TensorFlow.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks", "Deep Learning"],
    price: "₹55,000",
    rating: 4.9,
    students: 890
  },
  {
    id: 6,
    title: "Data Science & Analytics",
    icon: <BarChart3 className="h-8 w-8" />,
    duration: "6 Months",
    level: "Beginner to Advanced",
    description: "Master data analysis, visualization, and statistical modeling with Python, R, and modern tools.",
    skills: ["Python", "R", "Pandas", "Tableau", "SQL", "Statistics"],
    price: "₹50,000",
    rating: 4.8,
    students: 1100
  },
  {
    id: 7,
    title: "Cloud Computing",
    icon: <Cloud className="h-8 w-8" />,
    duration: "5 Months",
    level: "Intermediate",
    description: "Comprehensive training on AWS, Azure, and Google Cloud Platform with hands-on projects.",
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    price: "₹52,000",
    rating: 4.7,
    students: 720
  },
  {
    id: 8,
    title: "Cybersecurity",
    icon: <Shield className="h-8 w-8" />,
    duration: "6 Months",
    level: "Intermediate to Advanced",
    description: "Learn ethical hacking, network security, and cybersecurity best practices with industry certifications.",
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "CISSP", "CEH"],
    price: "₹58,000",
    rating: 4.8,
    students: 540
  },
  {
    id: 9,
    title: "AWS & DevOps",
    icon: <Settings className="h-8 w-8" />,
    duration: "5 Months",
    level: "Intermediate",
    description: "Master AWS services, CI/CD pipelines, and DevOps practices for scalable application deployment.",
    skills: ["AWS", "Jenkins", "Docker", "Kubernetes", "Terraform", "Git"],
    price: "₹46,000",
    rating: 4.9,
    students: 820
  },
  {
    id: 10,
    title: "RPA (Robotic Process Automation)",
    icon: <Bot className="h-8 w-8" />,
    duration: "4 Months",
    level: "Beginner to Intermediate",
    description: "Automate business processes using UiPath, Blue Prism, and Automation Anywhere platforms.",
    skills: ["UiPath", "Blue Prism", "Automation Anywhere", "Process Mining", "Bot Development"],
    price: "₹40,000",
    rating: 4.6,
    students: 430
  }
];

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

const stats = [
  { icon: <Users className="h-8 w-8" />, value: "10,000+", label: "Students Trained" },
  { icon: <Award className="h-8 w-8" />, value: "95%", label: "Placement Rate" },
  { icon: <BookOpen className="h-8 w-8" />, value: "50+", label: "Industry Projects" },
  { icon: <Star className="h-8 w-8" />, value: "4.8/5", label: "Average Rating" }
];

const CourseCard = ({ course, delay = 0 }) => (
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

const Academic = () => {
  return (
    <>
      <Helmet>
        <title>Academic Courses - SPAK IT Hub Tech Education</title>
        <meta
          name="description"
          content="Explore career-focused software training courses with industry-relevant skills. Java, Python, AI/ML, Cloud Computing, and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
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

        {/* Stats Section */}
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

        {/* Academic Courses Section */}
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

        {/* Testimonials Section */}
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

        {/* CTA Section */}
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

        <Footer />
      </div>
    </>
  );
};

export default Academic;