// components/SidebarComponent.tsx
import Image from "next/image";
import HomeSvg from "../../../../public/images/sidebar/svg/HomeSvg";
import TextSidebar from "./components/textSidebar";
import PaperSvg from "../../../../public/images/sidebar/svg/paper";
import PeopleSvg from "../../../../public/images/sidebar/svg/people";
import ChartSvg from "../../../../public/images/sidebar/svg/chart";
import ProductSvg from "../../../../public/images/sidebar/svg/product";
import SettingSvg from "../../../../public/images/sidebar/svg/setting";
import HelpSvg from "../../../../public/images/sidebar/svg/help";
import DarkMode from "../../../../public/images/sidebar/svg/dark";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarComponent: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className="hidden md:block">
      <div
        className={`fixed top-0 left-0 h-full w-70 dark:bg-[#1A1A1B] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="menu text-base-content  p-4">
          <div className="flex items-center gap-5 mb-11">
            <Image
              height={36}
              width={40}
              src="/images/sidebar/Logo.png"
              alt="profile user"
              className="rounded-sm"
            />
            <span className="font-semibold text-[26px]">Culters</span>
          </div>
          <div className=" w-60 border border-[#737373] rounded-lg flex gap-4 pl-4 p-2">
            <Image
              height={20}
              width={30}
              src="/images/sidebar/company.jpg"
              alt="profile user"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-[10px]">Company</span>
              <h4>Kanky Store</h4>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-[#737373] text-[17px] ml-2">General</h3>
            <TextSidebar icon={<HomeSvg />} text="Dashboard" />
            <div tabIndex={0} className="collapse collapse-arrow ">
              <div className="collapse-title text-[#B0B0B0] font-semibold flex gap-2">
                <ProductSvg />
                <span>product</span>
              </div>
              <div className="collapse-content  text-sm">
                <ul className="ml-5 flex flex-col gap-3 cursor-pointer">
                  <li>Sneakers</li>
                  <li>Jacket</li>
                  <li>T-Shirt</li>
                  <li>Bag</li>
                </ul>
              </div>
            </div>
            <TextSidebar icon={<PaperSvg />} text="Transaction (441)" />
            <TextSidebar icon={<PeopleSvg />} text="Customers" />
            <TextSidebar icon={<ChartSvg />} text="Sales Report" />
          </div>
          <div className="mt-8">
            <h3 className="text-[#737373] text-[17px] ml-2">Tools</h3>
            <TextSidebar icon={<SettingSvg />} text="Account & Settings" />
            <TextSidebar icon={<HelpSvg />} text="Help" />
            <div className="flex gap-2 items-center p-3.5">
              <div className="flex gap-2">
                <DarkMode />
                <span>Dark Mode</span>
              </div>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
          </div>
        </ul>
        <div className="mt-11 ml-4 mr-4 p-2 border border-[#737373] rounded-md">
          <div className="flex gap-2">
            <Image
              height={36}
              width={40}
              src="/images/header/profileUser.png"
              alt="profile user"
              className="rounded-sm"
            />
            <div className="flex flex-col">
              <h4>Guy Hawkins</h4>
              <span className="font-semibold">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
