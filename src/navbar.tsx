import logo from "./assets/logo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: [0.44, 0, 0, 1],
        },
      }}
      viewport={{
        amount: "all",
        once: true,
      }}
      className="fixed left-0 right-0 top-[19px] z-50 mx-[24px] flex h-[65px] items-center justify-between rounded-[32px] bg-white/10 px-6 shadow-[0_57px_96px_-8px_rgba(87,92,95,0.25)] outline outline-4 -outline-offset-[4px] outline-white/[38%] backdrop-blur-[4px] md:mx-[40px] md:h-[80px] md:px-8 xl:mx-[95px] 3xl:mx-auto 3xl:max-w-[1250px]"
    >
      <div className="flex items-center justify-center gap-10">
        <a href="/" className="w-[120px] xl:w-[142px]">
          <img
            src={logo}
            alt=""
            className="w-[120px] cursor-pointer md:w-[142px]"
          />
        </a>
        <div className="hidden items-center justify-center gap-[20px] text-base font-semibold leading-[24px] text-[#445568] md:flex md:gap-[32px] xl:text-[18px]">
          <p className="cursor-pointer transition-all hover:text-[#445568]/50">
            Home
          </p>
          <p className="cursor-pointer transition-all hover:text-[#445568]/50">
            Products
          </p>
          <p className="cursor-pointer transition-all hover:text-[#445568]/50">
            Resources
          </p>
          <p className="cursor-pointer transition-all hover:text-[#445568]/50">
            Services
          </p>
        </div>
      </div>

      <button className="bor der-[8px] bo rder-white/[0.55] btn-shadow flex h-[38px] w-[110px] items-center justify-center rounded-full bg-[#131316] text-sm font-medium leading-[24px] text-white outline outline-4 -outline-offset-[0px] outline-white/[55%] md:h-[48px] xl:w-[154px] xl:text-[18px]">
        Get App
      </button>
    </motion.nav>
  );
};

export default Navbar;
