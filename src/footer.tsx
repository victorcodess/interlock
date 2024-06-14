import logoWhite from "./assets/logo-white.svg";

const Footer = () => {
  return (
    <footer className="overflow-hidden w-full h-[650px] bg-[#131316] text-white relative pt-16 pb-12 flex flex-col items-center justify-center gap-16 px-[112px]">
      <div className="absolute top-[-216px] left-[-216px] w-[425px] h-[425px] bg-white rounded-[425px] blur-[350px]" />

      <img src={logoWhite} alt="" className="w-[1315.875px] pt-8" />

      <div className="w-full flex flex-col items-center justify-center gap-12">
        <div className="w-full grid grid-cols-6 grid-rows-3 place-content-center place-items-start gap-x-[32px] gap-y-[12px] text-[#94969D] font-bold">
          <p>Solutions<span className="text-white text-[12px] font-medium leading-[18px] py-[2px] px-2 bg-white/10 rounded-full border border-white/30 text-center ml-2">New</span></p>
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
        </div>
        <p className="text-[#94969C] font-medium text-base leading-6">
          © 2074 interlock. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
