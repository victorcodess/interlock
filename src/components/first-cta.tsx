import arrow from "../assets/arrow.svg";
import cardOne from "../assets/card-one.svg";
import cardTwo from "../assets/card-two.svg";
import cardThree from "../assets/card-three.svg";
import cardFour from "../assets/card-four.svg";
import shadow from "../assets/shadow.svg";

const FirstCTA = () => {
  return (
    <section className="w-full h-[750px] md:h-[900px] lg:h-[592px] bg-[#131316]  flex relative px-6 md:px-10 xl:px-[159px] items-start lg:items-center justify-center overflow-y-c lip">
      <div className="bg-white w-[425px] h-[425px] rounded-full absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto blur-[350px]" />

      <div className="w-full relative h-[750px] md:h-[900px] lg:h-[592px]  3xl:max-w-[1200px]">
        <div className="w-full py-16 md:py-24 md:w-[576px]">
          <h2 className="text-4xl md:text-[48px] text-[#fcfcfd] font-bold leading-tight md:leading-[60px] tracking-[-0.96px]">
            Different Card for Different Folks
          </h2>
          <p className="text-base md:text-[20px] font-medium leading-6 md:leading-[30px] text-[#ced5de] mt-6">
            We revolutionizes the way you make payments, offering a secure,
            convenient, and contactless way to complete transactions
          </p>
          <button className="mt-8 md:mt-12 bg-white text-base md:text-[18px] leading-[28px] text-[#314155] font-medium items-center justify-center gap-3 flex w-[190px] md:w-[202px] h-[56px] md:h-[60px] rounded-full border-2 border-[#131316] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)]">
            <span>Discover More</span>
            <img src={arrow} alt="" />
          </button>
        </div>

        <div className="absolute flex flex-col justify-start -space-y-[230px] sm:-space-y-[290px] md:-space-y-[320px] lg:-space-y-[290px] -bottom-[0px] md:-bottom-[50 px] left-0 w-full md:w-auto right-0 md:left-auto md:right-[50px] lg:righ t-[149px] z-30 h-[400px] sm:h-[500px] md:h-[500px] overflow-clip lg:right-0 lg:h-[650px]">
          <img src={cardFour} alt="" className="z-[12]" />
          <img src={cardThree} alt="" className="z-[11] rotate -[-30deg]" />
          <img src={cardTwo} alt="" className="z-[10]" />
          <img src={cardOne} alt="" className="" />
          <img src={shadow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FirstCTA;
