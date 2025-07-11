// public/images/header/svg/SidebarSvg.tsx
import * as React from "react";

const SidebarSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="19"
    viewBox="0 0 22 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 0.5H2C1.175 0.5 0.5 1.175 0.5 2V17C0.5 17.825 1.175 18.5 2 18.5H20C20.825 18.5 21.5 17.825 21.5 17V2C21.5 1.175 20.825 0.5 20 0.5ZM6.5 17H2V2H6.5V17ZM20 8.75H12.35L15.05 6.05L14 5L9.5 9.5L14 14L15.05 12.95L12.35 10.25H20V17H8V2H20V8.75Z"
      fill="#F6F6F6"
    />
  </svg>
);

export default SidebarSvg;