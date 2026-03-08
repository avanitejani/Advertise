import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "./data/SidebarProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Add",
  description: "add",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollbarWidth: 'none' }}>
      <head>
        <link rel="icon" href="/Common/favocoin.ico" />
      </head>

      <body>
        <SidebarProvider>
          {children}</SidebarProvider></body>
    </html>
  );
}
