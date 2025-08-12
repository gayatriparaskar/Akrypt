const Footer = () => {
  const services = [
    "Website Development",
    "App Development", 
    "Graphics Design",
    "Social Media Marketing"
  ];

  const company = [
    "About",
    "Projects",
    "Contact",
    "Careers"
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Akrypt IT Solutions</h3>
                <p className="text-xs text-muted-foreground">EMPOWERING BUSINESSES</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Empowering businesses through tailored IT services that drive 
              efficiency and security. Your partner in digital transformation.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Akrypt IT Solutions Pvt Ltd. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;