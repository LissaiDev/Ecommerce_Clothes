import { Raleway } from "next/font/google";
import navigationItems from "@/constants/navigationItems";
import Link from "next/link";
import React from "react";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
  ShopOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const raleway = Raleway({
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="py-5 px-2 md:px-0">
      <nav
        className={`${raleway.className} container mx-auto flex justify-between`}
      >
        <Link href={"/"} className="font-thin text-2xl">
          <ShopOutlined />
        </Link>
        <ul className="space-x-4 hidden md:flex">
          {navigationItems.map((item, index) =>
            item.label === "Shop" ? (
              <li key={index}>
                <Dropdown menu={{ items: item.children }}>
                  <Space>
                    <span className={raleway.className}>Shop</span>
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
            ) : (
              <li key={index}>
                <Link href={"/"}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <Dropdown menu={{ items: navigationItems }} className="md:hidden">
          <Space>
            <MenuOutlined />
            <DownOutlined />
          </Space>
        </Dropdown>
        <div className="space-x-3">
          <ShoppingCartOutlined className="text-2xl" />
          <UserOutlined className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
