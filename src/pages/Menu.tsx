import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const menuSections = [
  {
    title: "Signature Bowls",
    items: [
      { name: "California Poke Bowl", description: "Salmon, cucumber, tamago, sesame, avocado, masago, wakame & nori", price: "£12.00", sauce: "Ponzu sauce", image: "california-poke-bowl.jpg" },
      { name: "Oki Poke Bowl", description: "Mixed diced fish (yellowtail, tuna, salmon), edamame, wakame, tamago & avocado", price: "£13.80", sauce: "Yuzu mayo", image: "oki-poke-bowl.jpg" },
      { name: "Classic Tuna Poke Bowl", description: "Wakame salad, pineapple, avocado, tamago, nori seaweed, sesame seed & orange masago", price: "£13.00", sauce: "Sriracha hot sauce", spicy: true, image: "classic-tuna-poke-bowl.jpg" },
      { name: "Hawaiian Poke Bowl", description: "Yellow tail, orange masago, edamame, avocado, diced mango, sesame seed & nori seaweed", price: "£13.80", sauce: "Wasabi mayo", image: "hawaiian-poke-bowl.jpg" },
      { name: "Teriyaki Chicken Poke Bowl", description: "Edamame, sweetcorn, wakame salad, avocado, nori seaweed & tamago", price: "£12.00", image: "teriyaki-chicken-poke-bowl.jpg" },
      { name: "Go Green Poke Bowl", description: "Cucumber, tofu, kimchi, wakame salad, sesame seed & edamame", price: "£11.50", sauce: "Gochujang sauce", image: "go-green-poke-bowl.jpg" },
      { name: "Grilled Teriyaki Salmon", description: "Edamame beans, mango, wakame, sweet red pepper", price: "£14.50", image: "grilled-teriyaki-salmon.jpg" },
      { name: "Grand Slam Poke Bowl", description: "5 different mixed seafood with premium salmon roe topping", price: "£24.50", image: "grand-slam-poke-bowl.jpg" },
    ]
  },
  {
    title: "Make Your Own Bowl",
    items: [
      { name: "Build Your Own Bowl", description: "Choose your base, protein, toppings, and sauce to create your perfect poke bowl", price: "£10.50", popular: true, image: "build-your-own-bowl.jpg" }
    ]
  },
  {
    title: "Nigiri (4 Pieces)",
    subtitle: "Available from 12:30 PM - 8:00 PM",
    items: [
      { name: "Salmon Nigiri", price: "£6.80", popular: true, image: "salmon-nigiri.png" },
      { name: "Tuna Nigiri", price: "£7.20", image: "tuna-nigiri.jpg" },
      { name: "Hamachi Yellow Tail Nigiri", price: "£7.20", image: "hamachi-yellow-tail-nigiri.jpg" },
      { name: "Octopus Nigiri", price: "£7.20", image: "octopus-nigiri.jpg" },
      { name: "Crab Stick Nigiri", price: "£6.00", image: "crab-stick-nigiri.jpg" },
      { name: "Tamago Eggs Nigiri", price: "£6.00", image: "tamago-eggs-nigiri.jpg" },
      { name: "Cooked Prawns Nigiri", price: "£7.20", image: "cooked-prawns-nigiri.jpg" },
      { name: "Seared Salmon Nigiri", price: "£7.20", image: "seared-salmon-nigiri.jpg" },
      { name: "Japanese Hokkaido Scallop Nigiri", price: "£12.00", image: "japanese-hokkaido-scallop-nigiri.jpg" },
      { name: "Salmon Roe Gunkan", description: "2 pieces", price: "£7.00", image: "salmon-roe-gunkan.jpg" },
    ]
  },
  {
    title: "Sashimi (6 Slices)",
    subtitle: "Available from 12:30 PM - 8:00 PM",
    items: [
      { name: "Salmon Sashimi", price: "£9.80", image: "salmon-sashimi.jpg" },
      { name: "Tuna Sashimi", price: "£12.00", image: "tuna-sashimi.jpg" },
      { name: "Hamachi Yellow Tail Sashimi", price: "£10.80", image: "hamachi-yellow-tail-sashimi.jpg" },
      { name: "Octopus Sashimi", price: "£7.80", image: "octopus-sashimi.jpg" },
      { name: "Japanese Hokkaido Scallop Sashimi", price: "£9.80", image: "japanese-hokkaido-scallop-sashimi.jpg" },
    ]
  },
  {
    title: "Sushi Rolls (8 Pieces)",
    subtitle: "Available from 12:30 PM - 8:00 PM",
    items: [
      { name: "California Roll", description: "Crab stick, tamago, avocado, cucumber, mayo, topped with masago", price: "£11.00", image: "california-roll.jpg" },
      { name: "Dragon Roll", description: "Katsu prawn, cucumber, tamago topped with avocado, mayo, masago & eel sauce", price: "£12.00", popular: true, image: "dragon-roll.jpg" },
      { name: "Dynamite Roll", description: "Hamachi (yellow tail), cucumber, avocado with yuzu mayo topped with salmon", price: "£12.50", image: "dynamite-roll.jpg" },
      { name: "Spicy Roll", description: "Minced spicy tuna, spring onion, crispy fried shallots, salad leaf, avocado topped with shichimi", price: "£12.50", spicy: true, image: "spicy-roll.jpg" },
      { name: "Tiger Roll", description: "Prawn Katsu, Cucumber, Avocado, Topped with Eel, Cooked prawn, Crispy fried shallots, Eel sauce and Sriracha mayo", price: "£13.50", image: "tiger-roll.jpg" },
      { name: "Futomaki Roll", description: "Tamago, salmon, wakame seaweed, avocado & inari, crabstick", price: "£12.00", image: "futomaki-roll.jpg" },
      { name: "Rainbow Rolls", description: "Crab stick, tamago, avocado, cucumber, mayo, topped with salmon, tuna, yellow tail", price: "£12.50", image: "rainbow-rolls.jpg" },
      { name: "Vegan Roll", description: "Cucumber, wakame, inari, salad leaf", price: "£9.80", image: "vegan-roll.jpg" },
    ]
  },
  {
    title: "Hosomaki (Small Rolls)",
    subtitle: "Available from 12:30 PM - 8:00 PM",
    items: [
      { name: "Salmon Hosomaki", price: "£5.20", image: "salmon-hosomaki.jpg" },
      { name: "Tuna Hosomaki", price: "£5.20", image: "tuna-hosomaki.jpg" },
      { name: "Cucumber Hosomaki", price: "£4.50", image: "cucumber-hosomaki.jpg" },
      { name: "Avocado Hosomaki", price: "£4.80", image: "avocado-hosomaki.jpg" },
      { name: "Crab Stick Hosomaki", price: "£4.50", image: "crab-stick-hosomaki.jpg" },
    ]
  },
  {
    title: "Sharing Platters",
    subtitle: "Available from 12:30 PM - 8:00 PM",
    items: [
      { name: "Nigiri Set", description: "Salmon, tuna, yellow tail, cooked prawn, octopus & eel", price: "£12.50", image: "nigiri-set.jpg" },
      { name: "Sashimi Set", description: "3 salmon, 3 tuna, 3 octopus, 3 yellow tail", price: "£21.80", image: "sashimi-set.jpg" },
      { name: "Salmon Set", description: "4 salmon nigiri, 6 salmon hosomaki, 4 salmon sashimi", price: "£19.80", image: "salmon-set.jpg" },
      { name: "Vegan Set", description: "Cucumber hosomaki x6, avocado hosomaki x6, inari hosomaki x6, vegan roll x6", price: "£19.80", image: "vegan-set.jpg" },
    ]
  },
  {
    title: "Drinks",
    items: [
      { name: "Coca Cola 330ml", price: "£2.70", image: "coca-cola-330ml.png" },
      { name: "Diet Coke 330ml", price: "£2.70", image: "diet-coke-330ml.png" },
      { name: "Fanta 330ml", price: "£2.70", image: "fanta-330ml.png" },
      { name: "Korean Sparkling Watermelon", price: "£3.20", image: "korean-sparkling-watermelon.jpg" },
      { name: "Korean Sparkling Mango", price: "£3.20", image: "korean-sparkling-mango.png" },
      { name: "Korean Sparkling Water With Lemon", price: "£3.00", image: "korean-sparkling-water-with-lemon.jpg" },
      { name: "Korean Sparkling Water In Natural Kumquat Flavour", price: "£3.00", image: "korean-sparkling-water-with-in-natural-kumquat-flavour.png" },
      { name: "Supermalt Mango & Passion Fruit", price: "£3.50", image: "supermalt-mango-and-passion-fruit.jpg" },
      { name: "Aloe Vera 500ml", price: "£3.50", image: "aloe-vera-500ml.png" },
      { name: "Still Water", price: "£2.00", image: "still-water.png" },
    ]
  }
];

