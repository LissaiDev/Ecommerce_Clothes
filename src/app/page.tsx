"use client";
import data from "@/assets/images";
import { Carousel } from "antd";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Features from "@/components/Features";
import {
  CarOutlined,
  MailOutlined,
  MoneyCollectOutlined,
  ShoppingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import Currated from "@/components/Currated";
import { Raleway } from "next/font/google";
import Products from "@/components/Products";
const raleway = Raleway({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`min-h-screen container mx-auto ${raleway.className}`}>
      <section className="">
        <Carousel autoplay>
          {data.images.map((image, index) => (
            <div className="h-56 md:h-72 relative" key={index}>
              <Image
                src={image}
                alt="carousel image"
                width={1600}
                height={288}
                className="object-contain"
              />
              <div className="carousel absolute bottom-0 z-10 left-0 w-full h-full flex justify-center items-center">
                <div className="w-10/12">
                  <h1
                    className={`text-center ${raleway.className}  text-2xl md:text-6xl text-white`}
                  >
                    Level up your styles with our summer collections
                  </h1>
                  <CustomButton text="Shop" width={"w-20"} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="mt-10">
        <div className="flex">
          <div className="w-7/12">
            <h1 className={` w-1/2 text-4xl font-bold`}>
              We provide the best customer experience
            </h1>
          </div>
          <div className="w-5/12 flex ps-5 items-center border-l-2 border-l-black">
            <p className="text-xl text-textMuted">
              We ensure our customers have the best shopping experience
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap mx-2 mt-10 sm:mx-0">
        <Features
          icon={<MoneyCollectOutlined />}
          title="Original products"
          text="We provide money back guarantee if the products are not original"
        />
        <Features
          icon={<SmileOutlined />}
          title="Satisfaction guaranteed"
          text="Exchange the product you purchased if it does not fit you"
        />
        <Features
          icon={<ShoppingOutlined />}
          title="New arrival everyday"
          text="We update our collection almost everyday"
        />
        <Features
          icon={<CarOutlined />}
          title="Fast & Free shipping"
          text="We offer free and fast shipping for our loyal customers"
        />
      </section>

      <section className="mt-10">
        <h1 className={`text-4xl font-bold mb-5`}>Currated picks</h1>
        <div className="pl-2 flex gap-2 flex-wrap">
          {data.models.map((item) => (
            <Currated image={item.image} text={item.text} key={item.key} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h1 className="text-4xl font-bold mb-7">Featured products</h1>
        <div className="flex flex-wrap gap-7">
          {data.featured.map((item) => (
            <Products
              text={item.name}
              image={item.image}
              price={item.price}
              key={item.key}
            />
          ))}
        </div>
      </section>

      <section className="mt-14 flex">
        <Image
          src={data.images[2]}
          className="w-5/12 md:block hidden rounded-s-xl"
          alt="special offer"
        />
        <div className="w-11/12 mx-auto rounded-xl md:w-7/12 bg-darkColor items-center flex md:rounded-none md:rounded-e-xl p-12">
          <div>
            <span className="text-white opacity-50 ">LIMITED OFFER</span>
            <h1 className="text-6xl font-bold text-white">
              35% off only this friday and get special gift
            </h1>
          </div>
        </div>
      </section>

      <section className="my-14 text-center flex ">
        <div className="md:w-6/12 w-11/12 mx-auto">
          <h1 className="text-2xl font-semibold mb-3">
            Subscribe to our newsletter to get updates to our latest collections
          </h1>
          <p className="text-textMuted mb-4">
            Get 20% off on your first order just by subscribing to our
            newsletter
          </p>
          <div className="w-11/12 flex rounded mb-3 bg-muted2 xl:w-6/12 mx-auto">
            <MailOutlined className="text-textMuted text-xl mx-3" />
            <input
              type="text"
              className="flex-1 rounded-e bg-muted2 h-12 outline-none"
              placeholder="Enter your email"
            />
            <button className="rounded block px-4 bg-darkColor text-white">
              Subscribe
            </button>
          </div>
          <p className="text-textMuted">
            You will be able to unsubscribe at any time
          </p>
          <p className="text-textMuted">Read our policy privace</p>
        </div>
      </section>
    </main>
  );
}
