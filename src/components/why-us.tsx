import whyGradient from "../assets/why-gradient.svg";
import innovation from "../assets/innovation.png";

const WhyUs = () => {
  return (
    <section className="relative flex w-full flex-col-reverse items-center justify-center gap-16 px-6 pb-16 pt-6 md:flex-row md:px-10 md:pb-7 md:pt-24 xl:px-[159px]">
      <img src={whyGradient} alt="" className="absolute bottom-0 left-0" />
      <div className="relative flex w-full flex-col-reverse gap-16 md:flex-row 3xl:max-w-[1200px]">
        <img
          src={innovation}
          alt=""
          className="z-10 h-auto w-full object-cover md:h-[591px] md:w-[400px] xl:w-[592px]"
        />

        <div className="flex flex-col pt-[50px]">
          <h3 className="text-[32px] font-bold leading-[44px] tracking-[-0.72px] text-[#0e1829] md:text-[36px]">
            Why Choose US
          </h3>

          <div className="relative mt-6 flex w-full flex-col items-center justify-center gap-6">
            <div className="absolute left-0 top-0 h-[544px] w-1 bg-[#eaecf0]">
              <div className="h-[70px] w-1 bg-[#0A0D14]" />
            </div>

            <div className="py-4 pl-6">
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Innovation
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                We're at the forefront of fintech innovation, constantly pushing
                the boundaries to bring you the latest advancements in finance
                and technology.
              </p>
            </div>

            <div className="py-4 pl-6">
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Transparency
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                We believe in transparency and accountability. No hidden fees,
                no fine print – just straightforward, honest service.
              </p>
            </div>

            <div className="py-4 pl-6">
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Reliability
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                With a track record of reliability and trustworthiness, you can
                count on us to deliver on our promises and exceed your
                expectations
              </p>
            </div>

            <div className="py-4 pl-6">
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Scalability
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                With a track record of reliability and trustworthiness, you can
                count on us to deliver on our promises and exceed your
                expectations
              </p>
            </div>

            <div className="why-gradient absolute bottom-0 h-[69px] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
