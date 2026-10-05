"use client";
import Image from "next/image";

const ProductGallery = () => {
  return (
    <div className="flex flex-col border">
      <Image
        src={"/products/headphones/studio-one-midnight.png"}
        alt="headphone-placeholder"
        width={500}
        height={300}
      />
      <p>This is the product image and slide show</p>
    </div>
  );
};

export default ProductGallery;
