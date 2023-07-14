import { FeaturedProps } from "@/@types";
import data from "@/assets/images";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const Products = ({image, price, text ,discountFrom}:FeaturedProps) => {
  return (
    <div className="sm:w[40%] md:w-[48%] 2xl:w-[32%]">
      <div className="h-[520px] overflow-hidden rounded mb-4 hover:cursor-pointer">
        <Image src={image} alt="Featured"/>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-medium">{text}</h3>
          <h2 className={`font-semibold text-2xl relative after:inline-block  after:text-textMuted after:content-["-$12"] after:text-sm  after:absolute after:left-12 after:top-0`}>
            ${price}
          </h2>
        </div>
        <span className="block p-4 rounded-xl bg-darkColor hover:cursor-pointer hover:bg-black transition-all duration-200">
          <ShoppingCartOutlined className="text-white text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default Products;
