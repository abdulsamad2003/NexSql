"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import Button from "./Button";
import LanguageDropdown from "./LanguageDropdown";

const MobileMenu = ({
  mobileOpen,
  setMobileOpen,
  navLinks,
  dropdownOpen,
  setDropdownOpen,
  btnText,
}) => {
  const router = useRouter();

  return (
    <div className="lg:hidden min-w-full fixed min-h-screen top-0 z-50 left-0 w-full bg-black p-6">
      <button
        className="lg:hidden flex items-end justify-end w-full text-white sticky z-50"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FaTimes size={24} /> : null}
      </button>
      <ul className="text-white space-y-4">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            link={link}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        ))}
      </ul>

      <div className="mt-4 space-y-4">
        <LanguageDropdown />
        <Button href="/staking" translationKey={btnText} />
      </div>
    </div>
  );
};

export default MobileMenu;
