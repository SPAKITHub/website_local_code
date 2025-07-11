
import { Code, BarChart, Smartphone, ShieldCheck, Binary, Globe, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import FadeIn from "./animations/FadeIn";
import { cn } from "@/lib/utils";

const Services = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [flowIndex, setFlowIndex] = useState(0);

  // Auto-flow through services
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update active tab based on flow
  useEffect(() => {
    setActiveTab(services[flowIndex].id);
  }, [flowIndex]);

  const services = [
    {
      id: "development",
      title: "Software Development",
      icon: Code,
      description: "Custom software solutions tailored to your specific business needs and challenges.",
      features: [
        "Web Application Development",
        "Custom Software Solutions",
        "API Development & Integration",
        "Legacy System Modernization"
      ]
    },
    {
      id: "web",
      title: "Web Development",
      icon: Globe,
      description: "Professional web solutions that combine stunning design with powerful functionality.",
      features: [
        "Responsive Website Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Applications"
      ]
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications with intuitive interfaces and robust functionality.",
      features: [
        "iOS & Android Development",
        "React Native Applications",
        "Mobile UI/UX Design",
        "App Store Optimization"
      ]
    },
    {
      id: "analytics",
      title: "Data Analytics",
      icon: BarChart,
      description: "Transform your data into actionable insights to drive strategic business decisions.",
      features: [
        "Business Intelligence Solutions",
        "Data Visualization & Reporting",
        "Predictive Analytics",
        "Big Data Processing"
      ]
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: Binary,
      description: "Harness the power of artificial intelligence to automate processes and gain competitive advantages.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Modeling"
      ]
    },
    {
      id: "consulting",
      title: "IT Consulting",
      icon: Lightbulb,
      description: "Strategic technology consulting to help your business leverage IT effectively for growth.",
      features: [
        "IT Strategy Development",
        "Digital Transformation",
        "Technology Assessment",
        "Process Optimization"
      ]
    },
    {
      id: "security",
      title: "Cybersecurity",
      icon: ShieldCheck,
      description: "Comprehensive security solutions to protect your digital assets and business operations.",
      features: [
        "Security Assessments & Audits",
        "Vulnerability Management",
        "Security Monitoring & Response",
        "Compliance Implementation"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-spak-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-spak-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[5%] w-[25%] h-[25%] bg-spak-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-spak-100 text-spak-800 rounded-full text-sm font-medium mb-6 border border-spak-200">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Comprehensive <span className="bg-gradient-to-r from-spak-700 to-spak-500 bg-clip-text text-transparent">IT solutions</span> for every business need
          </h2>
          <p className="text-foreground/70">
            We provide a full spectrum of services designed to help businesses leverage technology effectively. From custom software development to data analytics and AI solutions, we've got you covered.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <FadeIn 
              key={service.id} 
              delay={100 * index}
              className={cn(
                "group relative overflow-hidden",
                flowIndex === index && "animate-pulse-subtle"
              )}
            >
              <div 
                className={cn(
                  "h-full p-8 rounded-xl transition-all duration-500 cursor-pointer card-hover relative",
                  activeTab === service.id 
                    ? "bg-spak-600 text-white border border-spak-500" 
                    : "bg-white/80 border border-spak-100/80 hover:border-spak-200"
                )}
                onClick={() => setActiveTab(service.id)}
              >
                {/* Flow indicator */}
                <div className={cn(
                  "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-spak-400 to-spak-600 transform transition-transform duration-500",
                  flowIndex === index ? "translate-x-0" : "-translate-x-full"
                )} />
                
                <div className={cn(
                  "w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300",
                  activeTab === service.id 
                    ? "bg-white/10" 
                    : "bg-spak-50 group-hover:bg-spak-100"
                )}>
                  <service.icon 
                    className={cn(
                      "h-6 w-6 transition-all duration-300",
                      flowIndex === index && "animate-bounce-subtle",
                      activeTab === service.id ? "text-white" : "text-spak-600"
                    )} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={cn(
                  "mb-0 transition-colors duration-300",
                  activeTab === service.id ? "text-white/80" : "text-foreground/70"
                )}>
                  {service.description}
                </p>
                
                {/* Animated background effect */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-spak-400/0 via-spak-500/10 to-spak-600/0 opacity-0 transform -translate-x-full transition-all duration-1000",
                  flowIndex === index ? "translate-x-full opacity-100" : ""
                )} />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up">
          <div className="glass rounded-xl border border-white/40 overflow-hidden shadow-elevated relative">
            {/* Flow progress indicator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-spak-100">
              <div 
                className="h-full bg-gradient-to-r from-spak-400 to-spak-600 transition-all duration-3000 ease-linear"
                style={{ width: `${((flowIndex + 1) / services.length) * 100}%` }}
              />
            </div>
            
            {services.map((service) => (
              activeTab === service.id && (
                <div key={service.id} className="p-8 md:p-12 animate-fade-in">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-lg bg-spak-50 flex items-center justify-center mr-6">
                      <service.icon className="h-8 w-8 text-spak-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                      <p className="text-foreground/70">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="bg-white/50 rounded-lg p-6 border border-spak-100/50 animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <h4 className="text-lg font-semibold mb-2">{feature}</h4>
                        <p className="text-foreground/70 text-sm">
                          Our expert team delivers high-quality solutions with a focus on scalability and performance.
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <a 
                      href="#contact" 
                      className="inline-block bg-spak-600 hover:bg-spak-700 text-white rounded-md px-8 py-3 font-medium transition-colors duration-200"
                    >
                      Discuss Your Project
                    </a>
                  </div>
                </div>
              )
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
