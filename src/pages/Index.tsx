import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <About />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;