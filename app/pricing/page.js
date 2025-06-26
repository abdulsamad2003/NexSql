"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import RoadMap from "../components/Home/RoadMap";
import TrustNexaSql from "../components/Home/TrustNexaSql";

export default function Pricing() {
  const { t } = useTranslation();
  return (
    <>
    <Header />
     {/* Hero Section */}
     <div className="relative ai-utility-hero flex flex-col items-center justify-center text-center overflow-y-hidden min-h-screen px-6">
        {/* Hero Content */}
        <div className="max-w-[821px] mx-auto">
          <h1 className="text-[40px] md:text-[54px] leading-[48px] md:leading-[74px] font-bold text-white">
          Work With SQL Experts. Without Hiring Full-Time.
          </h1>
          <p className="max-w-[665px] mx-auto text-[18px] leading-[30px] font-poppins text-white mt-[30px] md:mt-[25px]">
          We help growing businesses avoid database disasters, speed up performance, and scale with confidence — all at a fraction of the cost of hiring in-house DBAs.
          </p>
        </div>
      </div>
      <RoadMap></RoadMap>
      <TrustNexaSql></TrustNexaSql> 
      <Footer />
    </>
  );
} 