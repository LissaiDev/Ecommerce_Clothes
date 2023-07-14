import { FeaturesProps } from "@/@types";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
});
const Features = ({ icon, title, text }: FeaturesProps) => {
  return (
    <div className={`w-1/2 mb-3 md:w-3/12 px-1 ${raleway.className}`}>
      <span className="inline-block py-4 px-5 bg-muted rounded-2xl">
        {icon}
      </span>
      <h1 className="text-bold mt-2">{title}</h1>
      <p className="mt-1 text-textMuted">{text}</p>
    </div>
  );
};

export default Features;
