"use client";
import Image from "next/image";
import SearchSvg from "../../../../public/images/header/svg/search";
import BurgerMenu from "../../../../public/images/header/svg/BurgurMenu";
import Mail from "../../../../public/images/header/svg/Mail";
import AlarmSvg from "../../../../public/images/header/svg/AlarmSvg";
import SidebarSvg from "../../../../public/images/header/svg/SidebarSvg";

interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <header
      className={`dark:bg-[#1A1A1B] pt-4 pb-4 pl-5 pr-5 flex justify-between items-center transition-all duration-300 ease-in-out ${
        isOpen ? "md:ml-65" : "md:ml-0"
      }`}
    >
      <div className="hidden md:block">
        <label
          className=" drawer-button cursor-pointer"
          onClick={toggleSidebar}
        >
          <SidebarSvg
            style={{
              transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease m-10",
            }}
          />
        </label>
      </div>
      <div className="hidden md:flex items-center justify-around border h-10 w-[300px] p-3 rounded-lg">
        <input
          type="search"
          placeholder="Search product"
          className="outline-none  w-full p-2"
        />
        <SearchSvg />
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex gap-4">
          <div className="h-10 w-10 not-dark:bg-[#F6F6F6] bg-[#3D3D3D] rounded-lg flex items-center justify-center">
            <Mail />
          </div>
          <div className="h-10 w-10 not-dark:bg-[#F6F6F6] bg-[#3D3D3D] rounded-lg flex items-center justify-center">
            <AlarmSvg />
          </div>
        </div>
        <div className="hidden md:block border h-12"></div>
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
      <div className="flex gap-4 md:hidden">
        <SearchSvg />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default HeaderComponent;
