import Link from "next/link";
import SearchSvg from "../../../public/images/header/svg/search";
import PathSvg from "../../../public/images/mainSvgs/path";
import DownloadSvg from "../../../public/images/product/svg/download";
import FilterSvg from "../../../public/images/product/svg/filter";
import PlusSvg from "../../../public/images/product/svg/plus";
import ShoesData2 from "./components/shoesmb";

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
  ];
  return (
    <>
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
      <div className="mt-5 dark:bg-[#1A1A1B] p-4 border flex flex-col gap-6 border-[#3D3D3D] rounded-2xl">
        {/* products category */}
        <div className="h-18  dark:bg-[#1A1A1B] border border-[#3D3D3D] rounded-2xl flex justify-around items-center p-3">
          <div className="h-10 5 w-19 bg-[#D9EDFF] text-[#1A71F6] rounded-md flex items-center justify-center text-[12px] p-2.5 text-center cursor-pointer">
            Sneakers (50)
          </div>
          <div className="h-10 5 w-19  rounded-md flex items-center justify-center text-[12px] p-2.5 text-center cursor-pointer">
            Sneakers (50)
          </div>
          <div className="h-10 5 w-19  rounded-md flex items-center justify-center text-[12px] p-2.5 text-center cursor-pointer">
            Sneakers (50)
          </div>
          <div className="h-10 5 w-19  rounded-md flex items-center justify-center text-[12px] p-2.5 text-center cursor-pointer">
            Sneakers (50)
          </div>
        </div>
        {/* search box */}
        <div className="flex items-center justify-around border h-10  p-3 rounded-lg">
          <input
            type="search"
            placeholder="Search for id, name product"
            className="outline-none  w-full p-2"
          />
          <SearchSvg />
        </div>
        {/* buttons */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-20 h-10 rounded-lg border p-3 flex justify-between items-center text-[12px]">
              <span>Filter</span>
              <FilterSvg />
            </div>
            <div className="w-20 h-10 rounded-lg border p-2 flex gap-2 items-center text-[12px]">
              <span>Export</span>
              <DownloadSvg />
            </div>
          </div>
          <div className="h-10 w-33 bg-[#1A71F6] p-3 flex justify-between items-center rounded-lg cursor-pointer">
            <span className="text-[13px] font-semibold">New Product</span>
            <PlusSvg />
          </div>
        </div>
        {/* table */}

        <div className="">
          <div className="bg-[#101011] border border-[#3D3D3D] rounded-t-2xl h-10 p-2 pl-4 flex gap-5">
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
      </div>
    </>
  );
};

export default ProductPage;
