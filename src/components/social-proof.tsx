import stripe from "../assets/stripe.svg";
import upwork from "../assets/upwork.svg";
import square from "../assets/square.svg";
import amazon from "../assets/amazon.svg";
import google from "../assets/google.svg";
import linear from "../assets/linear.svg";
import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.2,
          ease: [0.44, 0, 0.56, 1],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="flex w-full flex-col items-center justify-center gap-12 py-16"
    >
      <p className="text-[18px] leading-[26px] tracking-[-0.216px] text-[#2f2b43]/60">
        Trusted by the best
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <img src={stripe} alt="" className="" />
        <img src={upwork} alt="" className="" />
        <img src={square} alt="" className="" />
        <img src={amazon} alt="" className="" />
        <img src={google} alt="" className="" />
        <img src={linear} alt="" className="" />
      </div>
    </motion.section>
  );
};

export default SocialProof;
