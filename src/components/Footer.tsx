
import { ArrowUp } from "lucide-react";
//a "Scroll to Top" button with an ArrowUp icon from the lucide-react library.
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-white py-16 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
            <img
                loading="lazy"
                src="/images/spakLogo.png" 
                alt="SPAK IT Hub Logo"
                className="w-25 h-25 object-cover rounded-lg mr-1"
              />              
            </a>
            <p className="text-foreground/70 mb-6 max-w-md">
              SPAK IT Hub delivers innovative software solutions to help businesses thrive in the digital age. Our expert team is committed to excellence in every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-spak-50 flex items-center justify-center text-spak-600 hover:bg-spak-100 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-spak-50 flex items-center justify-center text-spak-600 hover:bg-spak-100 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-spak-50 flex items-center justify-center text-spak-600 hover:bg-spak-100 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-spak-50 flex items-center justify-center text-spak-600 hover:bg-spak-100 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">About Us</a></li>
              <li><a href="#team" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">Our Team</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">Software Development</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">Web Development</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">Mobile Development</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">Data Analytics</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">AI & Machine Learning</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">IT Consulting</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-spak-600 transition-colors duration-200">Cybersecurity</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-foreground/70">+91 8555036093,+91 8519895855</li>
              <li className="text-foreground/70">hr@spakithub.com</li>
              <li className="text-foreground/70">P.No:38, level 6, N-Heights, Siddiq Nagar,Hi-Tech city, Hyderabad ,Telangana 500081</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-spak-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} SPAK IT Hub. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-foreground/60 hover:text-spak-600 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-spak-600 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-spak-600 transition-colors duration-200">Cookie Policy</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-10 h-10 rounded-full bg-spak-600 text-white flex items-center justify-center hover:bg-spak-700 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
