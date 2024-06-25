import heroBg from "../assets/hero-bg.png";
import heroImg from "../assets/hero-img2.png";
import arrow from "../assets/arrow.svg";
import og1 from "../assets/interlock-og.png";
import og2 from "../assets/interlock-og-2.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="relative flex min-h-[810px] w-full flex-col items-center justify-center overflow-hidden bg-cover px-6 pt-[0px] md:flex-row md:items-start md:px-10 md:pt-[200px] lg:justify-start lg:pt-[237px] xl:px-[159px] 3xl:justify-center"
    >
      <div className="z-10 flex w-full flex-col items-center text-[#0e0e0e] lg:items-start 3xl:max-w-[1200px]">
        <h1 className="h-auto w-full text-center text-[60px] font-semibold leading-[60px] tracking-[-3px] opacity-[0.8704] md:h-[160px] md:w-[649px] md:text-[80px] md:leading-[80px] lg:text-left">
          Empowering Your Finance
        </h1>
        <p className="mt-[25.5px] w-full text-center text-base font-medium leading-6 md:w-[523px] md:text-[20px] md:leading-[30px] lg:text-left">
          Where finance meets technology in seamless harmony. We're dedicated to
          redefining the future of finance by offering innovative solutions
          tailored to meet the evolving needs of our clients
        </p>
        <div className="mt-[55.5px] flex w-full flex-col items-center justify-center gap-6 md:flex-row lg:justify-start">
          <button className="h-[56px] w-[180px] rounded-full border-2 border-[#131316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
            Get Started
          </button>
          <button className="flex h-[56px] w-[180px] items-center justify-center gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] md:h-[60px] md:w-[202px] md:text-[18px]">
            <span> Learn More</span>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <img
        src={heroImg}
        className="rotate- [-19.51deg] absolute bottom-[-455px] right-0 hidden w-[1395px] lg:block 3xl:right-[250px]"
        alt=""
      />

      <img src={og1} alt="" />
      <img src={og2} alt="" />
    </section>
  );
};

export default Hero;
