import whyGradient from "../assets/why-gradient.svg";
import innovation from "../assets/innovation.png";

const WhyUs = () => {
  return (
    <section className="w-full pt-24 pb-7 px-[159px] flex relative gap-16">
      <img src={whyGradient} alt="" className="absolute bottom-0 left-0" />

      <img src={innovation} alt="" className="w-[592px] h-[591px] z-10" />

      <div className="pt-[50px] flex flex-col">
        <h3 className="text-[#0e1829] text-[36px] font-bold leading-[44px] tracking-[-0.72px]">
          Why Choose US
        </h3>

        <div className="relative w-full flex flex-col items-center justify-center gap-6 mt-6">
          <div className="w-1 h-[544px] bg-[#eaecf0] absolute left-0 top-0">
            <div className="w-1 bg-[#0A0D14] h-[70px]" />
          </div>

          <div className="py-4 pl-6">
            <h5 className="text-[#0e1829] text-[20px] font-bold leading-[30px]">
              Innovation
            </h5>
            <p className="text-[#445469] text-base font-medium leading-6 mt-2">
              We're at the forefront of fintech innovation, constantly pushing
              the boundaries to bring you the latest advancements in finance and
              technology.
            </p>
          </div>

          <div className="py-4 pl-6">
            <h5 className="text-[#0e1829] text-[20px] font-bold leading-[30px]">
              Transparency
            </h5>
            <p className="text-[#445469] text-base font-medium leading-6 mt-2">
              We believe in transparency and accountability. No hidden fees, no
              fine print – just straightforward, honest service.
            </p>
          </div>

          <div className="py-4 pl-6">
            <h5 className="text-[#0e1829] text-[20px] font-bold leading-[30px]">
              Reliability
            </h5>
            <p className="text-[#445469] text-base font-medium leading-6 mt-2">
              With a track record of reliability and trustworthiness, you can
              count on us to deliver on our promises and exceed your
              expectations
            </p>
          </div>

          <div className="py-4 pl-6">
            <h5 className="text-[#0e1829] text-[20px] font-bold leading-[30px]">
              Scalability
            </h5>
            <p className="text-[#445469] text-base font-medium leading-6 mt-2">
              With a track record of reliability and trustworthiness, you can
              count on us to deliver on our promises and exceed your
              expectations
            </p>
          </div>

          <div className="absolute w-full h-[69px] why-gradient bottom-0" />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
