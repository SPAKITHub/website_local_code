
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Google Form ID from the existing URL
  const googleFormId = "1FAIpQLSdJVXI0mm9eaCTfiKxJ-VeeMzq6MfTngC01VpjIjA3-4xEQ8g";
  
  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // This function submits the form data to Google Forms
  const submitToGoogleForm = async (data: z.infer<typeof formSchema>) => {
    // Map our form fields to Google Form entry IDs
    // You'll need to inspect your Google Form to get the correct entry IDs
    const formData = new FormData();
    formData.append("entry.123456789", data.name); // Replace with your actual entry ID for name
    formData.append("entry.987654321", data.email); // Replace with your actual entry ID for email
    formData.append("entry.456789123", data.subject); // Replace with your actual entry ID for subject
    formData.append("entry.321654987", data.message); // Replace with your actual entry ID for message

    // Create the URL for the form submission
    const url = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`;

    try {
      // Due to CORS restrictions, we use no-cors mode
      // Note: This means we won't be able to read the response
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      return false;
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const success = await submitToGoogleForm(data);
      
      if (success) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">Subject</FormLabel>
                <FormControl>
                <select
                        className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        {...field}
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Discussion">Project Discussion</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Career">Career</option>
                        <option value="Support">Support</option>
                      </select>
                    </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your project or inquiry..." 
                    className="min-h-[150px] resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <Send className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
