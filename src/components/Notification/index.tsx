import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
});
import React from "react";
const Notification = () => {
  return (
    <div className={`${raleway.className} bg-darkColor py-1`}>
      <div className="container mx-auto">
        <p className="text-white text-center">
          Sign up and get <span className="font-bold">20% OFF</span> for your
          first order. <span className="font-bold">Sign up now</span>
        </p>
      </div>
    </div>
  );
};

export default Notification;
