import { Smartphone, Palette, BarChart3, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Custom mobile and web applications built with cutting-edge technology",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Creative visual solutions that capture your brand's essence",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: BarChart3,
      title: "Data Research",
      description: "In-depth analytics and insights to drive your business decisions",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Our Expertise</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 gradient-text text-glow">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT services designed to empower your business through innovative
            technology solutions and exceptional support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl card-glow hover:card-glow-strong transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;