import Image from "next/image";
import React from "react";
import LocalizedButtonLink from "../Button";
import { useTranslation } from "react-i18next";

const RWAContent = () => {
  const { t } = useTranslation();

  const featuresData = [
    {
      id: 1,
      title: "Database Health Checks",
      description: "Comprehensive review of your SQL Server configuration, performance, and security with actionable insights.",
      imageSrc: "/assets/rwa/1.webp",
      reversed: false,
    },
    {
      id: 2,
      title: "Performance Tuning",
      description: "Identify slow queries, optimize indexes, and improve overall database responsiveness and uptime.",
      imageSrc: "/assets/rwa/2.webp",
      reversed: true,
    },
    {
      id: 3,
      title: "Monitoring & Alerts",
      description: "Set up proactive monitoring for availability, performance, and resource usage to prevent downtime.",
      imageSrc: "/assets/rwa/3.webp",
      reversed: false,
    },
    {
      id: 4,
      title: "Backup & Recovery Strategy",
      description: "Design and validate robust backup and recovery plans to safeguard your critical data.",
      imageSrc: "/assets/rwa/4.webp",
      reversed: true,
    },
    {
      id: 5,
      title: "Security Review",
      description: "Audit and harden user permissions, roles, and data access to align with best practices.",
      imageSrc: "/assets/rwa/1.webp",
      reversed: false,
    },
    {
      id: 6,
      title: "Migration & Upgrade",
      description: "Plan and execute migrations from legacy SQL Server versions to modern, supported environments.",
      imageSrc: "/assets/rwa/2.webp",
      reversed: true,
    },
  ];

  return (
    <div className="px-5">
      <div className="py-[50px] md:py-[80px] lg:py-[113px] max-w-[986px] mx-auto w-full flex items-center justify-between lg:flex-row flex-col gap-10 lg:gap-4">
        <Image
          src="/assets/rwa/about-rwa.webp"
          alt="white-image"
          width={425}
          height={410}
          className="rounded-[10px] mix-blend-screen bg-transparent"
        />
        <div className="lg:max-w-[488px] lg:text-left text-center">
          <h2 className="text-white text-[32px] leading-[48px] font-bold mb-5">
          Expert SQL Server Support for Every Business.
          </h2>
          <p className="text-white/80 text-[18px] leading-[27px] font-normal font-poppins">
          NexaSQL delivers tailored SQL Server solutions that ensure your databases remain healthy, high-performing, and secure. From performance tuning and automated backups to disaster recovery and real-time monitoring, our team handles every detail—so your business runs without a hitch. With proactive optimization and scalable support plans, NexaSQL is your partner in reliable data infrastructure.
          </p>
        </div>
      </div>

      <h1 className="pt-[80px] lg:pt-0 max-w-[650px] mx-auto w-full text-center text-white text-[32px] md:text-[40px] leading-[48px] md:leading-[60px] font-bold">
        Our Services
      </h1>

      <div className="pt-8 md:mt-[100px] max-w-[1236px] w-full mx-auto pb-[300px] h-full">
        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`${
              index === 1
                ? "my-6 lg:flex-row flex-col-reverse gap-6"
                : "mt-5  last:lg:flex-row last:flex-col-reverse"
            } flex items-center lg:items-start lg:flex-row flex-col w-full gap-6 lg:h-[400px]`}
          >
            {feature.reversed ? (
              <>
                <div
                  className="relative lg:flex-1 h-full rounded-[10px] p-[1px]"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)",
                  }}
                >
                  <div
                    className="rounded-[10px] py-[25px] sm:py-[40px] md:py-[60px] px-4 md:px-10 flex items-start justify-center flex-col w-full h-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #000000 0%, #371866 100%)",
                      boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                    }}
                  >
                    <h2 className="text-[28px] sm:text-[32px] leading-[31px] font-bold text-white mb-5">
                      {feature.title}
                    </h2>
                    <p className="text-white/80 font-normal font-poppins text-[18px] leading-[27px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <Image
                  src={feature.imageSrc}
                  alt="image"
                  width={472}
                  height={400}
                  className="rounded-[10px] border border-[#7E0ADB] min-h-[400px] object-cover"
                />
              </>
            ) : (
              <>
                <Image
                  src={feature.imageSrc}
                  alt="image"
                  width={472}
                  height={400}
                  className="rounded-[10px] border border-[#7E0ADB]  min-h-[400px] object-cover"
                />
                <div
                  className="relative flex-1 h-full rounded-[10px] p-[1px]"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, #959595 0deg, #2F2F2F 36.1deg, #2F2F2F 77.33deg, #2F2F2F 131.17deg, #2F2F2F 163.25deg, #959595 180.4deg, #2F2F2F 196.46deg, #2F2F2F 238.85deg, #2F2F2F 299.56deg, #959595 360deg)",
                  }}
                >
                  <div
                    className="rounded-[10px] py-[25px] sm:py-[40px] md:py-[60px] px-4 md:px-10 flex items-start justify-center flex-col w-full h-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #000000 0%, #371866 100%)",
                      boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                    }}
                  >
                    <h2 className="text-[28px] sm:text-[32px] leading-[31px] font-bold text-white mb-5">
                      {feature.title}
                    </h2>
                    <p className="text-white/80 font-normal font-poppins text-[18px] leading-[27px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RWAContent;
