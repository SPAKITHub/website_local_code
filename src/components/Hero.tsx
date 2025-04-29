
import { ArrowRight } from "lucide-react";
import FadeIn from "./animations/FadeIn";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 md:px-10 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] bg-spak-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] bg-spak-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          <FadeIn delay={100}>
            <span className="inline-block px-4 py-1.5 bg-spak-50 text-spak-800 rounded-full text-sm font-medium border border-spak-200">
              Innovative Software Solutions
            </span>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              Building <span className="bg-gradient-to-r from-spak-700 to-spak-500 bg-clip-text text-transparent">digital solutions</span> that transform businesses
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-lg text-foreground/70 max-w-2xl">
              SPAK IT Hub delivers cutting-edge software development, cloud solutions, and digital transformation services that help businesses thrive in the digital age.
            </p>
          </FadeIn>
          
          <FadeIn delay={400} className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-spak-600 hover:bg-spak-700 text-white rounded-md px-8 py-3 font-medium transition-all duration-200 inline-flex items-center gap-2 hover:gap-3"
            >
              Start Your Project <ArrowRight size={16} />
            </a>
            <a 
              href="#services" 
              className="bg-white border border-spak-200 hover:border-spak-300 text-foreground rounded-md px-8 py-3 font-medium transition-colors duration-200 inline-flex items-center"
            >
              Explore Services
            </a>
          </FadeIn>
        </div>

        <div className="lg:col-span-5">
          <FadeIn delay={500} direction="left">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-spak-400/20 to-spak-600/20 rounded-2xl blur-lg"></div>
              <div className="glass rounded-2xl overflow-hidden border border-white/40 relative shadow-elevated">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-spak-400 to-spak-600"></div>
                <div className="p-1">
                  <div className="bg-spak-50/80 rounded-xl p-6">
                    <div className="flex space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-spak-200/50 rounded w-3/4"></div>
                      <div className="h-4 bg-spak-200/50 rounded w-full"></div>
                      <div className="h-4 bg-spak-200/50 rounded w-2/3"></div>
                      <div className="h-20 bg-spak-200/30 rounded-lg mt-4 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-spak-500/20 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-spak-500/40"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl w-24 h-24 flex items-center justify-center shadow-elevated border border-white/40">
                <div className="w-12 h-12 rounded-full bg-spak-500/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-spak-500 to-spak-600"></div>
                </div>
              </div>
              
              <div className="absolute -top-10 -left-10 glass rounded-2xl w-20 h-20 flex items-center justify-center shadow-elevated border border-white/40 hidden sm:flex">
                <div className="w-10 h-10 bg-spak-500/20 rounded-lg"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
