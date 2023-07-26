import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Carticon from "./Carticon";
import Image from "next/image";

export default function Navbar() {
  const user = false;
  return (
    <div className="h-12 text-fizza_text p-4 flex items-center justify-between border-b-2 border-b-fizza_bg md:h-20 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1 font-bold">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* Logo */}
      <div className="text-xl flex-1 md:text-center xl:text-2xl font-bold">
        <Link href="/">FizzaNte</Link>
      </div>
      {/* Menu Mobile */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-2 md:bg-fizza_text r-2 lg:static flex items-center gap-4 cursor-pointer bg-fizza_bg px-2 py-1 rounded-md text-white">
            <Image src='/cart.png' alt="Phone img" width={20} height={20} />
            <span>081 234 567</span>
        </div>
        {!user ? <Link className="font-bold" href="/login">Login</Link> : <Link className="font-bold" href="/order">Order</Link>}
        <Carticon/>
      </div>
    </div>
  );
}
