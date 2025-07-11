import Image from "next/image";
import EyeSvg from "../../../../../public/images/product/svg/eye";
import EditSvg from "../../../../../public/images/product/svg/edit";
import BinSvg from "../../../../../public/images/product/svg/bin";

interface Shoes {
  img: string;
  code: number;
  name: string;
  price: number;
  date: string;
  status: string;
  size: number;
  qty: string;
}

const ShoesData2 = ({
  img,
  code,
  name,
  price,
  date,
  status,
  size,
  qty,
}: Shoes) => {
  return (
    <div className="md:hidden  collapse collapse-arrow join-item border border-[#3D3D3D] w-91">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title font-semibold flex gap-4.5">
        <input type="checkbox" name="" id="" />
        <Image
          height={40}
          width={40}
          src={img}
          alt="shoes"
          className="rounded-md"
        />
        <div className="flex flex-col gap-.5">
          <span className="text-[#1A71F6] font-light">{code}</span>
          <h5 className="text-[14px]">{name}</h5>
        </div>
      </div>
      <div className="collapse-content text-sm ml-8">
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">Price</span>
          <span className="font-bold">${price}</span>
        </div>
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">Size</span>
          <span className="font-bold">${size}</span>
        </div>
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">QTY</span>
          <span className="font-bold">${qty}</span>
        </div>
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">Date</span>
          <span className="font-bold">{date}</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-[#B0B0B0] text-[12px]">Status</span>
          <span className="font-bold text-[#28B652] p-1 bg-[#F3FFC8] rounded-2xl">
            {status}
          </span>
        </div>
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">Action</span>
          <div className="flex gap-4">
            <EyeSvg />
            <EditSvg />
            <BinSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesData2;
