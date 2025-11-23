import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Location = () => {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Visit <span className="text-gradient-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Newcastle city centre
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="p-8 shadow-soft border-border bg-card hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    50 Saint Andrew's Street<br />
                    Newcastle Upon Tyne<br />
                    NE1 5SF
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary-light p-0 mt-2"
                    asChild
                  >
                    <a 
                      href="https://www.google.com/maps/place/Oki+Poke/@54.9734066,-1.6209735,17z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Directions →
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft border-border bg-card hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Contact</h3>
                  <a 
                    href="tel:07860363158" 
                    className="text-muted-foreground hover:text-primary transition-smooth text-lg"
                  >
                    07860 363158
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft border-border bg-card hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Sunday</p>
                    <p className="font-semibold text-foreground">12:00 PM - 8:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-3">
                      Nigiri, Sashimi & Rolls available from 12:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft border-border bg-card hover:shadow-medium transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Food Hygiene Rating</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-display font-bold text-primary">5</span>
                    <span className="text-muted-foreground">/ 5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Very Good - FSA Rating</p>
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary-light p-0 mt-2"
                    asChild
                  >
                    <a 
                      href="https://ratings.food.gov.uk/business/1517015/oki-poke-newcastle-upon-tyne" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Certificate →
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Order Buttons */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  id="order"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-bold rounded-full py-6 transition-bounce hover:scale-105 shadow-glow"
                >
                  Order Online
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-foreground">Choose Delivery Platform</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 pt-4">
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-bold"
                    asChild
                  >
                    <a 
                      href="https://www.ubereats.com/gb/store/oki-poke/VS5xyDLYW0q7ZnE0ccAj6A" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Order on Uber Eats
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-bold"
                    asChild
                  >
                    <a 
                      href="https://deliveroo.co.uk/menu/newcastle/newcastle-city-centre/oki-poke-at-aqua-ltd-newcastle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Order on Deliveroo
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden shadow-medium border-border bg-card h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.2961234567!2d-1.6209735!3d54.9734066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e71853133f479%3A0xd1919f5d35368f21!2sOki%20Poke!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oki Poke Location"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};