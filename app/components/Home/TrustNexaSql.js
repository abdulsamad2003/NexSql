import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const steps = [
  {
    title: "🔧 Real SQL Expertise",
    description:
      "We've worked on SQL Server at Microsoft and helped dozens of teams scale securely and efficiently.",
    image: "/assets/create-your-wallet.svg",
    alt: "real-sql-expertise",
    marginTop: "mt-0",
  },
  {
    title: "💡 Advisory + Hands-On",
    description:
      "We don't just audit — we fix. From index optimization to high-availability strategies, we're your SQL co-pilot.",
    image: "/assets/create-your-wallet.svg",
    alt: "advisory-hands-on",
    marginTop: "mt-20",
  },
  {
    title: "🤝 Long-Term Thinking",
    description:
      "We aim to be your backend database team — not a one-off vendor. Our services are structured for relationships.",
    image: "/assets/create-your-wallet.svg",
    alt: "long-term-thinking",
    marginTop: "mt-40",
  },
];

const TrustNexaSql = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div
        className="pt-[12px] pb-20 lg:py-20 px-4"
        style={{
          background: `radial-gradient(32.52% 50% at 50% 50%, rgba(132, 45, 255, 0.25) 0%, rgba(2, 1, 3, 0.25) 100%), linear-gradient(0deg, #000000, #000000)`,
        }}
      >
        <SectionHeading text={t("Why Companies Trust NexaSQL")} />
        <h1 className="my-[25px] text-[32px] sm:text-[40px] leading-[44px] font-bold text-white text-center">
          Why Growing Businesses Rely on NexaSQL
        </h1>
        <p className="text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80">
          We have worked on SQL Server at Microsoft and helped dozens of teams
          scale securely and efficiently.
        </p>

        {/* Steps Container */}
        <div className="mt-11 max-w-[1236px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex gap-5">
          {/* Desktop Design */}
          {steps.map((item, index) => (
            <div
              key={index}
              className={`hidden lg:block relative lg:w-[399px] lg:h-[450px] xl:h-[414px] rounded-[20px] p-[1px] transition-shadow duration-300 hover:shadow-[0px_0px_25px_0px_#8B5CF6] ${item.marginTop}`}
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)",
              }}
            >
              <div
                className="rounded-[20px] p-[25px] flex items-center justify-center flex-col w-full h-full transition-shadow duration-300 hover:shadow-[0px_0px_50px_0px_#8B5CF680_inset] backdrop-blur-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #000000 0%, #371866 100%)",
                  boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                }}
              >
                <h2 className="text-[24px] leading-[28.8px] font-semibold text-white mb-5">
                  {t(item.title)}
                </h2>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={104}
                  height={104}
                  className="sm:w-[104px] sm:h-[104px] w-[90px] h-[90px]"
                />
                <p className="mt-[26px] text-center text-white font-normal font-poppins text-[16px] leading-[24px]">
                  {t(item.description)}
                </p>
              </div>
            </div>
          ))}
          {/* Mobile Design */}
          {steps.map((item, index) => (
            <div
              key={index}
              className={`lg:hidden block relative lg:w-[399px] lg:h-[450px] xl:h-[414px] rounded-[20px] p-[1px] transition-shadow duration-300 hover:shadow-[0px_0px_25px_0px_#8B5CF6]`}
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)",
              }}
            >
              <div
                className="rounded-[20px] p-[25px] flex items-center flex-col w-full h-full transition-shadow duration-300 hover:shadow-[0px_0px_50px_0px_#8B5CF680_inset] backdrop-blur-[10px]"
                style={{
                  background:
                    "linear-gradient(180deg, #000000 0%, #371866 100%)",
                  boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                }}
              >
                <h2 className="text-[24px] leading-[28.8px] font-semibold text-white mb-5">
                  {t(item.step)}
                </h2>
                <h2 className="text-[24px] leading-[28.8px] font-bold text-white mb-6">
                  {t(item.title)}
                </h2>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={104}
                  height={104}
                  className="sm:w-[104px] sm:h-[104px] w-[90px] h-[90px]"
                />
                <p className="mt-[26px] text-white font-normal font-poppins text-[16px] leading-[24px]">
                  {t(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustNexaSql;
