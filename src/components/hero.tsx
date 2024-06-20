import heroBg from "../assets/hero-bg.png";
import heroImg from "../assets/hero-img2.png";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="min-h-[810px] w-full relative flex flex-col md:flex-row items-center md:items-start px-6 md:px-10 xl:px-[159px] pt-[0px] md:pt-[200px] lg:pt-[237px] justify-center lg:justify-start overflow-hidden bg-cover 3xl:justify-center"
    >
      <div className="flex flex-col items-center lg:items-start text-[#0e0e0e] z-10 w-full 3xl:max-w-[1200px]">
        <h1 className="w-full md:w-[649px] h-auto md:h-[160px] text-[60px] leading-[60px] md:text-[80px] font-semibold md:leading-[80px] tracking-[-3px] opacity-[0.8704] text-center lg:text-left">
          Empowering Your Finance
        </h1>
        <p className="text-base md:text-[20px] leading-6 text-center lg:text-left md:leading-[30px] w-full md:w-[523px] mt-[25.5px] font-medium">
          Where finance meets technology in seamless harmony. We're dedicated to
          redefining the future of finance by offering innovative solutions
          tailored to meet the evolving needs of our clients
        </p>
        <div className="mt-[55.5px] flex flex-col md:flex-row w-full items-center justify-center lg:justify-start gap-6">
          <button className="text-base md:text-[18px] leading-[28px] text-[#445568] font-medium w-[180px] md:w-[202px] h-[56px] md:h-[60px] rounded-full border-2 border-[#131316] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)]">
            Get Started
          </button>
          <button className="text-base md:text-[18px] leading-[28px] text-[#445568] font-medium items-center justify-center gap-3 flex w-[180px] md:w-[202px] h-[56px] md:h-[60px] rounded-full">
            <span> Learn More</span>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <img
        src={heroImg}
        className="hidden lg:block absolute rotate- [-19.51deg] bottom-[-455px] right-0 w-[1395px] 3xl:right-[250px]"
        alt=""
      />
    </section>
  );
};

export default Hero;
