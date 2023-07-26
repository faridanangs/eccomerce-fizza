import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Carticon() {
  return (
    <Link href="/cart" className="flex items-center gap-2 font-bold">
      <div className="relative w-8 h-8 md:w-6 md:h-6">
        <Image src="/cart.png" alt="Cart Img" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
}
