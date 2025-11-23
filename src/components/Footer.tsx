import { Instagram, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold mb-4 text-gradient-primary">
              Oki Poke
            </h3>
            <p className="text-muted-foreground mb-4">
              Fresh Hawaiian poke bowls and premium sushi in Newcastle city centre
            </p>
            <a 
              href="https://www.instagram.com/okipoke_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Instagram size={20} />
              <span>@okipoke_</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-muted-foreground hover:text-primary transition-smooth">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#location" className="text-muted-foreground hover:text-primary transition-smooth">
                  Location
                </a>
              </li>
              <li>
                <a 
                  href="/menu" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Full Menu
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                  50 Saint Andrew's Street<br />
                  Newcastle Upon Tyne, NE1 5SF
                </span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <a href="tel:07860363158" className="hover:text-primary transition-smooth">
                  07860 363158
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>© 2025 Oki Poke. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://ratings.food.gov.uk/business/1517015/oki-poke-newcastle-upon-tyne" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">
              Food Hygiene Rating: 5★
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};