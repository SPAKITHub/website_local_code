import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faBriefcase,
  faUserTie,
  faEnvelope,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: faHouse },
    { name: "About", href: "/#about", icon: faCircleInfo },
    { name: "Services", href: "/#services", icon: faBriefcase },
    { name: "Career", href: "/career", icon: faUserTie },
    { name: "Contact", href: "/#contact", icon: faEnvelope },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-0 px-2 md:px-6",
        scrolled ? "glass shadow-subtle py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-3 flex-shrink-0">
          <img
            src="/images/spakLogo.png"
            alt="SPAK IT Hub Logo"
            className="w-32 sm:w-36 md:w-60 h-auto object-contain rounded-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-spak-600 transition-colors duration-200 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-spak-600 transition-colors duration-200 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
              </Link>
            )
          )}
          <a
            href="/#contact"
            className="bg-spak-600 hover:bg-spak-700 text-white rounded-md px-5 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faRocket} />
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-white shadow-subtle md:hidden glass overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-spak-600 transition-colors duration-200 flex items-center gap-2"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/80 hover:text-spak-600 transition-colors duration-200 flex items-center gap-2"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
              </Link>
            )
          )}
          <a
            href="/#contact"
            className="bg-spak-600 hover:bg-spak-700 text-white text-center rounded-md px-5 py-2 font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faRocket} />
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
