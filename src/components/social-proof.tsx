import stripe from "../assets/stripe.svg";
import upwork from "../assets/upwork.svg";
import square from "../assets/square.svg";
import amazon from "../assets/amazon.svg";
import google from "../assets/google.svg";
import linear from "../assets/linear.svg";

const SocialProof = () => {
  return (
    <section className="w-full flex flex-col py-16 items-center justify-center gap-12">
      <p className="text-[18px] text-[#2f2b43]/60 leading-[26px] tracking-[-0.216px]">
        Trusted by the best
      </p>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        <img src={stripe} alt="" className="" />
        <img src={upwork} alt="" className="" />
        <img src={square} alt="" className="" />
        <img src={amazon} alt="" className="" />
        <img src={google} alt="" className="" />
        <img src={linear} alt="" className="" />
      </div>
    </section>
  );
};

export default SocialProof;
