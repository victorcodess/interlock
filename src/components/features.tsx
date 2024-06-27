import arrow from "../assets/arrow.svg";
import security from "../assets/security.svg";
import integrations from "../assets/integrations.svg";
import phone from "../assets/phone.svg";
import payments from "../assets/payments.svg";
import notificationOne from "../assets/notification-one.svg";
import notificationTwo from "../assets/notification-two.svg";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section id="products" className="flex w-full flex-col items-center justify-center gap-6 border-t border-[#e2e4e9] px-6 py-16 md:px-10 xl:px-[159px]">
      <div className="flex w-full flex-col items-start justify-between gap-8 xl:flex-row xl:items-end 3xl:max-w-[1200px]">
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 40,
                stiffness: 150,
                mass: 1,
                delay: 0.2,
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="text-gradient text-sm font-bold leading-6 md:text-base"
          >
            WHAT WE OFFER
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.3,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="mt-3 text-3xl font-bold leading-tight tracking-[-0.72px] text-[#0e1829] md:text-[36px] md:leading-[44px]"
          >
            Welcome to Financial Revolution
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="mt-5 w-full text-[20px] text-base font-medium leading-6 text-[#445469] md:w-[655px] md:leading-[30px]"
          >
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="flex h-[56px] w-[180px] items-center group relative overflow-hidden justify-center gap-3 rounded-full border-2 border-[#131316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]"
        >
          <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[59px]" />
          <span className="group-hover:text-white">Learn More</span>
          <img src={arrow} alt="" className="group-hover:invert" />
        </motion.button>
      </div>

      <div className="relative mt-5 flex w-full flex-col items-center justify-between gap-8 md:mt-0 md:flex-row xl:gap-0 3xl:max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 400,
              mass: 1,
              delay: 0,
            },
          }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className="card-gradient-one flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5de] lg:w-[486px]"
        >
          <div className="w-full px-12 pb-8 pt-12">
            <img src={security} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Advanced Security Measures
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Your security is our top priority. With state-of-the-art
              encryption and security protocols, rest assured that your
              financial data is safeguarded at all times
            </p>
          </div>
          <img src={phone} alt=" " className="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 400,
              mass: 1,
              delay: 0.1,
            },
          }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          className="card-gradient-two flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5de] lg:w-[690px]"
        >
          <div className="w-full px-12 pb-8 pt-12">
            <img src={integrations} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Streamlined App intergrations
            </h4>
            <p className="mt-4 w-full text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60 lg:w-[414px]">
              Say goodbye to the complexities of traditional banking. Our
              intuitive platforms and tools simplify financial processes, making
              managing your money effortless.
            </p>
          </div>
          <img src={payments} alt=" " className="-mt-4" />
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.2,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          src={notificationOne}
          alt=""
          className="absolute -left-8 bottom-[700px] md:bottom-[163px] lg:-left-[89px]"
        />

        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 0.6,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          src={notificationTwo}
          alt=""
          className="absolute bottom-[-11px] left-0 md:left-[187px]"
        />
      </div>
    </section>
  );
};

export default Features;
