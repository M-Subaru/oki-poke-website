import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we're on a page other than home
  const isHomePage = location.pathname === "/";

  const handleHashNavigation = (hash: string) => {
    if (isHomePage) {
      // If on home page, just scroll to section
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page with hash
      navigate(`/${hash}`);
    }
  };

  const navLinks = [
    { href: "/menu", label: "Full Menu", isRoute: true },
    { href: "#about", label: "About", isRoute: false },
    { href: "#location", label: "Location", isRoute: false },
    { href: "/allergies", label: "Allergies", isRoute: true },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-card/95 backdrop-blur-md shadow-medium border-b border-border" 
            : "bg-card/80 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="font-display text-3xl font-bold text-gradient-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Oki Poke
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-foreground hover:text-primary font-medium transition-smooth"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleHashNavigation(link.href)}
                    className="text-foreground hover:text-primary font-medium transition-smooth"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <Button 
                className="bg-primary hover:bg-primary-light text-white rounded-full px-6 transition-smooth shadow-soft hover:shadow-medium"
                asChild
              >
                <a href="https://www.ubereats.com/gb/store/oki-poke/VS5xyDLYW0q7ZnE0ccAj6A" target="_blank" rel="noopener noreferrer">
                  Order Online
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-card md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-smooth"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={link.href}
                    onClick={() => {
                      handleHashNavigation(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-smooth"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.button>
                )
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button 
                  className="bg-primary hover:bg-primary-light text-white rounded-full px-8 py-6 text-lg transition-smooth shadow-medium"
                  asChild
                >
                  <a href="https://www.ubereats.com/gb/store/oki-poke/VS5xyDLYW0q7ZnE0ccAj6A" target="_blank" rel="noopener noreferrer">
                    Order Online
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};