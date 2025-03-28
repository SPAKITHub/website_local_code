import React from "react";
import { Map } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocationMapProps {
  className?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ className }) => {
  return (
    <div className={cn("glass rounded-xl border border-white/40 overflow-hidden shadow-elevated h-60 sm:h-80", className)}>
      <iframe
        src="https://www.google.com/maps?q=17.451296981502388, 78.37088959315275&z=15&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      />
    </div>
  );
};

export default LocationMap;
