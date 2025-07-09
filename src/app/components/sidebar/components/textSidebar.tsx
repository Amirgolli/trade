import { ReactNode } from "react";

interface TextSidebarProps {
  icon: ReactNode; 
  text: string; 
}

const TextSidebar = ({ icon, text }: TextSidebarProps) => {
  return (
    <div className="flex gap-2 items-center p-3.5">
      {icon}
      <span className="  cursor-pointer hover:text-white transition">{text}</span>
    </div>
  );
};

export default TextSidebar;
