import BenefitSvg from "../../../../public/images/mainPage/svg/benefit";
import LinkToSvg from "../../../../public/images/mainPage/svg/linkTo";

interface TotalDataProps {
  price: string;
  text: string;
  benefit: number;
}

const TotalData = ({ price, text, benefit }: TotalDataProps) => {
  return (
    <div className="w-48 h-38 bg-[#1A1A1B] rounded-2xl p-5 flex flex-col justify-between border border-[#3D3D3D] mb-4">
      <div className="flex gap-1">
        <span>{text}</span>
        <LinkToSvg />
      </div>
      <div className="">
        <h3 className="text-[30px] text-[#3381F7]">${price}</h3>
        <div className="flex gap-1">
          <BenefitSvg />
          <span className="text-[#05AA0D]">{benefit}%</span>
          <h6 className="text-[#B0B0B0] text-[12px]">From last week</h6>
        </div>
      </div>
    </div>
  );
};

export default TotalData;
