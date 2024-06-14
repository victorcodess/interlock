import Navbar from "./navbar";
import heroBg from "./assets/hero-bg.png";
import heroImg from "./assets/hero-img2.png";
import arrow from "./assets/arrow.svg";

function App() {
  return (
    <main>
      <Navbar />
      <section
        style={{ backgroundImage: `url(${heroBg})` }}
        className="min-h-[810px] w-full relative flex items-start px-[119px] pt-[237px] justify-start overflow-hidden bg-cover"
      >
        {/* <img src={heroBg} className="absolute w-full h-full object-cover -z-20"/> */}

        <div className="flex flex-col items-start text-[#0e0e0e] z-10">
          <h1 className="w-[649px] h-[160px] text-[80px] font-semibold leading-[80px] tracking-[-3px] opacity-[0.8704]">
            Empowering Your Finance
          </h1>
          <p className="text-[20px] leading-[30px] w-[523px] mt-[25.5px] font-medium">
            Where finance meets technology in seamless harmony. We're dedicated
            to redefining the future of finance by offering innovative solutions
            tailored to meet the evolving needs of our clients
          </p>
          <div className="mt-[55.5px] flex gap-6">
            <button className="text-[18px] leading-[28px] text-[#445568] font-medium w-[202px] h-[60px] rounded-full border-2 border-[#131316] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)]">
              Get Started
            </button>
            <button className="text-[18px] leading-[28px] text-[#445568] font-medium items-center justify-center gap-3 flex w-[202px] h-[60px] rounded-full">
              <span> Learn More</span>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <img
          src={heroImg}
          className="absolute  rotate- [-19.51deg] bottom-[-455px] right-0 w-[1395px]"
          alt=""
        />
      </section>
    </main>
  );
}

export default App;
