
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8555036093", "+91 8519895855"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@spakithub.com", "support@spakithub.com","trainee@spakithub.com"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["P.No:38, level 6, N-Heights, Siddiq Nagar, Hi-Tech city, Hyderabad ,Telangana 500081"],
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <div className={cn("space-y-6 mb-8", className)}>
      {contactInfo.map((item) => (
        <div key={item.title} className="flex items-start">
          <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mr-4", item.color)}>
            <item.icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            {item.details.map((detail, i) => (
              <p key={i} className="text-foreground/70">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
