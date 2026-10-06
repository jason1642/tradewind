"use client";
import Image from "next/image";

const ProductGallery = () => {
  return (
    <div className="flex flex-col border relative">
      <div className="w-full h-full bg-gray-800 absolute top-1 left-1"></div>
      <Image
        src={"/products/headphones/studio-one-midnight.png"}
        alt="headphone-placeholder"
        className=""
        width={500}
        height={300}
      />
      <p>This is the product image and slide show</p>
    </div>
  );
};

export default ProductGallery;
