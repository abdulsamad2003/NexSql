import SectionHeading from "../SectionHeading";
import { useTranslation } from "react-i18next";
import Image from 'next/image';

export default function RoadMap() {
  const { t } = useTranslation();
  const phaseData = [
    {
      quarter: "Starter Partnership Plan",
      title: "$199/month",
      items: [
        "Designed for businesses ready to get serious about their SQL Server stability and growth.",
        "5 hours of dedicated SQL Server support",
        "One free annual health check ($2500 value)",
        "Onboarding call with a Microsoft-experienced DBA",
        "Performance tuning, index fixes, slow query help",
        "Cancel anytime — zero risk",
        "Get Started"
      ],
    },
    {
      quarter: "🚀 Limited Time Offer",
      title: "Lock in $199/month before prices increase in Q3 2025",
      items: [
        "This is our introductory rate for early adopters. Most SQL consultants charge $200/hour — we're offering ongoing monthly help for less than that.",
        "Limited slots available",
        "Secure My Spot",
        
      ],
    },
   
  ];

  return (
    <div
      id="roadmap"
      className="bg-black px-4 md:px-5 py-24 relative overflow-hidden"
    >
      <Image
        src="/assets/roadmap-bg.svg"
        alt="bg-graphic"
        className="absolute bottom-0 left-0 w-full object-cover  md:block hidden"
        width={1920}
        height={1080}
      />
      <Image
        src="/assets/roadmap-bg-mobile.png"
        alt="bg-graphic"
        className="absolute bottom-0 left-0 w-full object-cover block md:hidden"
        width={640}
        height={360}
      />
      <SectionHeading text={t("home.roadMap.subTitle")} />
      <h1 className="my-[25px] text-[32px] md:text-[40px] leading-[44px] font-bold text-white text-center">
        Choose the right support plan for your business.
      </h1>
      <p className="text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80 max-w-[653px] mx-auto">
      Empowering growing businesses with expert SQL support — minimizing risk, maximizing speed, and scaling smoothly, without the overhead of a full-time DBA team.
      </p>

      {/* Cards Section */}
      <div className="max-w-[1236px] mx-auto grid lg:grid-cols-2 justify-items-center sm:grid-cols-2 md:gap-[28px] gap-[16px] mt-[75px] pb-[40px]">
        {phaseData.map((phase, index) => (
          <div
            key={index}
            className="rounded-[20px] bg-[#12092503]  border border-[#FFFFFF80] overflow-hidden min-h-[350px] h-full transition-shadow duration-300 hover:shadow-[0px_0px_25px_0px_#8B5CF6] flex flex-col"
          >
            <div
              className="text-white rounded-[20px] px-[20px] pt-[11px] pb-[19px] flex flex-col w-full flex-1"
              style={{
                boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="text-[20px] mb-[12px]">{phase.quarter}</h3>
              <h2 className="text-[20px] font-bold mb-[18px]">{phase.title}</h2>
              <ul className="space-y-2 mb-4">
                {phase.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-poppins font-[400] flex items-center gap-2"
                  >
                    <span className="w-1 min-w-1 h-1 bg-white rounded-full me-1"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-auto inline-block w-full text-center bg-[#9B59FF] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#7d3c98] transition cursor-pointer"
              >
                {index === 0 ? "Get Started" : "Secure My Spot"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
