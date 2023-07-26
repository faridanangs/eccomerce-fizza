"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Carticon from "./Carticon";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Menu Img"
          width={25}
          height={25}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/cart.png"
          alt="Menu Img"
          width={25}
          height={25}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div
          className="bg-fizza_bg text-white font-bold absolute z-[89] 
        left-0 top-24 h-[calc(100vh-6rem)] flex justify-center 
        flex-col text-2xl w-full gap-8 items-center"
        >
          {links.map((data) => (
            <Link href={data.url} key={data.id} onClick={() => setOpen(false)}>
              {data.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Order
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <Carticon />
          </Link>
        </div>
      )}
    </div>
  );
}
