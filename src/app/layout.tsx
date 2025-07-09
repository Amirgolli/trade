import { ReactNode } from "react";
import "./globals.css";
import HeaderComponent from "./components/header";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <main>{children} </main>
      </body>
    </html>
  );
}
