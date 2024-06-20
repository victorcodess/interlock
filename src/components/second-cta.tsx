import dotBg from "../assets/dot-bg.svg";
import ctaGradient from "../assets/cta-gradient.svg";
import checkmark from "../assets/checkmark.svg";
import arrow from "../assets/arrow.svg";
import ctaCard from "../assets/cta-card.png";
import ctaPhone from "../assets/cta-phone.png";

const SecondCTA = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-10 md:px-10 md:py-[127px] xl:px-[159px]">
      <img src={dotBg} alt="" className="absolute top-0 -z-20 w-full" />
      <img src={ctaGradient} alt="" className="absolute right-0 top-0 -z-10" />
      <div className="absolute bottom-[-540px] left-[292px] z-10 h-[772px] w-full bg-[#fffeff] blur-[150px] md:w-[785px]" />

      <div className="z-10 w-full py-[31px] md:w-[576px] 3xl:mx-auto 3xl:w-[1200px]">
        <h2 className="text-4xl font-bold leading-tight tracking-[-0.96px] text-[#0E1829] md:w-[576px] md:text-[48px] md:leading-[60px]">
          Your Personal finances, a few taps away
        </h2>

        <ul className="mt-8 max-w-md list-inside space-y-4 text-base font-medium leading-7 text-[#647187] md:text-[18px]">
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            At least 10 characters
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Customized card . With a unique design
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Spend up to $100,000 per month
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Access to all features
          </li>
        </ul>

        <div className="mt-12 flex gap-6 md:mt-[78px]">
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
        src={ctaPhone}
        alt=""
        className="absolute bottom-0 left-[250px] hidden w-[1287px] md:block 3xl:left-[500px]"
      />
      <img
        src={ctaCard}
        alt=""
        className="absolute top-[96px] -z-10 hidden md:right-0 md:block xl:right-[80px] 3xl:right-[320px]"
      />
    </section>
  );
};

export default SecondCTA;
