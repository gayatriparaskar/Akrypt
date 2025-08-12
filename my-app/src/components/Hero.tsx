import { Button } from "@/components/ui/button";
import { Rocket, Eye, Target, Users, Calendar, Headphones } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Target, value: "75+", label: "Projects Delivered" },
    { icon: Users, value: "40+", label: "Happy Clients" },
    { icon: Calendar, value: "2024", label: "Established", highlighted: true },
    { icon: Headphones, value: "24/7", label: "Support" },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 animate-glow">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6">
              <Eye className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl backdrop-blur-lg transition-all duration-500 hover:scale-105 ${
                  stat.highlighted 
                    ? 'card-glow-strong animate-glow' 
                    : 'card-glow hover:shadow-glow-strong'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text text-glow">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;