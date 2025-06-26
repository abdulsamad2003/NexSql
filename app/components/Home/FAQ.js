"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SectionHeading from "../SectionHeading";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const FAQData = [
  {
    question: "What types of businesses can benefit from NexaSQL?",
    answer: "NexaSQL is designed specifically for small and mid-sized businesses (SMBs) that rely on SQL Server for managing their data. Whether you run an e-commerce store, SaaS platform, logistics company, or a professional services firm, our support scales to fit your operational needs.",
  },
  {
    question: "Do you only support Microsoft SQL Server, or other databases too?",
    answer: "Our core expertise lies in Microsoft SQL Server, including all editions and deployments (on-premises and cloud). However, we also offer consulting for database migration and integration if you're using or moving to platforms like Azure SQL, PostgreSQL, or MySQL.",
  },
  {
    question: "What if I don’t have an in-house IT team?",
    answer: "No problem. NexaSQL is perfect for businesses without dedicated IT or database administrators. Our team acts as your remote DBAs, handling everything from setup, tuning, backups, to performance optimization — so you don’t have to hire internally.",
  },
  {
    question: "How do I get started with NexaSQL?",
    answer: "It's easy! Just reach out to us, and we'll schedule a consultation to discuss your specific needs. We'll provide a tailored quote based on your requirements, and you can start benefiting from our support right away.",
  },
  {
    question: "Can you help us migrate or upgrade our SQL Server?",
    answer: "Absolutely. We offer full support for SQL Server upgrades, version migrations, and platform transitions (like moving to Azure SQL). We handle schema design, data integrity checks, downtime planning, and post-migration testing to ensure a smooth transition.",
  },
];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (clickedIndex) => {
    setOpenIndex(clickedIndex === openIndex ? openIndex : clickedIndex);
  };

  return (
    <div
      id="faqs"
      className="px-4 md:px-5 pt-[40px] md:pt-20 pb-[83px] md:pb-[120px] relative"
      style={{
        background: `radial-gradient(32.52% 50% at 50% 50%, rgba(132, 45, 255, 0.25) 0%, rgba(2, 1, 3, 0.25) 100%)`,
      }}
    >
      <SectionHeading text={t("home.faqs.title")} />
      <h1 className="my-[25px] text-[32px] md:text-[40px] leading-[44px] font-bold text-white text-center">
        {t("home.faqs.subtitle")}
      </h1>
      <div className="max-w-[1090px] mx-auto space-y-4 mt-8 md:mt-[60px]">
        {FAQData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl p-[15px] md:px-[36px] md:py-[16px] transition-all duration-500 ease-in-out ${
                isOpen ? "bg-purple-900/20" : "bg-purple-900/10"
              } backdrop-blur-xl overflow-hidden cursor-pointer border border-[#7E0ADB]`}
              style={
                isOpen
                  ? {
                      background:
                        "linear-gradient(180deg, rgba(139, 92, 246, 0) 20.83%, rgba(139, 92, 246, 0.2) 100%)",
                    }
                  : {}
              }
              onClick={() => handleClick(index)}
            >
              <button
                className="w-full text-left flex items-center justify-between relative"
                aria-expanded={isOpen}
              >
                <span className="text-white text-[18px] leading-[27px] font-semibold font-poppins">
                  {t(faq.question)}
                </span>
                <div
                  className={`transition-transform duration-300 ${
                    isOpen ? "" : "rotate-180"
                  }`}
                >
                  <Image
                    src="/assets/icons/faq-arrow.svg"
                    alt="faq-arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "pt-[14px] max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-white/80 text-base md:text-[18px] leading-[27px] font-poppins pr-5">
                  {t(faq.answer)}
                </div>
              </div>

              {/* Border and Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                  isOpen || "hover:opacity-100"
                } ${
                  isOpen ? "opacity-100" : "opacity-0"
                } border border-purple-500/30 shadow-[0_0_15px_-3px_rgba(147,51,234,0.3)] pointer-events-none`}
              />

              {/* Inner Shadow */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
