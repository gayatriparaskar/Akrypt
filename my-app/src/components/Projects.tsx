import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Heart, BookOpen } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FinTech Solutions",
      category: "Financial Technology",
      description: "Advanced trading platform with real-time analytics",
      status: "Live",
      statusColor: "bg-green-500",
      image: "bg-gradient-to-br from-green-600 to-emerald-700",
      icon: TrendingUp
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare Technology", 
      description: "Comprehensive patient management and scheduling system",
      status: "Completed",
      statusColor: "bg-blue-500",
      image: "bg-gradient-to-br from-blue-600 to-cyan-700",
      icon: Heart
    },
    {
      title: "EdTech Solutions",
      category: "Education Platform",
      description: "Interactive learning platform with AI-powered personalization",
      status: "Live",
      statusColor: "bg-purple-500",
      image: "bg-gradient-to-br from-purple-600 to-violet-700",
      icon: BookOpen
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore some of our recent work and see how we've helped businesses achieve their
            digital goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden card-glow hover:card-glow-strong transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image/Preview */}
                <div className={`h-48 ${project.image} relative flex items-center justify-center`}>
                  <Badge className={`absolute top-4 right-4 ${project.statusColor} text-white`}>
                    {project.status}
                  </Badge>
                  <Icon className="w-16 h-16 text-white/80" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-primary border-primary/50">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;