import Image1 from "./img1.jpg";
import Image2 from "./img2.jpg";
import Image3 from "./img3.jpg";
import Model1 from "./model1.jpg";
import Model2 from "./model2.jpg";
import Model3 from "./model3.jpg";
import Model4 from "./model4.jpg";
import Featured1 from "./Featured1.jpg";
import Featured2 from "./Featured2.jpg";
import Featured3 from "./Featured3.jpg";
import Featured4 from "./Featured4.jpg";
const data = {
  images: [Image1, Image2, Image3],
  models: [
    {
      key: 1,
      image: Model1,
      text: "Shop Men",
    },
    {
      key: 2,
      image: Model2,
      text: "Shop Women",
    },
    {
      key: 3,
      image: Model3,
      text: "Best seller",
    },
    {
      key: 4,
      image: Model4,
      text: "New Arrivals",
    },
  ],
  featured: [
    {
      key: 1,
      image: Featured4,
      name: "Autumn Dress",
      price: 50,
      discountFrom: "60",
    },
    {
      key: 2,
      image: Featured2,
      name: "Summer vibes",
      price: 49,
    },
    {
      key: 3,
      image: Featured3,
      name: "Coat",
      price: 56,
      discountFrom: "70",
    },
  ],
};
export default data;
