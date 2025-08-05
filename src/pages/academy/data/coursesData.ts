import { 
  Code, 
  Database, 
  TestTube, 
  Smartphone, 
  Brain, 
  BarChart3, 
  Cloud, 
  Shield, 
  Settings, 
  Bot
} from "lucide-react";

export const coursesPartA = [
  {
    id: 1,
    title: "Java Full-Stack Development",
    icon: <Code className="h-8 w-8" />,
    duration: "6 Months",
    level: "Beginner to Advanced",
    description: "Master Java backend development with Spring Boot, React frontend, and database integration for complete web applications.",
    skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    price: "₹45,000",
    rating: 4.8,
    students: 1250
  },
  {
    id: 2,
    title: "Python Full-Stack Development",
    icon: <Database className="h-8 w-8" />,
    duration: "5 Months",
    level: "Beginner to Advanced",
    description: "Build scalable web applications using Python Django/Flask, React, and modern deployment practices.",
    skills: ["Python", "Django", "React", "PostgreSQL", "Docker"],
    price: "₹42,000",
    rating: 4.9,
    students: 980
  },
  {
    id: 3,
    title: "Software Testing & QA Automation",
    icon: <TestTube className="h-8 w-8" />,
    duration: "4 Months",
    level: "Beginner to Intermediate",
    description: "Learn manual and automated testing with Selenium, TestNG, and modern QA methodologies.",
    skills: ["Selenium", "TestNG", "Cucumber", "API Testing", "CI/CD"],
    price: "₹35,000",
    rating: 4.7,
    students: 750
  },
  {
    id: 4,
    title: "Mobile App Development",
    icon: <Smartphone className="h-8 w-8" />,
    duration: "6 Months",
    level: "Intermediate",
    description: "Create native Android & iOS apps using React Native and Flutter with backend integration.",
    skills: ["React Native", "Flutter", "Firebase", "API Integration", "App Store"],
    price: "₹48,000",
    rating: 4.6,
    students: 650
  }
];

export const coursesPartB = [
  {
    id: 5,
    title: "AI & Machine Learning",
    icon: <Brain className="h-8 w-8" />,
    duration: "7 Months",
    level: "Intermediate to Advanced",
    description: "Deep dive into AI/ML algorithms, neural networks, and practical implementation using Python and TensorFlow.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks", "Deep Learning"],
    price: "₹55,000",
    rating: 4.9,
    students: 890
  },
  {
    id: 6,
    title: "Data Science & Analytics",
    icon: <BarChart3 className="h-8 w-8" />,
    duration: "6 Months",
    level: "Beginner to Advanced",
    description: "Master data analysis, visualization, and statistical modeling with Python, R, and modern tools.",
    skills: ["Python", "R", "Pandas", "Tableau", "SQL", "Statistics"],
    price: "₹50,000",
    rating: 4.8,
    students: 1100
  },
  {
    id: 7,
    title: "Cloud Computing",
    icon: <Cloud className="h-8 w-8" />,
    duration: "5 Months",
    level: "Intermediate",
    description: "Comprehensive training on AWS, Azure, and Google Cloud Platform with hands-on projects.",
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    price: "₹52,000",
    rating: 4.7,
    students: 720
  },
  {
    id: 8,
    title: "Cybersecurity",
    icon: <Shield className="h-8 w-8" />,
    duration: "6 Months",
    level: "Intermediate to Advanced",
    description: "Learn ethical hacking, network security, and cybersecurity best practices with industry certifications.",
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "CISSP", "CEH"],
    price: "₹58,000",
    rating: 4.8,
    students: 540
  },
  {
    id: 9,
    title: "AWS & DevOps",
    icon: <Settings className="h-8 w-8" />,
    duration: "5 Months",
    level: "Intermediate",
    description: "Master AWS services, CI/CD pipelines, and DevOps practices for scalable application deployment.",
    skills: ["AWS", "Jenkins", "Docker", "Kubernetes", "Terraform", "Git"],
    price: "₹46,000",
    rating: 4.9,
    students: 820
  },
  {
    id: 10,
    title: "RPA (Robotic Process Automation)",
    icon: <Bot className="h-8 w-8" />,
    duration: "4 Months",
    level: "Beginner to Intermediate",
    description: "Automate business processes using UiPath, Blue Prism, and Automation Anywhere platforms.",
    skills: ["UiPath", "Blue Prism", "Automation Anywhere", "Process Mining", "Bot Development"],
    price: "₹40,000",
    rating: 4.6,
    students: 430
  }
];