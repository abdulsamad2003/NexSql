"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import useLanguage from "../../hooks/useLanguage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StakingSection from "../../components/Staking/StakingSection";
import Referral from "../../components/Staking/Referral";
import Leaderboard from "../../components/Staking/Leaderboard";
import { useTranslation } from "react-i18next";

const Staking = () => {
  useLanguage();
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <div className="pt-[130px] lg:pt-[140px] pb-[167px] px-4 sm:px-[25px]">
        <div
          className="w-full max-w-[1160px] mx-auto rounded-[20px] lg:py-7 p-[15px] lg:px-[20px] bg-[#10002080] border border-[#8616DF]"
          style={{ backdropFilter: "blur(14px)" }}
        >
          {/* Total $VRN Balance & Staking Reward & Your Referral Earnings */}
          <div className="w-full flex items-center gap-[20px] justify-between lg:flex-row flex-col">
            <div className="w-full relative px-[15px] sm:px-5 py-[12px] lg:py-[12px] flex lg:flex-col flex-row lg:items-start items-center justify-between rounded-[10px] lg:rounded-[12px] shadow-custom">
              <h3 className="text-white text-[18px] leading-[24px] font-normal">
                {t("staking.totalVRNBalance")}
              </h3>
              <h2 className="text-white text-[24px] leading-[38.4px] font-normal">
                0
              </h2>
            </div>
            <div className="w-full relative px-[15px] sm:px-5 py-[12px] lg:py-[12px] flex lg:flex-col flex-row lg:items-start items-center justify-between rounded-[10px] lg:rounded-[12px] shadow-custom">
              <h3 className="text-white text-[18px] leading-[24px] font-normal">
                {t("staking.stakingReward")}
              </h3>
              <h2 className="text-white text-[24px] leading-[38.4px] font-normal">
                0
              </h2>
            </div>
            <div className="w-full relative px-[15px] sm:px-5 py-[12px] lg:py-[12px] flex lg:flex-col flex-row lg:items-start items-center justify-between rounded-[10px] lg:rounded-[12px] shadow-custom">
              <h3 className="text-white text-[18px] leading-[24px] font-normal">
                {t("staking.referralEarnings")}
              </h3>
              <h2 className="text-white text-[24px] leading-[38.4px] font-normal">
                0
              </h2>
            </div>
          </div>

          <StakingSection />

          {/* Referral & Leaderboard */}
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-[20px]">
            <Referral />
            <Leaderboard />
          </div>
        </div>
      </div>
      <Footer />
    </I18nextProvider>
  );
};

export default Staking;
