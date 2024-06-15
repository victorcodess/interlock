import Navbar from "./navbar";
import Hero from "./components/hero";
import Footer from "./footer";
import SocialProof from "./components/social-proof";
import Features from "./components/features";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof/>
      <Features/>
      <Footer/>
    </main>
  );
}

export default App;
