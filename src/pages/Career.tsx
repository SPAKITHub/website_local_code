import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Clock, Users, ArrowRight, Briefcase, Star, TrendingUp } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobs = [
  { 
    id: 1, 
    title: "Frontend Developer", 
    location: "Remote", 
    type: "Full-Time",
    experience: "2-4 years",
    description: "Join our frontend team to build amazing user experiences with React.js, TypeScript, and modern UI frameworks.",
    skills: ["React.js", "TypeScript", "TailwindCSS", "Next.js"],
    salary: "₹6-12 LPA"
  },
  { 
    id: 2, 
    title: "Backend Engineer", 
    location: "Hyderabad, India", 
    type: "Full-Time",
    experience: "3-5 years", 
    description: "Build scalable backend systems using Node.js, Python, and cloud technologies to power our applications.",
    skills: ["Node.js", "Python", "MongoDB", "AWS"],
    salary: "₹8-15 LPA"
  },
  { 
    id: 3, 
    title: "UI/UX Designer", 
    location: "Bangalore, India", 
    type: "Full-Time",
    experience: "2-3 years",
    description: "Create beautiful and intuitive user interfaces and experiences for web and mobile applications.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    salary: "₹5-10 LPA"
  },
  { 
    id: 4, 
    title: "DevOps Engineer", 
    location: "Remote", 
    type: "Full-Time",
    experience: "3-6 years",
    description: "Manage our cloud infrastructure and deployment pipelines to ensure reliable and scalable systems.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    salary: "₹10-18 LPA"
  },
  { 
    id: 5, 
    title: "Data Scientist", 
    location: "Hyderabad, India", 
    type: "Full-Time",
    experience: "2-4 years",
    description: "Analyze complex data sets and build machine learning models to drive business insights.",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    salary: "₹8-16 LPA"
  },
  { 
    id: 6, 
    title: "Marketing Specialist", 
    location: "Remote", 
    type: "Part-Time",
    experience: "1-3 years",
    description: "Drive our digital marketing efforts and help grow our brand presence across multiple channels.",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    salary: "₹4-8 LPA"
  }
];

const benefits = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Career Growth",
    description: "Clear career progression paths with mentorship and learning opportunities"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Great Team",
    description: "Work with passionate professionals in a collaborative environment"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Competitive Benefits",
    description: "Health insurance, flexible hours, and performance bonuses"
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and generous time-off policies"
  }
];

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Join SPAK IT Hub Team</title>
        <meta
          name="description"
          content="Join SPAK IT Hub and build your career in technology. Explore exciting opportunities in software development, design, and more."
        />
        <link rel="canonical" href="https://spakithub.com/career" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 md:px-10 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-spak-100/40 rounded-full blur-3xl" />
            <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-spak-100/40 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <FadeIn className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-spak-50 text-spak-800 rounded-full text-sm font-medium mb-6 border border-spak-200">
                Join Our Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Build Your Future with <span className="bg-gradient-to-r from-spak-700 to-spak-500 bg-clip-text text-transparent">SPAK IT Hub</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                We're on a mission to innovate and transform industries through technology. 
                Join us and be a part of a dynamic, forward-thinking team that's shaping the future.
              </p>
              <a 
                href="#positions" 
                className="inline-flex items-center gap-2 bg-spak-600 hover:bg-spak-700 text-white rounded-md px-8 py-3 font-medium transition-colors duration-200"
              >
                View Open Positions <ArrowRight size={16} />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 md:px-10 bg-spak-50/50">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Work With Us?
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We believe in creating an environment where our team can thrive, grow, and make a meaningful impact.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FadeIn key={index} delay={100 * index}>
                  <div className="bg-white/80 rounded-xl p-6 border border-spak-100/80 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                    <div className="w-12 h-12 rounded-lg bg-spak-50 flex items-center justify-center mx-auto mb-4 text-spak-600">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70 text-sm">{benefit.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Open Positions
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Discover exciting opportunities to grow your career and make an impact with cutting-edge technology.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job, index) => (
                <FadeIn key={job.id} delay={100 * index}>
                  <div className="bg-white/80 rounded-xl p-6 border border-spak-100/80 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-spak-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-foreground/60 mb-2">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {job.type}
                          </span>
                        </div>
                        <p className="text-sm text-spak-600 font-medium">{job.experience}</p>
                      </div>
                      <span className="text-sm font-medium text-spak-700 bg-spak-50 px-2 py-1 rounded">
                        {job.salary}
                      </span>
                    </div>
                    
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-spak-100 text-spak-700 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="text-xs text-foreground/60">
                          +{job.skills.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <Link
                      to={`/apply?job=${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center gap-2 text-spak-600 hover:text-spak-700 font-medium text-sm group-hover:gap-3 transition-all duration-200"
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-10 bg-spak-50/50">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <a 
                href="mailto:hr@spakithub.com" 
                className="inline-flex items-center gap-2 bg-spak-600 hover:bg-spak-700 text-white rounded-md px-8 py-3 font-medium transition-colors duration-200"
              >
                Send Your Resume <ArrowRight size={16} />
              </a>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Career;