import arrow from "../assets/arrow.svg";
import cardOne from "../assets/card-one.svg";
import cardTwo from "../assets/card-two.svg";
import cardThree from "../assets/card-three.svg";
import cardFour from "../assets/card-four.svg";
import shadow from "../assets/shadow.svg";

const FirstCTA = () => {
  return (
    <section className="w-full h-[592px] bg-[#131316] py-24 flex relative px-[159px] items-center overflow-y-c lip">
      <div className="bg-white w-[425px] h-[425px] rounded-full absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto blur-[350px]" />

      <div className="w-[576px]">
        <h2 className="text-[48px] text-[#fcfcfd] font-bold leading-[60px] tracking-[-0.96px]">
          Different Card for Different Folks
        </h2>
        <p className="text-[20px] font-medium leading-[30px] text-[#ced5de] mt-6">
          We revolutionizes the way you make payments, offering a secure,
          convenient, and contactless way to complete transactions
        </p>
        <button className="mt-12 bg-white text-[18px] leading-[28px] text-[#314155] font-medium items-center justify-center gap-3 flex w-[202px] h-[60px] rounded-full border-2 border-[#131316] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)]">
          <span>Discover More</span>
          <img src={arrow} alt="" />
        </button>
      </div>

      <div className="absolute flex flex-col -space-y-[290px] -bottom-[0px] right-[149px] bo rder bg- red-200 z-30 h-[650px] overflow-clip">
        <img src={cardFour} alt="" className="z-[12]" />
          <img src={cardThree} alt="" className="z-[11] rotate -[-30deg]" />
        <img src={cardTwo} alt="" className="z-[10]" />
        <img src={cardOne} alt="" className="" />
        <img src={shadow} alt="" />
      </div>
    </section>
  );
};

export default FirstCTA;
