import Image from "next/image";
import Link from "next/link";
import SearchSvg from "../../../public/images/header/svg/search";
import PathSvg from "../../../public/images/mainSvgs/path";
import DownloadSvg from "../../../public/images/product/svg/download";
import FilterSvg from "../../../public/images/product/svg/filter";
import PlusSvg from "../../../public/images/product/svg/plus";
import ShoesData2 from "../components/shoesmb";
import EyeSvg from "../../../public/images/product/svg/eye";
import EditSvg from "../../../public/images/product/svg/edit";
import BinSvg from "../../../public/images/product/svg/bin";

const ProductPage = () => {
  const ShoesInfo = [
    {
      img: "/images/mainPage/shoe.png",
      size: 40,
      date: "04/17/23  at 8:25 PM",
      qty: "3000",
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Available",
      code: 2000,
    },
    {
      img: "/images/mainPage/shoe.png",
      size: 40,
      date: "04/17/23  at 8:25 PM",
      qty: "3000",
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Available",
      code: 2000,
    },
    {
      img: "/images/mainPage/shoe.png",
      size: 40,
      date: "04/17/23  at 8:25 PM",
      qty: "3000",
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Available",
      code: 2000,
    },
    {
      img: "/images/mainPage/shoe.png",
      size: 40,
      date: "04/17/23  at 8:25 PM",
      qty: "3000",
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Available",
      code: 2000,
    },
    {
      img: "/images/mainPage/shoe.png",
      size: 40,
      date: "04/17/23  at 8:25 PM",
      qty: "3000",
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Available",
      code: 2000,
    },
    {
      img: "/images/mainPage/shoe.png",
      size: 40,
      date: "04/17/23  at 8:25 PM",
      qty: "3000",
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Available",
      code: 2000,
    },
    {
      img: "/images/mainPage/shoe.png",
      size: 40,
      date: "04/17/23  at 8:25 PM",
      qty: "3000",
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Available",
      code: 2000,
    },
    {
      img: "/images/mainPage/shoe.png",
      size: 40,
      date: "04/17/23  at 8:25 PM",
      qty: "3000",
      name: "Kanky Kitadakate (Green)",
      price: 32032,
      sales: 3000,
      status: "Available",
      code: 2000,
    },
  ];
  return (
    <>
      {/* path */}
      <div className="flex flex-col gap-2">
        <h1 className="text-[24px]">Product</h1>
        <div className="flex gap-1 items-center">
          <Link href={"/"}>
            <span className="text-[#B0B0B0]">Dashboard</span>
          </Link>
          <PathSvg />
          <span className="text-[#B0B0B0]">Product</span>
          <PathSvg />
          <span className="text-[#1A71F6]">Sneakers</span>
        </div>
      </div>
      <div className="mt-5 dark:bg-[#1A1A1B] p-4 border flex flex-col gap-6 not-dark:border-[#E7E7E7] border-[#3D3D3D] rounded-2xl">
        <div className="flex flex-col md:flex-col-reverse md:gap-6">
          {/* products category */}
          <div className="h-18  dark:bg-[#1A1A1B] border not-dark:border-[#E7E7E7] border-[#3D3D3D] rounded-2xl flex justify-around items-center p-3 ">
            <div className="h-10 5 w-19 md:w-[25%] bg-[#D9EDFF] text-[#1A71F6] rounded-md flex items-center justify-center text-[12px] p-2.5 text-center cursor-pointer">
              Sneakers (50)
            </div>
            <div className="h-10 5 w-19 md:w-[25%]  rounded-md flex items-center justify-center text-[12px]  text-center cursor-pointer">
              Sneakers (50)
            </div>
            <div className="h-10 5 w-19 md:w-[25%]  rounded-md flex items-center justify-center text-[12px]  text-center cursor-pointer">
              Sneakers (50)
            </div>
            <div className="h-10 5 w-19 md:w-[25%]  rounded-md flex items-center justify-center text-[12px]  text-center cursor-pointer">
              Sneakers (50)
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            {/* search box */}
            <div className="flex items-center justify-around not-dark:border-[#E7E7E7] border h-10  p-3 rounded-lg">
              <input
                type="search"
                placeholder="Search for id, name product"
                className="outline-none  w-full md:w-140 p-2"
              />
              <SearchSvg />
            </div>
            {/* buttons */}
            <div className="flex justify-between md:gap-6">
              <div className="flex gap-3">
                <div className="w-20 h-10 rounded-lg border not-dark:border-[#E7E7E7] p-3 flex justify-between items-center text-[12px]">
                  <span>Filter</span>
                  <FilterSvg />
                </div>
                <div className="w-20 h-10 rounded-lg border not-dark:border-[#E7E7E7] p-2 flex gap-2 items-center text-[12px]">
                  <span>Export</span>
                  <DownloadSvg />
                </div>
              </div>
              <Link href={"/addproduct"}>
                <div className="h-10 w-33 bg-[#1A71F6] p-3 flex justify-between items-center rounded-lg cursor-pointer">
                  <span className="text-[13px] font-semibold">New Product</span>
                  <PlusSvg />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* table desktop*/}
        <div className="overflow-x-auto rounded-box   hidden md:table">
          <table className="table rounded-t-3xl  ">
            {/* head */}
            <thead className="border not-dark:border-[#E7E7E7] border-[#252525] not-dark:bg-[#F6F6F6]  bg-[#101011]">
              <tr>
                <th>Product </th>
                <th>Price</th>
                <th>Size</th>
                <th>QTY</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="border border-[#252525] not-dark:border-[#E7E7E7]">
              {/* row 1 */}
              {ShoesInfo.map((item, index) => (
                <tr key={index}>
                  <th>
                    <div className="collapse-title font-semibold flex gap-4.5">
                      <input type="checkbox" />
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
                  <td>{item.size}</td>
                  <td>{item.qty}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className="font-bold text-[#28B652] p-1 bg-[#F3FFC8] rounded-2xl">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-4">
                      <EyeSvg />
                      <EditSvg />
                      <BinSvg />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* table mobile */}
        <div className="">
          <div className="bg-[#101011] border border-[#3D3D3D] not-dark:border-[#E7E7E7] rounded-t-2xl h-10 p-2 pl-4 flex gap-5 md:hidden">
            <input type="checkbox" />
            <span> Product</span>
          </div>
          {ShoesInfo.map((item, index) => (
            <div key={index} className="join join-vertical ">
              <ShoesData2
                code={item.code}
                img={item.img}
                date={item.date}
                name={item.name}
                price={item.price}
                qty={item.qty}
                status={item.status}
                size={item.size}
              />
            </div>
          ))}
        </div>
        {/* pages data */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-3">
            <p className="">
              <span className="text-[#1A71F6]">1</span>
              -8 of 13 Pages
            </p>
            <div className="flex gap-2 items-center">
              <span>The page on</span>
              <div className="h-5 w-6 border not-dark:border-[#E7E7E7] rounded-md flex justify-center items-center">
                1
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-4.5 w-4.5 border not-dark:border-[#E7E7E7] rounded-sm flex justify-center items-center"></div>
            <div className="h-4.5 w-4.5 border not-dark:border-[#E7E7E7] rounded-sm flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
