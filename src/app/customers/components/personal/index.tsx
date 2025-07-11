import EyeSvg from "../../../../../public/images/product/svg/eye";
import EditSvg from "../../../../../public/images/product/svg/edit";
import BinSvg from "../../../../../public/images/product/svg/bin";

interface Shoes {
  code: string;
  name: string;
  contact: string;
  address: string;
  purchases: string;
  order: string;
}

const PersonalData = ({
  code,
  name,
  contact,
  address,
  purchases,
  order,
}: Shoes) => {
  return (
    <div className="md:hidden  collapse collapse-arrow join-item border border-[#3D3D3D] w-91">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title font-semibold flex gap-4.5">
        <input type="checkbox" name="" id="" />
        <div className="flex flex-col gap-.5">
          <span className="text-[#1A71F6] font-light">{code}</span>
          <h5 className="text-[14px]">{name}</h5>
        </div>
      </div>
      <div className="collapse-content text-sm ml-8">
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">Contact</span>
          <span className="font-bold">{contact}</span>
        </div>
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">Purchases</span>
          <span className="font-bold">{purchases}</span>
        </div>
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">Order</span>
          <span className="font-bold">{order}</span>
        </div>
        <div className="flex gap-7.5 mb-2">
          <span className="text-[#B0B0B0] text-[12px]">Address</span>
          <span className="font-bold">{address}</span>
        </div>
        <div className="flex gap-7.5 mb-2 mt-2">
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

export default PersonalData;
