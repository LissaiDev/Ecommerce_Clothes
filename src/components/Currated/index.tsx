import { CurratedProps } from "@/@types";
import data from "@/assets/images";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Raleway } from "next/font/google";
import Image from "next/image";
import CustomButton from "../CustomButton";
const raleway = Raleway({
  subsets: ["latin"],
});
const Currated = ({ image, text }: CurratedProps) => {
  return (
    <div className="relative w-[48%] h-60 md:h-64 xl:h-96 md:w-[24.2%] rounded-xl overflow-hidden">
      <Image src={image} className="brightness-75 object-fit" alt="model" />
      <div className="absolute bottom-5 w-full flex justify-center items-center ">
        <CustomButton text={text} width={"w-10/12"}/>
        {/* <button className="bg-white text-black py-3 px-5 mx-auto rounded-xl w-10/12 flex justify-between items-center">
          <p className={raleway.className}>{text}</p>
          <ArrowRightOutlined />
        </button> */}
      </div>
    </div>
  );
};

export default Currated;
