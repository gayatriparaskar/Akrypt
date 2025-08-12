import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "TechFlow delivered an exceptional web application that exceeded our expectations. Their technical expertise and attention to detail are outstanding.",
      author: "Sarah Johnson",
      position: "CEO, Digital Ventures",
      rating: 5,
      highlighted: false
    },
    {
      text: "Working with TechFlow was a game-changer for our startup. They built a scalable platform that helped us grow 300% in just 6 months.",
      author: "Michael Chen", 
      position: "Founder, StartupLab",
      rating: 5,
      highlighted: false
    },
    {
      text: "The team at TechFlow is incredibly professional and delivered our enterprise solution on time and within budget. Highly recommended!",
      author: "Emily Rodriguez",
      position: "CTO, Enterprise Corp",
      rating: 5,
      highlighted: true
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text text-glow">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about
            our work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                testimonial.highlighted 
                  ? 'card-glow-strong animate-glow' 
                  : 'card-glow hover:card-glow-strong'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;