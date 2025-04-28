import FadeIn from "@/components/animations/FadeIn";
import { Description } from "@radix-ui/react-toast";
import { Link } from "react-router-dom"; // or next/link if you're in Next.js

const jobs = [
  { id: 1, title: "Frontend Developer", location: "Remote", type: "Full-Time",description: "Experience with React.js, TailwindCSS, and modern UI design." },
  { id: 2, title: "Backend Engineer", location: "Hyderabad, India", type: "Full-Time", description: "Experience with Node.js, APIs, and database design (MongoDB, SQL)." },
  { id: 3, title: "Marketing Manager", location: "Bangalore, India", type: "Part-Time",description: "Strong portfolio of mobile and web projects, Figma expertise preferred."},
];

const Career = () => {
  return (
    <section id="career" className="py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-spak-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-spak-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <FadeIn className="max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-spak-50 text-spak-800 rounded-full text-sm font-medium mb-6 border border-spak-200">
            Careers at SPAK
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Build Your Future with <span className="bg-gradient-to-r from-spak-700 to-spak-500 bg-clip-text text-transparent">SPAK IT Hub</span>
          </h2>
          <p className="text-foreground/70">
            We're on a mission to innovate and transform industries through technology. 
            Join us and be a part of a dynamic, forward-thinking team.
          </p>
        </FadeIn>

        <FadeIn className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <FadeIn key={job.id} className="bg-white/80 rounded-xl p-6 border border-spak-100/80 shadow-md hover:shadow-lg transition-shadow duration-300 text-left">              
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  {job.description} <br /> {job.location} • {job.type}
                </p>
                <Link
                  to={`/apply?job=${encodeURIComponent(job.title)}`}
                  className="text-spak-600 hover:underline font-medium text-sm"
                >
                  Apply Now
                </Link>              
            </FadeIn>
          ))}
        </FadeIn>

      </div>
    </section>
  );
};

export default Career;
