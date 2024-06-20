import logo from "./assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-[19px] left-0 right-0 mx-[24px] md:mx-[40px] xl:mx-[95px] h-[65px] md:h-[80px] flex items-center justify-between rounded-[32px] px-6 md:px-8 outline outline-4 -outline-offset-[4px] outline-white/[38%] bg-white/10 backdrop-blur-[4px] shadow-[0_57px_96px_-8px_rgba(87,92,95,0.25)] 3xl:max-w-[1250px] 3xl:mx-auto">
      <div className="flex items-center justify-center gap-10">
        <a href="/" className="w-[120px] xl:w-[142px]">
          <img src={logo} alt="" className="w-[120px] md:w-[142px] cursor-pointer" />
        </a>
        <div className="text-[#445568] text-base xl:text-[18px] font-semibold leading-[24px] hidden md:flex gap-[20px] md:gap-[32px] items-center justify-center">
          <p className="cursor-pointer hover:text-[#445568]/50 transition-all">
            Home
          </p>
          <p className="cursor-pointer hover:text-[#445568]/50 transition-all">
            Products
          </p>
          <p className="cursor-pointer hover:text-[#445568]/50 transition-all">
            Resources
          </p>
          <p className="cursor-pointer hover:text-[#445568]/50 transition-all">
            Services
          </p>
        </div>
      </div>

      <button className="flex w-[110px] xl:w-[154px] h-[38px] md:h-[48px] bg-[#131316] rounded-full outline outline-4 -outline-offset-[0px] outline-white/[55%] bor der-[8px] bo rder-white/[0.55] items-center justify-center text-white btn-shadow text-sm xl:text-[18px] font-medium leading-[24px]">
        Get App
      </button>
    </nav>
  );
};

export default Navbar;
