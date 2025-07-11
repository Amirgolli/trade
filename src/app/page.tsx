"use client";
import Image from "next/image";
import { useState } from "react";
import LinkToSvg from "../../public/images/mainPage/svg/linkTo";
import TotalData from "./components/total";
import ShoesData from "./components/sidebar/components/shoes";
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

  const ShoesInfo = [
    {
      img: "/images/mainPage/shoe.png",
      code: 210323,
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Success",
    },
    {
      img: "/images/mainPage/shoe.png",
      code: 210323,
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Success",
    },
    {
      img: "/images/mainPage/shoe.png",
      code: 210323,
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Success",
    },
    {
      img: "/images/mainPage/shoe.png",
      code: 210323,
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Success",
    },
  ];
  return (
    <div className="not-dark:bg-[#F7F7F7] m-auto ">
      {/* text */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-[25px]">Dashboard</h1>
        <span className="text-[#B0B0B0]">Dashboard</span>
      </div>
      {/* range  */}

      <div className="flex flex-col md:flex-row gap-5.5 ">
        <div className="">
          <div className="w-98 md:w-185 h-38  mt-5 bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl p-4 flex flex-col justify-between">
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
          <div className="w-98 md:w-185 h-90 md:h-120 mt-5 bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <h3 className="font-semibold">Sales Target</h3>
              <div className="flex gap-1">
                <span>Show All</span>
                <LinkToSvg />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-3 items-center">
                <div className="h-3.5 w-3.5 bg-[#9DD909]"></div>
                <h5 className="text-[#B0B0B0]">Average Sale Value</h5>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-3.5 w-3.5 bg-[#1A71F6]"></div>
                <h5 className="text-[#B0B0B0]">Average item persale</h5>
              </div>
            </div>
            <Image
              height={600}
              width={600}
              src="/images/mainPage/Chart.png"
              alt="profile user"
              className="rounded-full ml-7"
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

        {/* Total */}
        <div className="">
          <div className="grid grid-cols-2 md:w-195 ">
            <TotalData text="Total Revenue" price={"81.000"} benefit={10.6} />
            <TotalData text="Total Revenue" price={"81.000"} benefit={10.6} />
            <TotalData text="Total Revenue" price={"81.000"} benefit={10.6} />
            <TotalData text="Total Revenue" price={"81.000"} benefit={10.6} />
          </div>
          {/* learn more */}
          <div className="w-98 h-67 md:w-188  pl-9 pr-4 bg-[#1A71F6] rounded-2xl pt-5 pb-5 flex flex-col justify-between ">
            <h4 className="font-semibold text-[22px]">Increase your sales</h4>
            <p>
              Discover the Proven Methods to Skyrocket Your Sales! Unleash the
              Potential of Your Business and Achieve Remarkable Growth. Whether
              you are a seasoned entrepreneur or just starting out
            </p>
            <button
              className="w-25 md:w-30 md:h-10 rounded-2xl  h-8 bg-white text-[#1A71F6] text-[12px] cursor-pointer"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col  md:flex-row">
        {/* map */}
        <div className="w-98 md:w-120  mt-5 bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl p-4 flex flex-col gap-10 mr-8">
          <div className="flex justify-between">
            <h3 className="font-semibold">Customer Growth 3 Province</h3>
            <div className="flex gap-1">
              <span>Show All</span>
              <LinkToSvg />
            </div>
          </div>
          <div className="flex  gap-4">
            <div className="flex gap-1 items-center">
              <div className="h-3.5 w-3.5 bg-[#9DD909] rounded-full"></div>
              <h5 className="text-[#B0B0B0] text-[12px]">East Java (50%)</h5>
            </div>
            <div className="flex gap-1">
              <div className="h-3.5 w-3.5 bg-[#FF1F1F] rounded-full"></div>
              <h5 className="text-[#B0B0B0] text-[12px]">Kalimantan (50%)</h5>
            </div>
            <div className="flex gap-1">
              <div className="h-3.5 w-3.5 bg-[#FF1F1F] rounded-full"></div>
              <h5 className="text-[#B0B0B0] text-[12px]">Bali (65%)</h5>
            </div>
          </div>
          <Image
            height={650}
            width={650}
            src="/images/mainPage/map.png"
            alt="profile user"
            className="rounded-md"
          />
        </div>
        {/* shoes data */}
        <div className=" w-98 md:w-250 md:h-139 mt-5 bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl p-4 flex flex-col ">
          <div className="flex justify-between mb-15">
            <h3 className="font-semibold">Product Popular</h3>
            <div className="flex gap-1">
              <span>Show All</span>
              <LinkToSvg />
            </div>
          </div>
          <div className="">
            <div className="bg-[#101011] border border-[#3D3D3D] rounded-t-2xl h-10 p-2 pl-4 flex gap-5">
              <span> Product</span>
            </div>
            {ShoesInfo.map((item, index) => (
              <div key={index} className="join join-vertical ">
                <ShoesData
                  img={item.img}
                  code={item.code}
                  name={item.name}
                  price={item.price}
                  sales={item.sales}
                  status={item.status}
                />
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-box   hidden md:table">
            <table className="table  ">
              {/* head */}
              <thead className="border border-[#252525] bg-[#101011]">
                <tr>
                  <th>Product </th>
                  <th>Price</th>
                  <th>Sales</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="border border-[#252525]">
                {/* row 1 */}
                {ShoesInfo.map((item, index) => (
                  <tr key={index}>
                    <th>
                      <div className="collapse-title font-semibold flex gap-4.5">
                        <Image
                          height={40}
                          width={40}
                          src={item.img}
                          alt="shoes"
                          className="rounded-md"
                        />
                        <div className="flex flex-col gap-.5">
                          <span className="text-[#1A71F6] font-light">
                            {item.code}
                          </span>
                          <h5 className="text-[14px]">{item.name}</h5>
                        </div>
                      </div>
                    </th>
                    <td>{item.price}</td>
                    <td>{item.sales}</td>
                    <td>
                      <span className="font-bold text-[#28B652] p-1 bg-[#F3FFC8] rounded-2xl">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
