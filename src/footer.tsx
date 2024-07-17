import logoWhite from "./assets/logo-white.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative flex h-auto w-full flex-col items-center justify-center gap-16 overflow-hidden bg-[#131316] px-6 py-10 text-white md:h-[650px] md:px-10 md:pb-12 md:pt-16 xl:px-[112px]">
      <div className="absolute left-[-216px] top-[-216px] h-[425px] w-[425px] rounded-[425px] bg-white blur-[350px]" />

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.3,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        src={logoWhite}
        alt=""
        className="w-[1315.875px] pt-8 3xl:max-w-[1200px]"
      />

      <div className="flex w-full flex-col items-center justify-center gap-12 3xl:max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.3,
              ease: [0.44, 0, 0.22, 0.99],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="grid-row-6 grid w-full grid-cols-2 sm:grid-cols-3 place-content-center place-items-start gap-x-[32px] gap-y-[12px] font-bold text-[#94969D] md:grid-cols-6 md:grid-rows-3"
        >
          <p>
            Solutions
            <span className="ml-2 rounded-full border border-white/30 bg-white/10 px-2 py-[2px] text-center text-[12px] font-medium leading-[18px] text-white">
              New
            </span>
          </p>
          <p>News</p>
          <p>Events</p>
          <p>Government</p>
          <p>Facebook</p>
          <p>Licenses</p>
          <p>Pricing</p>
          <p>Media kit</p>
          <p>Help centre</p>
          <p>Marketplaces</p>
          <p>GitHub</p>
          <p>Settings</p>
          <p>Releases</p>
          <p>Contact</p>
          <p>Support</p>
          <p>Ecommerce</p>
          <p>Dribbble</p>
          <p>Contact</p>
        </motion.div>
        {/* <div className="w-full text-base font-medium leading-6 text-[#94969C] text-center sm:flex items-center justify-center gap-[5px]">
        <p>
          Design by
          <a
            href="https://x.com/ChoiceDsage"
            target="_blank"
            className="underline text-[#fff] hover:text-[#94969C] hover:no-underline underline-offset-4 transition-all cursor-pointer duration-300 ml-[5px]"
          >
            Samuel Alex
          </a>
        </p>
        <p>
        ✦ Development by
          <a
            href="https://www.victorwilliams.me"
            target="_blank"
            className="underline text-[#fff] hover:text-[#94969C] hover:no-underline underline-offset-4 transition-all cursor-pointer duration-300 mx-[5px]"
          >
            Victor Williams
          </a>
          — © 2024 Interlock
        </p>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
