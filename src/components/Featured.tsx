import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-fizza_text">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single items */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center p-4 
            justify-around md:w-[50vw] xl:w-[33vw]"
          > 
            {/* Image Container */}
            {item.img && (
              <div className="relative flex-1 w-full">
                <Image src={item.img} alt="" fill className="object-contain hover:scale-[1.1] transition-all duration-500" />
              </div>
            )}
            {/* Text Conatiner */}
            <div className="flex-1 flex-col flex gap-4 mt-1 justify-center text-center items-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-6">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-fizza_bg text-white p-2 rounded-md">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
