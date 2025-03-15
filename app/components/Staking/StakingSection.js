import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styling/StakingButton.module.css";
import { useAppKit } from "@reown/appkit/react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { ethers } from "ethers";
import Web3 from "web3";
import tokenAbi from "../contractABI/tokenAbi";
import stakingAbi from "../contractABI/stakingAbi";
import { getClient } from "../../config/blockchain";
import toast from "react-hot-toast";
import { parseEther } from "viem";

// setup blockchain here 
const Provider = new Web3.providers.HttpProvider("https://rpc.ankr.com/eth");
const web3 = new Web3(Provider);
let myStakes = [];
const StakingSection = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);
  const [stakeAmount, setStakeAmount] = useState("");
  const [numericStakeAmount, setNumericStakeAmount] = useState(0);
  const [estimatedProfit, setEstimatedProfit] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [unlockDate, setUnlockDate] = useState("");

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const parseInput = (input) => {
    return input.replace(/,/g, "");
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    value = value.replace(/VRN/g, "").replace(/[^0-9.]/g, "");

    const decimalCount = (value.match(/\./g) || []).length;
    if (decimalCount > 1) {
      value = value.substring(0, value.lastIndexOf("."));
    }

    const numericValue = parseFloat(value) || 0;
    setNumericStakeAmount(numericValue);
    if (value) {
      const parts = value.split(".");
      if (parts.length > 1) {
        const formattedInt = formatNumberWithCommas(parts[0]);
        setStakeAmount(`${formattedInt}.${parts[1].substring(0, 2)}`);
      } else {
        setStakeAmount(formatNumberWithCommas(value));
      }
    } else {
      setStakeAmount("");
    }
  };

  const handleMaxClick = () => {
    const maxValue = 100000;
    setNumericStakeAmount(maxValue);
    setStakeAmount(formatNumberWithCommas(maxValue.toFixed(2)));
  };

  useEffect(() => {
    if (numericStakeAmount > 0) {
      const selectedOption = stakingOptions[selectedPeriodIndex];
      const aprPercentage =
        parseFloat(selectedOption.apr.replace("%", "")) / 100;
        
        const profit = (numericStakeAmount * aprPercentage) 
        setEstimatedProfit(profit);
        setTotalAmount(numericStakeAmount + profit);
        
        
      const periodDays = parseInt(selectedOption.period.split(" ")[0]);
      
      const currentDate = new Date();
      currentDate.setMonth(currentDate.getDate() + periodDays);
      const month = currentDate.toLocaleString("default", { month: "short" });
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      setUnlockDate(
        `${month} ${day} ${year}, ${hours}:${minutes < 10 ? "0" + minutes : minutes
        }`
      );
    } else {
      setEstimatedProfit(0);
      setTotalAmount(0);
      setUnlockDate("");
    }
  }, [numericStakeAmount, selectedPeriodIndex]);


  // Staking options
  const stakingOptions = [
    {
      period: t("home.rewardsCalculator.cards.0.title"), // This will get the translated text for each period
      apr: "300%",
      bgColor: "#1C0035",
      textColor: "text-[#C176FF]",
    },
    {
      period: t("home.rewardsCalculator.cards.1.title"),
      apr: "700%",
      bgColor: "#1C0035",
      textColor: "text-[#C176FF]",
    },
    {
      period: t("home.rewardsCalculator.cards.2.title"),
      apr: "1200%",
      bgColor: "#1C0035",
      textColor: "text-[#C176FF]",
    },
    {
      period: t("home.rewardsCalculator.cards.3.title"),
      apr: "1900%",
      bgColor: "#1C0035",
      textColor: "text-[#C176FF]",
    },
  ];

  // Map periods to days
  const weekDays = {
    "3M": 90,
    "6M": 180,
    "9M": 270,
    "12M": 360,
  };
  const [days, setDays] = useState(90);
  const handlePeriodSelect = (index) => {
    setSelectedPeriodIndex(index);

    const selectedOption = stakingOptions[index].option;
    setDays(weekDays[stakingOptions] || 0);
  };

    // web3 related functionality
    const { open } = useAppKit();
    const { address, isConnected } = useAccount();
    const {  writeContractAsync } = useWriteContract()
    const stakeAddress = "0x2bf950f5789c4859fcf89c9a84bbfc30c3e244c9";
    const tokenAddress = "0x888632bb147ba407d85f1881a817c0481ff8dcda";
    const [tokenBalance, setTokenBalance] = useState(0);
    const [allowance, setAllowance] = useState(0);
    const notifyErrorMsg = (msg) => toast.error(msg);
    const notifySuccess = (msg) => toast.success(msg);
    const [stakeButtonText, setStakeButtonText] = useState("Stake Now");

    // fetch all data from token and stake contract
    const {data: balanceTokenData} = useReadContract({
      abi: tokenAbi.abi,
      address: tokenAddress,
      functionName: 'balanceOf',
      args: [address],
    })

  const { data: stakeData } = useReadContract({
    abi: stakingAbi.abi,
    address: stakeAddress,
    functionName: 'getUserStakes',
    args:[address],
  })


      // Fetch 3 Month Reward Rate
  const { data: rewardRate3MData } = useReadContract({
    abi: stakingAbi.abi,
    address: stakeAddress,
    functionName: 'rewardRate3Months',
  })
  
  // Fetch 6 Month Reward Rate
  const { data: rewardRate6MData } = useReadContract({
    abi: stakingAbi.abi,
    address: stakeAddress,
    functionName: 'rewardRate6Months',
  })

  // Fetch 9 Month Reward Rate
  const { data: rewardRate9MData } = useReadContract({
    abi: stakingAbi.abi,
    address: stakeAddress,
    functionName: 'rewardRate9Months',
  })

  // Fetch 12 Month Reward Rate
  const { data: rewardRate12MData } = useReadContract({
    abi: stakingAbi.abi,
    address: stakeAddress,
    functionName: 'rewardRate12Months',
  })

