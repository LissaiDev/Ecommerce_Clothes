import footerItems from "@/constants/footerItems";
import React from "react";
import { Raleway } from "next/font/google";
import { Divider } from "antd";
const raleway = Raleway({
    subsets: ["latin"],
})
const Footer = () => {
  return (
    <footer className={`${raleway.className} bg-footer py-10 `}>
      <div className="container mx-auto">
        <div className="flex justify-center flex-wrap flex-col md:flex-row">
          <ul className="flex space-y-4 md:space-y-0 md:space-x-10 flex-1 md:flex-none flex-col md:flex-row justify-center items-center md:justify-normal md:items-start">
            {footerItems.map((item, index) => (
              <li key={index}>
                <h1 className="font-bold mb-3 text-center">{item.title}</h1>
                {item.items.map((item) => (
                  <p key={item} className="text-textMuted hover:text-black transition-all duration-200 cursor-pointer">{item}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <Divider />
        <p className="text-textMuted text-center text-sm">Copyright © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
