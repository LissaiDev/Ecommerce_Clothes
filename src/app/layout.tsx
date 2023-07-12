"use client";
import "./globals.css";
// import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import theme from "@/constants/theme";
import Notification from "@/components/Notification";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// export const metadata: Metadata = {
//   title: "dev@lissai",
//   description: "Welcome to dev@lissai development world",
// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: theme,
        }}
      >
        <body>
          <Notification />
          <Header />
          {children}
          <Footer />
        </body>
      </ConfigProvider>
    </html>
  );
}
