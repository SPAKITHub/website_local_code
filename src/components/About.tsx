
import { CheckCircle } from "lucide-react";
import FadeIn from "./animations/FadeIn";

const About = () => {
  const values = [
    "Innovation-driven development",
    "Client-centered approach",
    "Excellence in execution",
    "Transparent communication",
    "Continuous improvement",
    "Long-term partnerships"
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[30%] w-[40%] h-[40%] bg-spak-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-spak-400/20 to-spak-600/20 rounded-2xl blur-lg"></div>
                <div className="glass rounded-2xl overflow-hidden border border-white/40 shadow-elevated relative flex">
                  <div className="w-1 bg-gradient-to-b from-spak-400 to-spak-600"></div>
                  <div className="flex-1 p-8 md:p-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 bg-white/50 rounded-lg flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-bold text-spak-700">1+</span>
                        <span className="text-sm text-foreground/70 mt-2">Years Experience</span>
                      </div>
                      <div className="p-6 bg-white/50 rounded-lg flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-bold text-spak-700">2+</span>
                        <span className="text-sm text-foreground/70 mt-2">Projects Delivered</span>
                      </div>
                      <div className="p-6 bg-white/50 rounded-lg flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-bold text-spak-700">5+</span>
                        <span className="text-sm text-foreground/70 mt-2">Tech Experts</span>
                      </div>
                      <div className="p-6 bg-white/50 rounded-lg flex flex-col items-center justify-center text-center">
                        <span className="text-4xl font-bold text-spak-700">98%</span>
                        <span className="text-sm text-foreground/70 mt-2">Client Satisfaction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <span className="inline-block px-4 py-1.5 bg-spak-50 text-spak-800 rounded-full text-sm font-medium mb-6 border border-spak-200">
                About SPAK IT Hub
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Elevating businesses through <span className="bg-gradient-to-r from-spak-700 to-spak-500 bg-clip-text text-transparent">innovative technology</span>
              </h2>
              <p className="text-foreground/70 mb-8">
                Founded with a vision to transform how businesses leverage technology, SPAK IT Hub has grown into a leading software development company. We combine technical expertise with deep industry knowledge to deliver solutions that drive growth and efficiency.
              </p>
              
              <div className="space-y-3 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-spak-600 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="#services" 
                className="inline-block bg-white border border-spak-200 hover:border-spak-300 text-foreground rounded-md px-6 py-3 font-medium transition-colors duration-200"
              >
                Discover Our Services
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
