"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";

export default function About () {
  const { t } = useTranslation();

  const cardData = [
    {
      title: "Who We Are",
      description: "NexaSQL was founded by a team of SQL Server experts — Two ex-Microsoft — with a passion for database reliability and performance.",
    },
    {
      title: "Our Mission",
      description: "To simplify database management for small and medium businesses by providing affordable, expert-led support plans.",
    },
    {
      title: "Why NexaSQL?",
      description: "We combine real-world experience, industry standards, and proactive care to ensure your SQL Server environment runs smoothly, securely, and efficiently.",
    },
  ];
  return (
    <>
    <Header />
     {/* Hero Section */}
     <div className="relative flex flex-col items-center justify-center text-center h-[683px] px-4 md:px-6">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-[#02010380]/50 z-10"></div>
          <video
            className="absolute w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/de-pin/de-pin-bg-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="max-w-[850px] mx-auto z-20 relative">
          <h1 className="text-[40px] md:text-[54px] leading-[48px] md:leading-[74px] font-bold text-white">
            About Us
          </h1>
          <p className="max-w-[665px] mx-auto text-[18px] leading-[30px] font-normal font-poppins text-white mt-[25px]">
          We're a team of SQL Server experts with decades of experience at Microsoft. We've helped dozens of teams scale securely and efficiently.
          </p>
        </div>
      </div>
     


      <div className="  bg-black px-4 md:px-5 py-24 relative overflow-hidden">
      <img
        src="/assets/graphic.svg"
        alt="graphic" 
        className="absolute bottom-0 left-0 w-full"
      />
      <SectionHeading text={"About Us"} />
      <h1 className="px-3 my-[25px] text-[32px] md:text-[40px] leading-[44px] font-bold text-white text-center">
        We're a team of SQL Server experts with decades of experience at Microsoft. We've helped dozens of teams scale securely and efficiently.
      </h1>
      <p className="px-2 text-center text-[18px] leading-[27px] font-normal font-poppins text-white/80 max-w-[653px] mx-auto">
        We're a team of SQL Server experts with decades of experience at Microsoft. We've helped dozens of teams scale securely and efficiently.
      </p>

      {/* Cards Section */}
      <div className="max-w-[1236px] mx-auto grid md:grid-cols-3 grid-cols-2 lg:gap-[47px] gap-[20px] mt-[75px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-[20px] bg-[#12092503] border border-white/40 overflow-hidden min-h-[126px] transition-shadow duration-300 hover:shadow-[0px_0px_25px_0px_#8B5CF6]"
          >
            <div
              className="rounded-[20px] px-[24px] py-[29px] min-h-[126px] flex flex-col items-center justify-center text-center gap-[15px] w-full h-full flex-1"
              style={{
                boxShadow: "0px 0px 50px 0px #8B5CF680 inset",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2 className="text-[24px] font-bold text-white">{card.title}</h2>
              <p className="text-white font-poppins font-[400] text-[16px] whitespace-pre-line">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex w-full justify-center items-center mt-[60px] lg:pb-[154px]">
        
      </div>
    </div>
      <Footer />
    </>
  );
} 