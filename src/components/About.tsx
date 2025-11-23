import { motion } from "framer-motion";
import { Utensils, Award, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Fresh Daily",
    description: "All ingredients sourced fresh and prepared daily for maximum quality",
  },
  {
    icon: Award,
    title: "4.8★ Rated",
    description: "Highly rated with 900+ reviews across delivery platforms",
  },
  {
    icon: Heart,
    title: "Healthy Choice",
    description: "Nutritious bowls packed with protein, vitamins, and fresh vegetables",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Fast preparation without compromising on quality or taste",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where Hawaiian <span className="text-gradient-primary">Tradition</span> Meets Asian Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Oki Poke, we bring the authentic flavors of Hawaiian poke bowls and premium Japanese sushi to the heart of Newcastle. Each bowl is carefully crafted with the freshest fish and ingredients, creating a perfect harmony of taste and nutrition.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From our signature California Bowl to our Grand Slam Sashimi, every dish celebrates the art of Asian fusion cuisine. Whether you're looking for a quick healthy lunch or a satisfying dinner, we've got you covered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-primary mb-1">900+</div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-primary mb-1">4.8★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Menu Items</div>
              </div>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/50 p-6 rounded-2xl border border-border hover:border-primary/30 transition-smooth hover:shadow-soft"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};