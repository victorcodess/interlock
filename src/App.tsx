import Navbar from "./navbar";
import Hero from "./components/hero";
import Footer from "./footer";
import SocialProof from "./components/social-proof";
import Features from "./components/features";
import FirstCTA from "./components/first-cta";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <FirstCTA />
      <Footer />
    </main>
  );
}

export default App;
