"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';


const Footer = () => {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const detectAndSetLanguage = () => {
      const storedLang =
        localStorage.getItem("selectedLanguage") ||
        localStorage.getItem("i18nextLng");

      const normalizeLanguage = (lang) => {
        const validLangs = ['en', 'es', 'fr', 'de', 'bn', 'hi', 'it', 'de', 'ja', 'pt-BR', 'ru'];
        return validLangs.includes(lang) ? lang : 'en';
      };

      const langFromPath = typeof window !== 'undefined'
        ? window.location.pathname.split("/")[1]
        : null;

      const finalLang = normalizeLanguage(langFromPath || storedLang || 'en');

      if (finalLang !== currentLang) {
        console.log("Footer: Setting language to", finalLang);
        setCurrentLang(finalLang);
        i18n.changeLanguage(finalLang);
        localStorage.setItem("i18nextLng", finalLang);
      }
    };

    if (typeof window !== 'undefined') {
      detectAndSetLanguage();
    }
  }, [currentLang]);


  // newsletter
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    let timeoutId;

    if (alert.show && alert.type === 'success') {
      timeoutId = setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
      }, 5000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [alert]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    setAlert({ show: false, message: '', type: '' });

    if (!email) {
      setAlert({
        show: true,
        message: 'Please enter an email address',
        type: 'error'
      });
      return;
    }

    if (!validateEmail(email)) {
      setAlert({
        show: true,
        message: 'Please enter a valid email address',
        type: 'error'
      });
      return;
    }

    setAlert({
      show: true,
      message: 'Successfully subscribed!',
      type: 'success'
    });

    setEmail('');
  };

  const createLocalizedPath = (path) => {
    return `/${currentLang}${path}`.replace("//", "/");
  };

  // Social Links
  const socialLinks = [
    {
      name: 'Twitter',
      href: '',
      icon: '/assets/icons/twitter.svg'
    },
    {
      name: 'Telegram',
      href: '',
      icon: '/assets/icons/telegram.svg'
    },
    {
      name: 'Medium',
      href: '',
      icon: '/assets/icons/m.svg'
    },
    {
      name: 'Linktree',
      href: '',
      icon: '/assets/icons/tree.svg'
    }
  ];

  // Footer Links
  const footerLinks = [
   
    {
      category: 'company',
      title: "Links",
      links: [
        {
          name: "Home ",
          href: "/"
        },
        { 
          name: "Services",
          href: "/services"
        },
        {
          name: "Pricing",
          href: "/pricing"
        },
        {
          name: "About",
          href: "/about"
        }
      ]
    },
  ];

  // Localize the links
  const localizedFooterLinks = footerLinks.map(category => ({
    ...category,
    links: category.links.map(link => ({
      ...link,
      href: createLocalizedPath(link.href)
    }))
  }));

  return (
    <div
      className="border-t border-solid px-[25px]"
      style={{
        borderTopWidth: "1px",
        borderImageSource:
          "linear-gradient(270deg, rgba(139, 92, 246, 0) 0%, #9E52FE 35%, #9E52FE 50%, #9E52FE 65%, rgba(139, 92, 246, 0) 100%)",
        borderImageSlice: 1,
      }}
    >
      <div className="max-w-[1162px] mx-auto w-full pt-[25px] sm:py-[60px] lg:pt-[120px] pb-[33px]">
        {/* Links */}
        <div className="pb-[50px] flex items-start justify-between lg:flex-row flex-col gap-[50px] lg:gap-5">
          <div>
            <h1 className="text-white text-[24px] leading-[32px] font-bold font-poppins">NexaSQL</h1>
            <p className="max-w-[373px] pt-5 pb-8 md:pb-10 text-[14px] text-white leading-[21px] font-normal font-poppins">
            Reliable SQL Server Management & Optimization for Growing Businesses <br /> 24/7 Expert Support Tailored to Small and Mid-Sized Enterprises
            </p>
            <div className="flex items-center gap-[27px]">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:max-w-[528px] w-full grid grid-cols-2 sm:flex items-start justify-between gap-10 sm:gap-5">
            {localizedFooterLinks.map((category) => (
              <div
                key={category.category}
                className="w-full flex items-start justify-center flex-col"
              >
                <h2 className="mb-6 text-white text-[16px] leading-[24px] font-bold font-poppins">
                  {category.title}
                </h2>
                <ul className="space-y-[14px]">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white text-[14px] leading-[21px] font-normal font-poppins"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

  
          <div className="flex items-center gap-[18px]">
           
          <h3 className="text-white text-[14px] font-normal font-poppins">
          © 2025 NexaSQL — A brand of NXQL Technologies Pvt Ltd. All rights reserved.
          </h3>
          </div>
        
      </div>
    </div>
  );
};

export default Footer;