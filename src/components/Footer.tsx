import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center bg-fizza_bg p-4 md:h-20 h- lg:p-20 text-black">
      <Link href="" className="font-bold">
        FizzaTe
      </Link>
      <p>@ All RIGHT RESERVED</p>
    </div>
  );
}
