import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryPage() {
  return (
    <div className="flex flex-wrap text-fizza_text ">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 group odd:bg-sky-100 sm:w-1/2 lg:w-1/3 p-4 border-fizza_bg flex flex-col justify-between"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* Image Container */}
          {item.img && (
            <div className="relative h-[70%]">
              <Image
                src={item.img}
                alt="Image Catogory"
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* Text Container */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-xl uppercase p-1">{item.title}</h1>
            <h2 className="group-hover:hidden">${item.price}</h2>
            <button className="uppercase hidden group-hover:block bg-fizza_bg text-white p-2 rounded-md">Add To Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
}
