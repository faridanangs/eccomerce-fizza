import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

export default function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8  p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicius Burger & French Fry</h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          incidunt quaerat, hic tempora voluptatibus veritatis reiciendis odio
        </p>
        <CountDown />
        <button className="text-white p-3 rounded-md px-5 bg-fizza_bg">Order Now</button>
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full relative">
        <Image
          src="/offerProduct.png"
          fill
          alt="Offer img"
          className="object-contain w-full"
        />
      </div>
    </div>
  );
}
