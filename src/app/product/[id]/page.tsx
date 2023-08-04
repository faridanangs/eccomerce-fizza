import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string
  }
}

export function generateMetadata({params}:Props){
  return {
    title: singleProduct.title,
    description: singleProduct.desc,
    alternates: {
      canonical: `product/${params.id}`,
      languages: {
        'en-US': `en-US/product/${params.id}`
      }
    }
  }
}


const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col gap-8 text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-[30%] md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt="img container product"
            className="object-contain"
            fill
            quality={100}
            priority
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-xl sm:text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  );
};

export default SingleProductPage;
