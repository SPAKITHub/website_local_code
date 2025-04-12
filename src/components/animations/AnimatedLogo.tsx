import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  src: string;
  className?: string;
}

const AnimatedLogo = ({ src, className }: AnimatedLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Initial animation on mount with a slight delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Set up periodic subtle animation
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(animationInterval);
    };
  }, []);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-500",
        isHovered ? "shadow-lg scale-105" : "",
        isLoaded ? "opacity-100" : "opacity-0",
        isAnimating ? "animate-pulse-subtle" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-spak-400/20 to-spak-600/20 opacity-0 transition-opacity duration-300",
        isHovered ? "opacity-100" : ""
      )} />
      <img 
        src={src} 
        alt="SPAK IT Hub Logo"
        className={cn(
          "w-full h-full object-cover transition-transform duration-500",
          isHovered && "scale-105",
          isAnimating && "animate-bounce-subtle"
        )}
        onLoad={() => setIsLoaded(true)}
      />
      <div className={cn(
        "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-spak-400 to-spak-600 transform transition-transform duration-300",
        isHovered ? "translate-x-0" : "-translate-x-full"
      )} />
      {/* Animated glow effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-spak-400/0 via-spak-500/20 to-spak-600/0 opacity-0 transform -translate-x-full transition-all duration-1500",
        isAnimating ? "translate-x-full opacity-50" : ""
      )} />
    </div>
  );
};

export default AnimatedLogo;