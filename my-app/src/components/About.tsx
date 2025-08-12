import { Target, Zap, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission Focused",
      description: "Dedicated to delivering innovative solutions"
    },
    {
      icon: Zap,
      title: "Cutting Edge",
      description: "Using the latest technologies and best practices"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Security and reliability at the core of everything"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals committed to excellence"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold mb-8 gradient-text text-glow">
              About Akrypt IT Solutions
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                We are a dynamic IT solutions provider based in Burhanpur, 
                Madhya Pradesh, dedicated to empowering businesses through 
                tailored technology services that drive efficiency and security.
              </p>
              
              <p className="text-lg">
                Established in 2024, our mission is to elevate technology for 
                businesses by offering innovative solutions and exceptional 
                support. We help clients thrive in the digital landscape through 
                comprehensive services ranging from web development to social 
                media marketing.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="relative">
            <div className="card-glow-strong p-12 rounded-3xl text-center animate-glow">
              <div className="text-6xl font-bold gradient-text text-glow mb-4">
                75+
              </div>
              <div className="text-2xl font-semibold text-foreground mb-2">
                Projects Delivered
              </div>
              <div className="text-muted-foreground">
                Empowering Businesses
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse-slow" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;