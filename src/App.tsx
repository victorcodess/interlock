import Navbar from "./navbar";
import Hero from "./components/hero";
import Footer from "./footer";
import SocialProof from "./components/social-proof";
import Features from "./components/features";
import FirstCTA from "./components/first-cta";
import WhyUs from "./components/why-us";
import SecondCTA from "./components/second-cta";
import SmoothScrolling from "./components/smooth-scrolling";
import video from "./assets/ope-btn.mp4";

function App() {
  return (
    <SmoothScrolling>
      <main>
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <FirstCTA />
        <WhyUs />
        <SecondCTA />
        <video
          className="h-[400px] max-w-none rounded-2xl md:h-[600px] xl:h-[772px]"
          autoPlay
          loop
          playsInline
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <Footer />
      </main>
    </SmoothScrolling>
  );
}

export default App;
