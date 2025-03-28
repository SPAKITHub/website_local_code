
import { Briefcase, GraduationCap, Clock, Users } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const Career = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Development",
      location: "Hybrid (Remote & Office)",
      type: "Full-time",
      description: "We're looking for an experienced Frontend Developer with expertise in React, TypeScript, and modern web technologies to join our growing team.",
      requirements: [
        "5+ years of experience in frontend development",
        "Strong proficiency in React, TypeScript, and modern JavaScript",
        "Experience with state management solutions (Redux, Context API)",
        "Knowledge of responsive design and CSS frameworks like Tailwind",
        "Familiarity with testing frameworks (Jest, React Testing Library)"
      ]
    },
    {
      title: "Backend Developer",
      department: "Development",
      location: "Remote",
      type: "Full-time",
      description: "Join our backend team to build scalable APIs and services that power our applications using Node.js, Express, and MongoDB.",
      requirements: [
        "3+ years of experience in backend development",
        "Strong knowledge of Node.js and Express",
        "Experience with databases (MongoDB, PostgreSQL)",
        "Understanding of RESTful API design principles",
        "Familiarity with CI/CD pipelines"
      ]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "On-site",
      type: "Full-time",
      description: "Help us create stunning and intuitive user interfaces for our products. You'll work closely with our development team to bring designs to life.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Strong portfolio showcasing your design process",
        "Understanding of user-centered design principles",
        "Experience with design systems"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Manage our infrastructure and CI/CD pipelines to ensure smooth deployments and optimal performance of our applications.",
      requirements: [
        "3+ years of experience in DevOps",
        "Familiarity with cloud platforms (AWS, GCP, Azure)",
        "Experience with containerization (Docker, Kubernetes)",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Understanding of CI/CD principles"
      ]
    }
  ];

  return (
    <div className="pt-24 bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[30%] h-[30%] bg-spak-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-[20%] right-[5%] w-[25%] h-[25%] bg-spak-200/30 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-spak-100 text-spak-800 rounded-full text-sm font-medium mb-6 border border-spak-200">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Build your career with <span className="bg-gradient-to-r from-spak-700 to-spak-500 bg-clip-text text-transparent">SPAK IT Hub</span>
            </h1>
            <p className="text-foreground/70 text-lg mb-8">
              Join our innovative team and work on cutting-edge technologies that shape the future of digital transformation.
            </p>
            <a 
              href="#openings" 
              className="inline-block bg-spak-600 hover:bg-spak-700 text-white rounded-md px-8 py-3 text-lg font-medium transition-colors duration-200"
            >
              View Open Positions
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6 md:px-10 bg-spak-50/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why Work With Us
            </h2>
            <p className="text-foreground/70">
              We offer a supportive, innovative environment where you can grow professionally while working on meaningful projects.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={100} className="bg-white/80 p-8 rounded-xl border border-spak-100/80 shadow-subtle">
              <div className="w-14 h-14 rounded-lg bg-spak-50 flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-spak-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Growth</h3>
              <p className="text-foreground/70">
                Continuous learning opportunities, mentorship programs, and career advancement paths.
              </p>
            </FadeIn>

            <FadeIn delay={200} className="bg-white/80 p-8 rounded-xl border border-spak-100/80 shadow-subtle">
              <div className="w-14 h-14 rounded-lg bg-spak-50 flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-spak-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Learning & Development</h3>
              <p className="text-foreground/70">
                Access to courses, conferences, and resources to expand your skills and knowledge.
              </p>
            </FadeIn>

            <FadeIn delay={300} className="bg-white/80 p-8 rounded-xl border border-spak-100/80 shadow-subtle">
              <div className="w-14 h-14 rounded-lg bg-spak-50 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-spak-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
              <p className="text-foreground/70">
                Flexible schedules, remote work options, and respect for your personal time.
              </p>
            </FadeIn>

            <FadeIn delay={400} className="bg-white/80 p-8 rounded-xl border border-spak-100/80 shadow-subtle">
              <div className="w-14 h-14 rounded-lg bg-spak-50 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-spak-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-foreground/70">
                Supportive team environment that values diverse perspectives and ideas.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Current Openings
            </h2>
            <p className="text-foreground/70">
              Explore our open positions and find your perfect role in our growing team.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <FadeIn 
                key={index} 
                delay={index * 100}
              >
                <div className="bg-white/80 rounded-xl border border-spak-100/80 shadow-subtle overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-flex items-center px-3 py-1 bg-spak-50 text-spak-700 rounded-full text-xs font-medium">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 bg-spak-50 text-spak-700 rounded-full text-xs font-medium">
                            {job.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 bg-spak-50 text-spak-700 rounded-full text-xs font-medium">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-foreground/70 mb-6">
                          {job.description}
                        </p>
                      </div>
                      <a 
                        href="#contact" 
                        className="bg-spak-600 hover:bg-spak-700 text-white rounded-md px-5 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                      >
                        Apply Now
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6 md:px-10 bg-spak-50/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Application Process
            </h2>
            <p className="text-foreground/70">
              Our streamlined application process is designed to find the best talent while respecting your time.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100} className="bg-white/80 p-8 rounded-xl border border-spak-100/80 shadow-subtle">
              <div className="w-12 h-12 rounded-full bg-spak-100 flex items-center justify-center text-spak-700 font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Application Review</h3>
              <p className="text-foreground/70">
                Submit your application and our team will review your qualifications to determine if there's a potential match.
              </p>
            </FadeIn>

            <FadeIn delay={200} className="bg-white/80 p-8 rounded-xl border border-spak-100/80 shadow-subtle">
              <div className="w-12 h-12 rounded-full bg-spak-100 flex items-center justify-center text-spak-700 font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Interview Process</h3>
              <p className="text-foreground/70">
                Selected candidates proceed with initial interviews, technical assessments, and a final interview with the team.
              </p>
            </FadeIn>

            <FadeIn delay={300} className="bg-white/80 p-8 rounded-xl border border-spak-100/80 shadow-subtle">
              <div className="w-12 h-12 rounded-full bg-spak-100 flex items-center justify-center text-spak-700 font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Offer & Onboarding</h3>
              <p className="text-foreground/70">
                Successful candidates receive an offer and begin our comprehensive onboarding program to set you up for success.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
