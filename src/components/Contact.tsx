
import React from "react";
import FadeIn from "./animations/FadeIn";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-spak-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[30%] left-[10%] w-[25%] h-[25%] bg-spak-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[20%] w-[20%] h-[20%] bg-spak-200/30 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-spak-100 text-spak-800 rounded-full text-sm font-medium mb-6 border border-spak-200">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's discuss your <span className="bg-gradient-to-r from-spak-700 to-spak-500 bg-clip-text text-transparent">project</span>
          </h2>
          <p className="text-foreground/70">
            Get in touch with our team to discuss how we can help transform your business with our innovative technology solutions.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <ContactInfo className="mb-8" />
              <LocationMap />
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn direction="left">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