export default function Menu() {
  const handleDownloadMenu = () => {
    // Open Uber Eats menu in new tab (they can screenshot/save from there)
    window.open("https://www.ubereats.com/gb/store/oki-poke/VS5xyDLYW0q7ZnE0ccAj6A", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
              Full <span className="text-gradient-primary">Menu</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Fresh Hawaiian poke bowls and premium sushi
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground font-bold rounded-full px-8 py-6 transition-bounce hover:scale-105 shadow-glow"
              onClick={handleDownloadMenu}
            >
              <Download size={20} />
              View Menu on Uber Eats
            </Button>
          </motion.div>

          {/* Menu Sections */}
          <div className="space-y-16">
            {menuSections.map((section, sectionIndex) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <div className="mb-8">
                  <h2 className="font-display text-4xl font-bold text-foreground mb-2">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="text-sm text-muted-foreground italic">{section.subtitle}</p>
                  )}
                </div>
                
                <div className="grid gap-4">
                  {section.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="p-6 hover:shadow-medium transition-smooth border-border bg-card"
                    >
                      <div className="flex gap-4">
                        {/* Image placeholder */}
                        {item.image && (
                          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={`${import.meta.env.BASE_URL}images/menu/${item.image}`}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="%23f0f0f0" width="200" height="200"/><text x="50%" y="50%" font-family="Arial" font-size="14" fill="%23999" text-anchor="middle" dy=".3em">Image placeholder</text></svg>';
                              }}
                            />
                          </div>
                        )}
                        
                        <div className="flex-1 flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <h3 className="font-display text-xl font-bold text-foreground">
                                {item.name}
                              </h3>
                              {item.popular && (
                                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full font-bold">
                                  Popular
                                </span>
                              )}
                              {item.spicy && (
                                <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded-full font-bold">
                                  Spicy
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-muted-foreground mb-1">{item.description}</p>
                            )}
                            {item.sauce && (
                              <p className="text-sm text-primary font-semibold">{item.sauce}</p>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className="font-display text-2xl font-bold text-primary">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Order CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to Order?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground font-bold rounded-full px-10 py-6 text-lg transition-bounce hover:scale-105 shadow-glow"
                asChild
              >
                <a href="https://www.ubereats.com/gb/store/oki-poke/VS5xyDLYW0q7ZnE0ccAj6A" target="_blank" rel="noopener noreferrer">
                  Order on Uber Eats
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground font-bold rounded-full px-10 py-6 text-lg transition-bounce hover:scale-105 shadow-glow"
                asChild
              >
                <a href="https://deliveroo.co.uk/menu/newcastle/newcastle-city-centre/oki-poke-at-aqua-ltd-newcastle" target="_blank" rel="noopener noreferrer">
                  Order on Deliveroo
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
