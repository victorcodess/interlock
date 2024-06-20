import dotBg from "../assets/dot-bg.svg";
import ctaGradient from "../assets/cta-gradient.svg";
import checkmark from "../assets/checkmark.svg";
import arrow from "../assets/arrow.svg";
import ctaCard from "../assets/cta-card.png";
import ctaPhone from "../assets/cta-phone.png";

const SecondCTA = () => {
  return (
    <section className="w-full px-6 py-10 md:py-[127px] relative md:px-10 xl:px-[159px] overflow-hidden">
      <img src={dotBg} alt="" className="absolute top-0 w-full -z-20" />
      <img src={ctaGradient} alt="" className="absolute top-0 right-0 -z-10" />
      <div className="w-full md:w-[785px] h-[772px] absolute bg-[#fffeff] blur-[150px] left-[292px] bottom-[-540px] z-10" />

      <div className="w-full md:w-[576px] 3xl:w-[1200px] 3xl:mx-auto z-10 py-[31px]">
        <h2 className="text-[#0E1829] text-4xl md:text-[48px] font-bold leading-tight md:leading-[60px] tracking-[-0.96px] md:w-[576px]">
          Your Personal finances, a few taps away
        </h2> 

        <ul className="max-w-md mt-8 space-y-4 text-[#647187] font-medium text-base md:text-[18px] leading-7 list-inside">
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="w-5 h-5 me-3 flex-shrink-0"
            />
            At least 10 characters
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="w-5 h-5 me-3 flex-shrink-0"
            />
            Customized card . With a unique design
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="w-5 h-5 me-3 flex-shrink-0"
            />
            Spend up to $100,000 per month
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="w-5 h-5 me-3 flex-shrink-0"
            />
            Access to all features
          </li>
        </ul>

        <div className="mt-12 md:mt-[78px] flex gap-6">
          <button className="text-base md:text-[18px] leading-[28px] text-[#445568] font-medium w-[180px] md:w-[202px] h-[56px] md:h-[60px] rounded-full border-2 border-[#131316] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)]">
            Get Started
          </button>
          <button className="text-base md:text-[18px] leading-[28px] text-[#445568] font-medium items-center justify-center gap-3 flex w-[180px] md:w-[202px] h-[56px] md:h-[60px] rounded-full">
            <span> Learn More</span>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <img src={ctaPhone} alt="" className="hidden md:block absolute bottom-0 w-[1287px] left-[250px] 3xl:left-[500px]" />
      <img src={ctaCard} alt="" className="hidden md:block absolute top-[96px] md:right-0 xl:right-[80px] 3xl:right-[320px] -z-10"/>
    </section>
  );
};

export default SecondCTA;
