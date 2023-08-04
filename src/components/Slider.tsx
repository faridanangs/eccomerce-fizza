"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Selalu fresh, krispi dan panas",
    img: "/slide1.png",
  },
  {
    id: 2,
    title: "Kami akan mengantarkan pesanan anda di mana pun anda berada",
    img: "/slide2.png",
  },
  {
    id: 3,
    title: "Fizza terbaik untuk berbagi dengan keluarga",
    img: "/slide3.jpg",
  },
];

export default function Slider() {
  const [curentSlide, setCurentSlide] = useState(0);
  useEffect(() => {
    const intervalol = setInterval(() => {
      setCurentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalol);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text Container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-fizza_text font-bold">
        <h1 className="text-2xl text-center uppercase p-4 md:p-7 md:text-5xl xl:text-7xl">
          {data[curentSlide].title}
        </h1>
        <Link href='/orders' className="bg-fizza_bg text-center p-4 md:text-3xl rounded-md xl:text-4xl">
          Order Now
        </Link>
      </div>
      {/* Image Container */}
      <div className="flex-1 relative">
        <Image
          src={data[curentSlide].img}
          alt="Slide-1"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
