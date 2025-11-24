import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import californiaPokeBowl from "@/assets/california-poke-bowl.jpg";
import okiBowl from "@/assets/oki-bowl.jpg";
import grandSlamBowl from "@/assets/grand-slam-poke-bowl.jpg";

const featuredItems = [
  {
    id: 1,
    name: "California Poke Bowl",
    description: "Salmon, cucumber, tamago, sesame, avocado, masago, wakame & nori",
    price: "£12.00",
    image: californiaPokeBowl,
    rating: 4.9,
    reviews: 172,
  },
  {
    id: 2,
    name: "Oki Poke Bowl",
    description: "Mixed diced fish (yellowtail, tuna, salmon), edamame, wakame, tamago & avocado",
    price: "£13.80",
    image: okiBowl,
    rating: 4.8,
    reviews: 40,
  },
  {
    id: 3,
    name: "Grand Slam Poke Bowl",
    description: "5 different mixed seafood with premium salmon roe topping",
    price: "£24.50",
    image: grandSlamBowl,
    rating: 4.9,
    reviews: 12,
  },
];

export const FeaturedMenu = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Signature <span className="text-gradient-primary">Bowls</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Freshly crafted with premium ingredients, served daily
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer transition-smooth hover:shadow-medium border-0 shadow-soft">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-medium">
                    <span className="text-accent font-bold text-lg">{item.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold text-foreground">{item.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">({item.reviews}+ reviews)</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-bold rounded-full px-10 py-6 text-lg transition-bounce hover:scale-105 shadow-glow"
            asChild
          >
            <Link to="/menu">
              View Full Menu & Order
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};