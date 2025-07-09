"use client";
import Image from "next/image";
import { useState } from "react";
import LinkToSvg from "../../public/images/mainPage/svg/linkTo";
const Home = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];
  const [value, setValue] = useState<number>(40);
  return (
    <div className="not-dark:bg-[#F7F7F7] h-full ">
      {/* text */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-[25px]">Dashboard</h1>
        <span className="text-[#B0B0B0]">Dashboard</span>
      </div>
      {/* range  */}

      <div className="w-98 h-36 mt-5 bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl p-4 flex flex-col justify-between">
        <h3 className="font-semibold">Sales Target</h3>
        <div className="flex justify-between">
          <div className="">
            <span className="text-[#B0B0B0] mb-1">In Progress</span>
            <h5 className="font-semibold">$231,032,444</h5>
          </div>
          <div className="">
            <span className="text-[#B0B0B0] mb-1">Sales Target</span>
            <h5 className="font-semibold">$500,000,00</h5>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          className="range"
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>

      {/* chart */}
      <div className="w-98 h-90 mt-5 bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl p-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <h3 className="font-semibold">Sales Target</h3>
          <div className="flex gap-1">
            <span>Show All</span>
            <LinkToSvg />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <div className="h-3.5 w-3.5 bg-[#9DD909]"></div>
            <h5 className="text-[#B0B0B0]">Average Sale Value</h5>
          </div>
          <div className="flex gap-1">
            <div className="h-3.5 w-3.5 bg-[#1A71F6]"></div>
            <h5 className="text-[#B0B0B0]">Average item persale</h5>
          </div>
        </div>
        <Image
          height={650}
          width={650}
          src="/images/mainPage/Chart.png"
          alt="profile user"
          className="rounded-full"
        />
        <div className="flex justify-between">
          {months.map((item, index) => (
            <span className="text-[#B0B0B0] text-[12px]" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
