import Navbar from "./navbar";
import heroBg from "./assets/hero-bg.png";

function App() {
  return (
    <main>
      <Navbar />
      <section
        // style={{ background: heroBg }}
        className="min-h-[100vh] w-full relative flex items-center justify-center"
      >
        <img src={heroBg} className="absolute w-full h-full object-cover -z-10"/>
      </section>
    </main>
  );
}

export default App;
