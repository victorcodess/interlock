import arrow from "../assets/arrow.svg";
import security from "../assets/security.svg";
import integrations from "../assets/integrations.svg";
import phone from "../assets/phone.svg";
import payments from "../assets/payments.svg";
import notificationOne from "../assets/notification-one.svg";
import notificationTwo from "../assets/notification-two.svg";

const Features = () => {
  const width = window.innerWidth;
  console.log(width);

  return (
    <section className="px-6 md:px-10 xl:px-[159px] py-16 w-full flex flex-col gap-6 items-center justify-center border-t border-[#e2e4e9]">
      <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8 3xl:max-w-[1200px]">
        <div className="flex flex-col">
          <p className="text-gradient text-sm md:text-base font-bold leading-6">
            WHAT WE OFFER
          </p>
          <h3 className="mt-3 text-[#0e1829] text-3xl leading-tight md:text-[36px] font-bold md:leading-[44px] tracking-[-0.72px]">
            Welcome to Financial Revolution
          </h3>
          <p className="mt-5 text-base text-[20px] font-medium text-[#445469] leading-6 md:leading-[30px] w-full md:w-[655px]">
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </p>
        </div>
        <button className="text-base md:text-[18px] leading-[28px] text-[#445568] font-medium items-center justify-center gap-3 flex w-[180px] md:w-[202px] h-[56px] md:h-[60px] rounded-full border-2 border-[#131316] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)]">
          <span>Learn More</span>
          <img src={arrow} alt="" />
        </button>
      </div>

      <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 xl:gap-0 mt-5 md:mt-0 3xl:max-w-[1200px]">
        <div className="w-full lg:w-[486px] h-[600px] border border-[#ced5de] card-gradient-one rounded-[40px] flex flex-col items-center justify-between overflow-hidden">
          <div className="w-full px-12 pt-12 pb-8">
            <img src={security} alt="" />
            <h4 className="mt-6 text-[#302b45] text-[24px] font-bold leading-8 tracking-[-0.384px]">
              Advanced Security Measures
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Your security is our top priority. With state-of-the-art
              encryption and security protocols, rest assured that your
              financial data is safeguarded at all times
            </p>
          </div>
          <img src={phone} alt=" " className="" />
        </div>

        <div className="w-full lg:w-[690px] h-[600px] border border-[#ced5de] card-gradient-two rounded-[40px] flex flex-col items-center justify-between overflow-hidden">
          <div className="w-full px-12 pt-12 pb-8">
            <img src={integrations} alt="" />
            <h4 className="mt-6 text-[#302b45] text-[24px] font-bold leading-8 tracking-[-0.384px]">
              Streamlined App intergrations
            </h4>
            <p className="mt-4 w-full lg:w-[414px] text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Say goodbye to the complexities of traditional banking. Our
              intuitive platforms and tools simplify financial processes, making
              managing your money effortless.
            </p>
          </div>
          <img src={payments} alt=" " className="-mt-4" />
        </div>

        <img
          src={notificationOne}
          alt=""
          className="absolute bottom-[700px] md:bottom-[163px] -left-8 lg:-left-[89px]"
        />

        <img
          src={notificationTwo}
          alt=""
          className="absolute bottom-[-11px] left-10 md:left-[187px]"
        />
      </div>
    </section>
  );
};

export default Features;
