import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

export interface FeaturesProps {
  icon: any;
  title: string;
  text: string;
}

export interface CurratedProps {
  image: any;
  text: string;
}

export interface FeaturedProps {
  image: any;
  text: string;
  price: number;
  discountFrom?: string;
}

export interface ButtonProps {
  text: string;
  width: string;
}
