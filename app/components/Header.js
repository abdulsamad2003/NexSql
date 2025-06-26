"use client"
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styling/StakingButton.module.css";

const Header = () => {
  return (
    <div className="px-4">
      <div
        className="fixed top-0 z-40 lg:top-8 left-1/2 backdrop-blur-none md:backdrop-blur-[94.2px] -translate-x-1/2 lg:max-w-[1086px] w-full py-2.5 lg:py-2 px-4 flex justify-center bg-black md:bg-[#44067503] lg:rounded-[14px] border border-white/15 lg:border-[#9685afbd]"
        style={{
          boxShadow: "0px 0px 6px 2px #9B59FF inset",
        }}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="cursor-pointer">
            <h1 className="text-[24px] leading-[28.8px] font-bold text-white">NexaSQL</h1>
          </Link>
          <ul className="hidden lg:flex items-center space-x-6 text-white mx-auto">
            <li>
              <Link href="/">
                <span className="hover:text-[#9B59FF] cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span className="hover:text-[#9B59FF] cursor-pointer">Services</span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span className="hover:text-[#9B59FF] cursor-pointer">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-[#9B59FF] cursor-pointer">About</span>
              </Link>
            </li>
          </ul>
          <div className="hidden lg:block">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href="/contact">
      <div
        className={`${styles.stakingButton} h-[41px] ${isHovered ? styles.hovered : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ minWidth: 120 }}
      >
        <div className={styles.gradientBorder} />
        <div className={`${styles.buttonContent} px-[35px]`}>Contact</div>
        <div className={styles.glowEffect} />
      </div>
    </Link>
  );
};

export default Header;
