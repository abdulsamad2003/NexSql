"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RWAContent from "../components/RWA/RWAContent";
import { useTranslation } from "react-i18next";       

export default function Services() {
  const { t } = useTranslation();
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
          <source src="/assets/rwa/rwa.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="max-w-[984px] mx-auto z-20 relative">
        <h1 className="text-[40px] md:text-[54px] leading-[48px] md:leading-[74px] font-bold text-white">
        Our Services
        </h1>
        <p className="max-w-[701px] mx-auto text-[18px] leading-[30px] font-normal font-poppins text-white mt-[25px]">
        Expert SQL Server services tailored to keep your databases healthy, fast, and secure.
        </p>
      </div>
    </div>

    <RWAContent />

    <Footer />
    </>
  );
} 