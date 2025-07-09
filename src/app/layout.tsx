// app/layout.tsx
"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import "./globals.css";
import HeaderComponent from "./components/header";
import SidebarComponent from "./components/sidebar";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body>
        <HeaderComponent isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 min-h-screen">
          <SidebarComponent isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <main
            className={`flex-1 transition-all duration-300 ease-in-out ${
              isOpen ? "md:ml-80" : "md:ml-0"
            } p-4`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
