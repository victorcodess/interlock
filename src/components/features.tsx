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
    <section className="px-[159px] py-16 w-full flex flex-col gap-6 items-center justify-center border-t border-[#e2e4e9]">
      <div className="w-full flex justify-between items-end">
        <div className="flex flex-col">
          <p className="text-gradient text-base font-bold leading-6">
            WHAT WE OFFER
          </p>
          <h3 className="mt-3 text-[#0e1829] text-[36px] font-bold leading-[44px] tracking-[-0.72px]">
            Welcome to Financial Revolution
          </h3>
          <p className="mt-5 text-[20px] font-medium text-[#445469] leading-[30px] w-[655px]">
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </p>
        </div>
        <button className="text-[18px] leading-[28px] text-[#445568] font-medium items-center justify-center gap-3 flex w-[202px] h-[60px] rounded-full border-2 border-[#131316] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)]">
          <span> Learn More</span>
          <img src={arrow} alt="" />
        </button>
      </div>

      <div className="relative w-full flex items-center justify-between">
        <div className="w-[486px] h-[600px] border border-[#ced5de] card-gradient-one rounded-[40px] flex flex-col items-center justify-between overflow-hidden">
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

        <div className="w-[690px] h-[600px] border border-[#ced5de] card-gradient-two rounded-[40px] flex flex-col items-center justify-between overflow-hidden">
          <div className="w-full px-12 pt-12 pb-8">
            <img src={integrations} alt="" />
            <h4 className="mt-6 text-[#302b45] text-[24px] font-bold leading-8 tracking-[-0.384px]">
              Streamlined App intergrations
            </h4>
            <p className="mt-4 w-[414px] text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
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
          className="absolute bottom-[163px] -left-[89px]"
        />

        <img
          src={notificationTwo}
          alt=""
          className="absolute bottom-[-11px] left-[187px]"
        />
      </div>
    </section>
  );
};

export default Features;
