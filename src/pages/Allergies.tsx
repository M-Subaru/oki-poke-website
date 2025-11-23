import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertTriangle, Phone, Mail } from "lucide-react";

const allergenInfo = [
  {
    category: "Fish & Seafood",
    description: "Most of our menu items contain fresh fish and seafood, including salmon, tuna, yellowtail, octopus, prawns, and other seafood. We cannot guarantee the removal of all fish bones.",
    items: ["Salmon", "Tuna", "Yellowtail", "Octopus", "Prawns", "Crab stick", "Scallops", "Fish roe"]
  },
  {
    category: "Crustaceans",
    description: "Many dishes contain crustaceans such as prawns and crab.",
    items: ["Prawns", "Crab"]
  },
  {
    category: "Eggs",
    description: "Tamago (Japanese omelette) is used in several dishes.",
    items: ["Tamago (egg)"]
  },
  {
    category: "Soya",
    description: "Soy sauce and tofu are used in various dishes.",
    items: ["Soy sauce", "Tofu", "Edamame"]
  },
  {
    category: "Sesame",
    description: "Sesame seeds are used as toppings in multiple dishes.",
    items: ["Sesame seeds"]
  },
  {
    category: "Gluten",
    description: "Soy sauce and other ingredients may contain gluten.",
    items: ["Soy sauce", "Certain sauces"]
  }
];

export default function Allergies() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
              Allergen <span className="text-gradient-primary">Information</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read this information carefully before ordering
            </p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="p-6 border-primary/30 bg-primary/5">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Important Notice
                  </h3>
                  <p className="text-foreground/90 mb-2">
                    Our kitchen handles multiple allergens daily. While we take precautions, we cannot guarantee that any dish is completely free from allergens due to shared preparation areas and equipment.
                  </p>
                  <p className="text-foreground/90">
                    If you have severe allergies or specific dietary requirements, please contact us directly before ordering.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Allergen Categories */}
          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Common Allergens in Our Menu
            </h2>
            
            {allergenInfo.map((allergen, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {allergen.category}
                </h3>
                <p className="text-foreground/90 mb-3">
                  {allergen.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {allergen.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted text-foreground rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-card border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Need More Information?
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                For specific allergen queries or dietary requirements, please contact us:
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+447860363158"
                  className="flex items-center justify-center gap-3 p-4 bg-muted rounded-lg hover:bg-primary/10 transition-smooth"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">07860 363158</span>
                </a>
                
                <div className="flex items-center justify-center gap-3 p-4 bg-muted rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">
                    Visit us at: 50 Saint Andrew's Street, Newcastle Upon Tyne, NE1 5SF
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
