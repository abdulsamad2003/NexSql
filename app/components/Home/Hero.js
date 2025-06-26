import React, { useState } from "react";

import styles from "../../styling/StakingButton.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Hero = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center lg:items-start justify-between lg:flex-row flex-col gap-[52px] lg:gap-5">
      <div className="lg:max-w-[609px] text-white">
        {/* <div className="mb-[30px] w-fit px-[14px] h-[42px] bg-[#170326] rounded-[50px] border border-[#FFFFFF26] flex items-center gap-2 justify-center animate-pulse-shadow">
          <div className="bg-[#9B59FF] px-[5px] w-fit h-[18px] rounded-[40px] flex items-center justify-center inter text-black text-[10px] leading-[26px] tracking-[-0.01em] font-bold">
            {t("home.hero.new")}
          </div>
          <h2 className="text-[#9B59FF] text-[16px] leading-[26px] font-normal tracking-[-0.01em]">
            {t("home.hero.integrationLive")}
          </h2>
        </div> */}

        <h1
          className="text-[40px] leading-[48px] sm:text-[45px] lg:text-[54px] lg:leading-[74px] font-bold bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(291.9deg, #FFFFFF 62.65%, #000000 108.48%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Reliable SQL Server Support, Built for SMBs
        </h1>

        <p className="my-[30px] text-[18px] leading-[30px] font-normal font-poppins text-white/80 lg:max-w-[496px]">
          Run your business, we’ll take care of your databases — starting at
          just $199/month.
        </p>

        <div className="flex items-center gap-[30px]">
          <Link href="/contact">
            <div
              className={`${styles.stakingButton} h-[41px] ${
                isHovered ? styles.hovered : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ minWidth: 120 }}
            >
              <div className={styles.gradientBorder} />
              <div className={`${styles.buttonContent} px-[35px]`}>Contact</div>
              <div className={styles.glowEffect} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
