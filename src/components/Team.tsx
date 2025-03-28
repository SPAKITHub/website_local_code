
import FadeIn from "./animations/FadeIn";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Team = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "With over 15 years in technology leadership, Sarah founded SPAK IT Hub with a vision to create innovative solutions that transform businesses.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@example.com"
      }
    },
    {
      name: "David Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "David leads our technical strategy and innovation, bringing extensive experience in cloud architecture and software engineering.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@example.com"
      }
    },
    {
      name: "Mia Williams",
      role: "Lead UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Mia crafts exceptional user experiences, focusing on creating intuitive and engaging interfaces that delight our clients' customers.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mia@example.com"
      }
    },
    {
      name: "James Wilson",
      role: "Head of Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "James oversees our development teams, ensuring the delivery of robust, scalable, and high-performance software solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@example.com"
      }
    }
  ];

  return (
    <section id="team" className="py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-spak-100/40 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-spak-50 text-spak-800 rounded-full text-sm font-medium mb-6 border border-spak-200">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Meet the <span className="bg-gradient-to-r from-spak-700 to-spak-500 bg-clip-text text-transparent">experts</span> behind SPAK IT Hub
          </h2>
          <p className="text-foreground/70">
            Our team of passionate technology professionals brings together diverse expertise to deliver exceptional results for our clients.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <FadeIn 
              key={member.name} 
              delay={100 * index}
              className="group"
            >
              <div className="bg-white/80 rounded-xl overflow-hidden border border-spak-100/80 transition-all duration-300 card-hover h-full">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] bg-spak-100/50 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-1/3 flex items-end transition-opacity duration-300",
                    "opacity-0 group-hover:opacity-100"
                  )}>
                    <div className="flex space-x-2 p-4">
                      <a 
                        href={member.social.linkedin} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200 text-white"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={14} />
                      </a>
                      <a 
                        href={member.social.twitter} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200 text-white"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter size={14} />
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`} 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200 text-white"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={14} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-spak-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 text-center">
          <div className="glass rounded-xl border border-white/40 p-8 md:p-12 max-w-4xl mx-auto shadow-elevated">
            <h3 className="text-2xl font-display font-bold mb-4">Join Our Team</h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation. Explore opportunities to grow your career with SPAK IT Hub.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-spak-600 hover:bg-spak-700 text-white rounded-md px-8 py-3 font-medium transition-colors duration-200"
            >
              View Open Positions
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Team;
