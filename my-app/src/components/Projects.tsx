import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // ✅ navigation hook

import fintech from "../assests/fintech.avif";
import healthcare from "../assests/healthCare.jpeg";
import elearningPlatform from "../assests/elearning Platform.avif";
import logisticsTracker from "../assests/logistics.avif";
import restaurantPOS from "../assests/restaurant.avif";
import cryptoExchange from "../assests/crypto-exchange.webp";
import hotelsBooking from "../assests/hotel booking.avif";
import sochSarees from "../assests/soch-sarees.avif";
import rangritiFashion from "../assests/rangriti-fashion.webp";
import adeshEnterprises from "../assests/andesh-enterprises.avif";
import mangatramJewelers from "../assests/mangatram-jewelers.avif";
import { useEffect, useState } from "react";

const Projects = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  const projects = [
    {
      id: "fintech-dashboard",
      title: "FinTech Analytics Dashboard",
      description:
        "Real-time financial analytics platform with advanced data visualization and trading insights.",
      image: fintech,
      tech: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js"],
      category: "FinTech Solutions",
      duration: "8 weeks",
      team: "5 developers",
      gradient: "from-green-600 to-emerald-600",
      status: "Live",
    },
    {
      id: "healthcare-system",
      title: "Healthcare Management System",
      description:
        "Comprehensive patient management system with appointment scheduling and medical records.",
      image: healthcare,
      tech: ["Next.js", "PostgreSQL", "Prisma", "AWS"],
      category: "Healthcare Technology",
      duration: "12 weeks",
      team: "6 developers",
      gradient: "from-blue-600 to-cyan-600",
      status: "Completed",
    },
    {
      id: "elearning-platform",
      title: "AI-Powered Learning Platform",
      description:
        "Interactive e-learning platform with AI-driven personalized content and progress tracking.",
      image: elearningPlatform,
      tech: ["React", "Python", "TensorFlow", "MongoDB", "Docker"],
      category: "EdTech Solutions",
      duration: "10 weeks",
      team: "7 developers",
      gradient: "from-purple-600 to-indigo-600",
      status: "Live",
    },
    {
      id: "logistics-tracker",
      title: "Smart Logistics Tracker",
      description:
        "Real-time supply chain management system with GPS tracking and inventory optimization.",
      image: logisticsTracker,
      tech: ["Vue.js", "Express", "Redis", "Socket.io"],
      category: "Logistics Technology",
      duration: "6 weeks",
      team: "4 developers",
      gradient: "from-orange-600 to-red-600",
      status: "In Development",
    },
    {
      id: "restaurant-pos",
      title: "Restaurant POS System",
      description:
        "Complete point-of-sale solution with inventory management and customer analytics.",
      image: restaurantPOS,
      tech: ["React Native", "Firebase", "Stripe", "Analytics"],
      category: "Retail Technology",
      duration: "5 weeks",
      team: "3 developers",
      gradient: "from-yellow-600 to-orange-600",
      status: "Completed",
    },
    {
      id: "crypto-exchange",
      title: "Cryptocurrency Exchange",
      description:
        "Secure digital asset trading platform with advanced charting and portfolio management.",
      image: cryptoExchange,
      tech: ["Angular", "Blockchain", "WebSocket", "Security"],
      category: "Blockchain Development",
      duration: "16 weeks",
      team: "8 developers",
      gradient: "from-blue-600 to-indigo-600",
      status: "Live",
    },
    {
      id: "hotels-booking",
      title: "Hotels.com Booking Platform",
      description:
        "Comprehensive hotel booking platform with real-time availability and secure payment processing.",
      image: hotelsBooking,
      tech: ["React", "Node.js", "MongoDB", "Payment Gateway", "Maps API"],
      category: "Travel & Hospitality",
      duration: "14 weeks",
      team: "6 developers",
      gradient: "from-blue-600 to-indigo-600",
      status: "Live",
    },
    {
      id: "soch-sarees",
      title: "Soch Sarees E-commerce",
      description:
        "Premium saree collection platform with advanced filtering and virtual try-on features.",
      image: sochSarees,
      tech: ["React", "Redux", "Stripe", "AR Technology", "AWS"],
      category: "Fashion E-commerce",
      duration: "10 weeks",
      team: "4 developers",
      gradient: "from-pink-600 to-rose-600",
      status: "Live",
    },
    {
      id: "rangriti-fashion",
      title: "Rangriti Fashion Store",
      description:
        "Contemporary ethnic fashion platform with personalized recommendations and styling assistance.",
      image: rangritiFashion,
      tech: ["Vue.js", "Nuxt.js", "MySQL", "ML Recommendations"],
      category: "Fashion E-commerce",
      duration: "8 weeks",
      team: "5 developers",
      gradient: "from-purple-600 to-pink-600",
      status: "Live",
    },
    {
      id: "adesh-enterprises",
      title: "Adesh Enterprises Portal",
      description:
        "B2B enterprise portal for industrial equipment and machinery with inventory management.",
      image: adeshEnterprises,
      tech: ["Angular", "Spring Boot", "Oracle DB", "Enterprise Security"],
      category: "Enterprise Solutions",
      duration: "12 weeks",
      team: "7 developers",
      gradient: "from-gray-600 to-slate-600",
      status: "Completed",
    },
    {
      id: "mangatram-jewelers",
      title: "Mangatram Jewelers Online",
      description:
        "Luxury jewelry showcase platform with 360° product views and custom design configurator.",
      image: mangatramJewelers,
      tech: ["React", "Three.js", "360° Viewer", "Secure Payments"],
      category: "Luxury E-commerce",
      duration: "16 weeks",
      team: "6 developers",
      gradient: "from-yellow-600 to-amber-600",
      status: "Live",
    },
  ];

 const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 1000); // speed in ms (2000ms = 2s)
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore some of our recent work and see how we've helped businesses
            achieve their digital goals.
          </p>
        </div>

        {/* Projects Grid */}
 <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-linear"
        style={{
          transform: `translateX(-${currentIndex * 320}px)` // 300px card + 20px gap
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden card-glow hover:card-glow-strong transition-all duration-500 relative min-w-[300px] max-w-[300px] h-[400px] flex-shrink-0 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-primary/30 mx-2"
          >
            {/* Image Container */}
            <div className="h-44 relative flex items-center justify-center overflow-hidden">
              <Badge className="absolute top-4 right-4 text-white bg-black/50">
                {project.status}
              </Badge>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Button
                  variant="outline"
                  className="border-primary/50 bg-black/50 text-white hover:bg-primary/70"
                  onClick={() => navigate(`/projectDetail/${project.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto text-xs text-gray-400 space-y-1">
                <p>
                  <strong>Category:</strong> {project.category}
                </p>
                <p>
                  <strong>Duration:</strong> {project.duration}
                </p>
                <p>
                  <strong>Team:</strong> {project.team}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Projects;
