"use client"
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styling/StakingButton.module.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
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
          {/* Desktop Nav */}
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
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white ml-2"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Open mobile menu"
          >
            {/* Simple Hamburger Icon */}
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 shadow-xl rounded-b-[14px] z-50 animate-fade-in flex flex-col items-center py-6 gap-4">
            <Link href="/" className="w-full text-center py-2" onClick={() => setMobileOpen(false)}>
              <span className="hover:text-[#9B59FF] cursor-pointer text-lg">Home</span>
            </Link>
            <Link href="/services" className="w-full text-center py-2" onClick={() => setMobileOpen(false)}>
              <span className="hover:text-[#9B59FF] cursor-pointer text-lg">Services</span>
            </Link>
            <Link href="/pricing" className="w-full text-center py-2" onClick={() => setMobileOpen(false)}>
              <span className="hover:text-[#9B59FF] cursor-pointer text-lg">Pricing</span>
            </Link>
            <Link href="/about" className="w-full text-center py-2" onClick={() => setMobileOpen(false)}>
              <span className="hover:text-[#9B59FF] cursor-pointer text-lg">About</span>
            </Link>
            <div className="w-full flex justify-center pt-2">
              <ContactButton onClick={() => setMobileOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ContactButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href="/contact" onClick={onClick}>
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
