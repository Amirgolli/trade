import Image from "next/image";
import SearchSvg from "../../../../public/images/header/svg/search";
import BurgerMenu from "../../../../public/images/header/svg/BurgurMenu";
import Mail from "../../../../public/images/header/svg/Mail";
import AlarmSvg from "../../../../public/images/header/svg/AlarmSvg";

const HeaderComponent = () => {
  return (
    <header className="dark:bg-[#1A1A1B] pt-4 pb-4 pl-5 pr-5 flex justify-between items-center">
      <div className="hidden md:flex items-center justify-around border h-10 w-75 rounded-lg  ">
        <input
          type="search"
          placeholder="Search product"
          className="focus:outline-0"
        />
        <SearchSvg />
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex gap-4">
          <div className="h-9.5 w-9 bg-[#3D3D3D] rounded-lg flex items-center justify-center">
            <Mail />
          </div>
          <div className="h-9.5 w-9 bg-[#3D3D3D] rounded-lg flex items-center justify-center">
            <AlarmSvg />
          </div>
        </div>
        <div className="hidden md:block border h-12"></div>
        <div className="flex gap-2">
          <Image
            height={36}
            width={40}
            src={"/images/header/profileUser.png"}
            alt="profile user"
            className="rounded-sm"
          ></Image>
          <div className="flex flex-col">
            <h4 className="">Guy Hawkins</h4>
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
