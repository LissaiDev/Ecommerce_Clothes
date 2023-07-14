import { ButtonProps } from "@/@types";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
});

const CustomButton = ({ text, width }: ButtonProps) => {
  return (
    <button className={`bg-white transition-all duration-150 hover:bg-black p-3 mx-auto mt-3 group flex justify-between items-center ${width} rounded-xl`}>
      <span
        className={`transition-all ${raleway.className} duration-200 group-hover:text-white block`}
      >
        {text}
      </span>
      <ArrowRightOutlined className="group-hover:text-white transition-all duration-150" />
    </button>
  );
};

export default CustomButton;
