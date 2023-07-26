"use client";
import { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price({ price, id, options }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(()=> {
    setTotal(
      quantity * (options? price + options[selected].additionalPrice : price )
    )
  }, [selected, quantity, price, options])

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <h2 className="text-xl sm:text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Option Container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-1 ring-1 min-w-[5rem] sm:min-w-[6rem]  ring-fizza_text rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "rgb(255 102 47)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity And Add Product  */}
      {/* Quantity */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-2 sm:p-3 ring-1 ring-fizza_bg ">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* Cart Button */}
        <button className="sm:uppercase w-56 p-2 bg-fizza_bg text-white sm:p-3 ring-1 ring-fizza_bg">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
