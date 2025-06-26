import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const FeaturedIn = () => {
  const { t } = useTranslation();
  const logos = [
    "Database Health Checks",
    "Performance Tuning",
    "Monitoring & Alerts",
    "Backup & Recovery Strategy",
    "Security Review",
    "Migration & Upgrade"
  ];

  return (
    <div className="bg-black w-full pl-[26px]">
      <div className="max-w-[1267px] mx-auto w-full py-[46px] sm:py-[57px] flex items-center gap-[26px]">
        <h2 className="text-white text-[24px] sm:text-[32px] font-bold leading-[26px] text-nowrap">
          {t("home.featuredIn.title")}
        </h2>
        <div className="flex-1 overflow-hidden relative">
          {/* Left gradient overlay */}
          <div
            className="w-[100px] sm:w-[161px] absolute left-0 top-0 bottom-0 z-10"
            style={{
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
            }}
          />

          {/* Sliding container */}
          <div
            className="flex items-center gap-[47px]"
            style={{
              animation: "backAndForth 10s linear infinite",
            }}
          >
             {[...logos, ...logos, ...logos].map((logo, index) => (
              <div className="text-white text-[24px] sm:text-[32px] font-bold leading-[26px] text-nowrap" key={index}>
                {logo}
              </div>  
            ))}
          </div>

          {/* Right gradient overlay */}
          <div
            className="w-[100px] sm:w-[161px] absolute right-0 top-0 bottom-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
            }}
          />

          <style jsx>{`
            @keyframes backAndForth {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-50% + 47px));
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
