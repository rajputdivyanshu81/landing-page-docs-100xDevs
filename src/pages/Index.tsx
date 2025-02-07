import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Features from "../components/Features";
import Resources from "../components/Resources";
import Footer from "../components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;