async function handleStakeToken(){
  console.log("token:", tokenBalance)
    if(numericStakeAmount >  tokenBalance) {
      notifyErrorMsg("Insufficient Token Balance") 
      return;
    }
    if(numericStakeAmount <=  0) {
      notifyErrorMsg("please enter amount") 
      setStakeButtonText("Stake Now")
      return;
    }

    const publicClient = getClient()
    if(!publicClient) {
      notifyErrorMsg("Please connect to wallet")
      return;
    }

    if(allowance < stakeAmount) {
      try{
        setStakeButtonText("Approving...")

        const hash = await writeContractAsync({
          abi: tokenAbi.abi,
          address: tokenAddress,
          functionName: 'approve',
          args: [stakeAddress, parseEther(stakeAmount.toString())]
        })
      const txn = await publicClient.waitForTransactionReceipt( { hash } );

      if(txn.status === "success") {
        notifySuccess("Token Approved Successfully")
        setStakeButtonText("Staking...")
        const hash = await writeContractAsync({
          abi: stakingAbi.abi,
          address: stakeAddress,
          functionName: 'stakeVRN',
          args: [parseEther(stakeAmount.toString()), days*86400]
        })
        const txn2 = await publicClient.waitForTransactionReceipt( { hash } );
        if(txn2.status === "success") {
          notifySuccess('Staked `'+stakeAmount+'` CYNQ Successfully')
          setStakeButtonText("Stake Now")
        } else {
          notifyErrorMsg("Error in staking after approved")
          console.log("erre",error);
          setStakeButtonText("Stake Now")
        }
      }
    }
    catch(error){
      notifyErrorMsg("Error in staking", error)
      console.log("erre",error);
      setStakeButtonText("Stake Now")
    }
  }
  else{
      try{
        setStakeButtonText("Staking...")
        const hash = await writeContractAsync({
          abi: stakingAbi.abi,
          address: stakeAddress,
          functionName: 'stakeVRN',
          args: [parseEther(stakeAmount.toString()),days*86400]
        })
        const txn = await publicClient.waitForTransactionReceipt( { hash } );
        if(txn.status === "success") {
          notifySuccess('Staked `'+stakeAmount+'` CYNQ Successfully')
          setStakeButtonText("Stake Now")
        }
      }catch(error){
        console.log("erre",error);
        setStakeButtonText("Stake ")
        if (error instanceof Error && "shortMessage" in error) {
          notifyErrorMsg(error.shortMessage);
        } else {
            notifyErrorMsg("An unknown error occurred.");
        };
      }
    }

  }

  useEffect(() => {
    if(rewardRate3MData){
      const selectedOption = stakingOptions[selectedPeriodIndex];
      selectedOption.apr = rewardRate3MData.toString();
      console.log(selectedOption.apr)
    }
    if(rewardRate6MData){
      const selectedOption = stakingOptions[selectedPeriodIndex];
      selectedOption.apr = rewardRate6MData.toString();
      console.log(selectedOption.apr)
    }
    if(rewardRate9MData){
      const selectedOption = stakingOptions[selectedPeriodIndex];
      selectedOption.apr = rewardRate9MData.toString();
      console.log(selectedOption.apr)
    }
    if(rewardRate12MData){
      const selectedOption = stakingOptions[selectedPeriodIndex];
      selectedOption.apr = rewardRate12MData.toString();
      console.log(selectedOption.apr)
    }
    if(isConnected) {
      if (balanceTokenData) {
        const balance = web3.utils.fromWei(balanceTokenData.toString(), 'ether')
        setTokenBalance(Number(balance));
        console.log("balance", balance)
      }


      // if(Array.isArray(stakeData)){
      //   myStakes = stakeData;
      //     let total = 0;
      //     for(let i = 0;i < stakeData.length; i++){
      //       total += Number(ethers.formatUnits(stakeData[i].amount.toString(),'ether'));
      //       setMyStakeAmount(total.toString())
      //      // console.log(stakeData[i]);
      //     }
      // }
    }
  }, [isConnected, balanceTokenData, rewardRate3MData, rewardRate6MData, rewardRate9MData, rewardRate12MData])
  return (
    <div className="mt-[20px] rounded-[12px] bg-[#0B0015] border border-[#440675] px-2.5 pb-5 pt-2.5 lg:p-[20px]">
      <h2 className="text-white text-[22px] leading-[28.8px] font-bold lg:text-left text-center">
        {t("staking.stakingSection.title")}
      </h2>

      <div className="staking-section mt-[15px] md:mt-4 flex flex-row lg:items-start items-center justify-between rounded-[10px] lg:rounded-[12px] border border-[#440675] bg-[#1C0035] py-[14px] px-5">
        <h2 className="text-[#FFFFFF] text-[18px] leading-[24px] font-normal">
          {t("staking.stakingSection.totalStaking")}
        </h2>
        <h3 className="text-white text-[22px] leading-[24px] font-normal">
          0
        </h3>
      </div>

      <div className="my-[15px] lg:my-[20px] grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4 lg:gap-[20px]">
        {stakingOptions.map((option, index) => {
          const isSelected = index === selectedPeriodIndex;
          return (
            <div
              key={index}
              className="border border-[#9442ED] rounded-xl w-full px-[13px] py-3 cursor-pointer"
              style={{
                backdropFilter: "blur(20px)",
                background: isSelected
                  ? "radial-gradient(42.46% 123.69% at 57.02% 58.9%, #A761FF 0%, #490A84 100%)"
                  : option.bgColor,
              }}
              onClick={() => handlePeriodSelect(index)}
            >
              <div className="flex md:items-center justify-between md:flex-row items-start flex-col gap-1.5 lg:gap-2 mb-2">
                <h2 className="text-white text-[18px] leading-[24px] font-normal">
                  {/* {t("staking.stakingSection.stakingPeriod")} */}
                  {option.period}
                </h2>
                {/* <h2 className="text-white text-[18px] leading-[24px] font-normal">
                  
                </h2> */}
              </div>
              <h3
                className={`text-[18px] leading-[24px] font-medium ${isSelected ? "text-white" : option.textColor
                  }`}
              >
                {t("staking.stakingSection.apr", { apr: option.apr })}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] lg:gap-[20px]">
        <div className="flex items-center flex-col gap-[15px] lg:gap-[20px]">
          <div className="w-full border border-[#b195c7] h-[60px] py-3 px-5 rounded-xl flex items-center justify-between gap-3">
            <input
              type="text"
              placeholder={t("staking.stakingSection.placeholder")}
              className="h-full bg-transparent outline-none w-full text-white text-[18px] leading-[27px] font-normal font-poppins placeholder:text-white"
              // value={stakeAmount ? `${stakeAmount} VRN` : ""}
              value={stakeAmount}
              onChange={handleInputChange}
            />
            <button
              className="underline text-[#C176FF] text-[18px] leading-[27px] font-normal font-poppins"
              onClick={handleMaxClick}
            >
              {t("staking.stakingSection.max")}
            </button>
          </div>

          <div
            className="w-full border border-[#440675] bg-[#1C0035] rounded-xl px-5 py-[18px] text-white space-y-[10px] sm:space-y-[12px]"
            style={{ backdropFilter: "blur(30px)" }}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[16px] sm:text-[18px] leading-[21.6px] font-medium">
                {t("staking.stakingSection.stakeAmount")}
              </h2>
              <h2 className="text-[16px] sm:text-[18px] leading-[21.6px] font-normal">
                {numericStakeAmount > 0
                  ? `${formatNumberWithCommas(numericStakeAmount.toFixed(2))} VRN`
                  : "0.00 VRN"}
              </h2>
            </div>

            <div className="flex items-center justify-between gap-[10px] sm:gap-4">
              <h2 className="text-white/70 text-[16px] sm:text-[18px] leading-[21.6px] font-normal underline cursor-pointer">
                {t("staking.stakingSection.estimatedProfit")}
              </h2>
              <h2 className="text-[#C176FF] text-[16px] sm:text-[18px] leading-[21.6px] font-normal">
                {estimatedProfit > 0
                  ? `${formatNumberWithCommas(estimatedProfit.toFixed(2))} VRN`
                  : "0.00 VRN"}
              </h2>
            </div>

            <div className="flex items-center justify-between gap-[10px] sm:gap-4">
              <h2 className="text-white/70 text-[16px] sm:text-[18px] leading-[21.6px] font-normal underline cursor-pointer">
                {t("staking.stakingSection.total")}
              </h2>
              <h2 className="text-[#C176FF] text-[16px] sm:text-[18px] leading-[21.6px] font-normal">
                {totalAmount > 0
                  ? `${formatNumberWithCommas(totalAmount.toFixed(2))} VRN`
                  : "0.00 VRN"}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col-reverse lg:flex-col gap-[15px] lg:gap-[20px]">
          {
            isConnected ?(
              <button
              onClick={()=>  handleStakeToken()}
                className={`${styles.stakingButtonNow} ${isHovered ? styles.hovered : ""
                  }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={styles.gradientBorder} />
                <div className={`${styles.buttonContentNow} `}>
                 {stakeButtonText}
                </div>
                <div className={styles.glowEffect} />
              </button>
            ) : 
            (
              <button
              onClick = {()=> open() } 
                className={`${styles.stakingButtonNow} ${isHovered ? styles.hovered : ""
                  }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={styles.gradientBorder} />
                <div className={`${styles.buttonContentNow} `}>
                    Connect Wallet
                </div>
                <div className={styles.glowEffect} />
              </button>
            )
          }
      

          <div
            className="w-full border border-[#440675] bg-[#1C0035] rounded-xl px-5 py-[18px] text-white space-y-[10px] sm:space-y-[12px]"
            style={{ backdropFilter: "blur(30px)" }}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[16px] sm:text-[18px] leading-[21.6px] font-medium">
                {t("staking.stakingSection.lcaiToBeLocked")}
              </h2>
              <h2 className="text-[16px] sm:text-[18px] leading-[21.6px] font-normal">
                {numericStakeAmount > 0
                  ? formatNumberWithCommas(numericStakeAmount.toFixed(2))
                  : "0.00"}
              </h2>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-white/70 text-[16px] sm:text-[18px] leading-[21.6px] font-normal underline cursor-pointer">
                {t("staking.stakingSection.duration")}
              </h2>
              <h2 className="text-[16px] sm:text-[18px] leading-[21.6px] font-normal">
                {stakingOptions[selectedPeriodIndex].period}
              </h2>
            </div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-white/70 text-[16px] sm:text-[18px] leading-[21.6px] font-normal underline cursor-pointer">
                {t("staking.stakingSection.unlockOn")}
              </h2>
              <h2 className="text-[16px] sm:text-[18px] leading-[21.6px] font-normal">
                {unlockDate || "-"}
              </h2>
            </div>
          </div>
        </div>
      </div>

          {/* tale component will come here */}
          {/* <div className="bg-[#1e1e1e] rounded-xl px-[2px] pb-[3px] shadow-md">
              <div className="flex py-[20px] px-[30px] items-center gap-2">
                <h2 className="text-[1rem] font-[500] text-[#CCCEEF]">
                  {t("staking_history_title")}
                </h2>
              </div>
        
              <div className="bg-black rounded-lg">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px] border-collapse">
                    <thead className="bg-black border-b border-[#1e1e1e]">
                      <tr>
                        <th className="text-[#CCCEEF] text-[0.75rem] font-[600] text-left px-[30px] py-[20px]">
                          {t("amount")}
                        </th>
                        <th className="text-[#CCCEEF] whitespace-nowrap text-[0.75rem] font-[600] text-left px-[30px] py-[20px]">
                          {t("lock_duration")}
                        </th>
                        <th className="text-[#CCCEEF] whitespace-nowrap text-[0.75rem] font-[600] text-left px-[30px] py-[20px]">
                          {t("fixed_returns")}
                        </th>
                        <th className="text-[#CCCEEF] text-[0.75rem] font-[600] text-left px-[30px] py-[20px]">
                          {t("start_time")}
                        </th>
                        <th className="text-[#CCCEEF] text-[0.75rem] font-[600] text-left px-[30px] py-[20px]">
                          {t("end_time")}
                        </th>
                        <th className="text-[#CCCEEF] text-[0.75rem] font-[600] text-left px-[30px] py-[20px]">
                          {t("status")}
                        </th>
                        <th className="text-[#CCCEEF] text-[0.75rem] font-[600] text-left px-[30px] py-[20px]">
                          {t("action")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {myStakes.length > 0 ? (
                        myStakes.map((item, index) => (
                          <tr key={index} className="border-b border-[#1e1e1e]">
                            <td className="text-white text-[0.75rem] px-[30px] py-[20px]">
                              {(ethers.formatUnits(item.amount.toString(),'ether'))} CYNQ
                            </td>
                            <td className="text-white text-[0.75rem] px-[30px] py-[20px]">
                              { (getLockDuration(Number(item.startTime), Number(item.endTime)) / 30) }M
                            </td>
                            <td className="text-white text-[0.75rem] px-[30px] py-[20px]">
                              {item.rewardRate}%
                            </td>
                            <td className="text-white text-[0.75rem] px-[30px] py-[20px]">
                              { getDate(Number(item.startTime))}
                            </td>
                            <td className="text-white text-[0.75rem] px-[30px] py-[20px]">
                            { getDate(Number(item.endTime))}
                            </td>
                            <td className="text-white text-[0.75rem] px-[30px] py-[20px]">
                              <span
                                className={`px-3 py-1 rounded-full ${
                                  item.status === "Active"
                                    ? "bg-green-500/10 text-green-500"
                                    : "bg-yellow-500/10 text-yellow-500"
                                }`}
                              >
                                {item.withdrawn === true
                                  ? t("withdraw")
                                  : t("active")}
                              </span>
                            </td>
                            <td className="text-white whitespace-nowrap text-[0.875rem] px-[30px] py-[20px]">
                              <button
                              id={index.toString()}
                              disabled = {false}
                              onClick={
                              item.withdrawn === false
                              ? ()=> handleWithdraw(index)
                              : ()=> handleRestake(index, item.amount, (getLockDuration(Number(item.startTime), Number(item.endTime))).toString())
                              }
                                className={`px-2 py-2 text-[0.75rem] rounded-lg transition-all text-white ${
                                  item.withdrawn == false
                                    ? "bg-yellow-500 hover:bg-yellow-400 withdrawbtn"
                                    : "bg-[#7B15F8] hover:bg-[#7b15f8b9] restakebtn"
                                }`}
                              >
                                {item.withdrawn === false
                                  ? t("withdraw")
                                  : t("restake")}
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={7}
                            className="text-center text-[0.875rem] text-white/50 py-5"
                          >
                            {t("no_stakes_found")}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
    </div>
  );
};

export default StakingSection;
