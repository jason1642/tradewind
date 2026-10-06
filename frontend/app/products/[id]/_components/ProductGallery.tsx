"use client";
import Image from "next/image";

const ProductGallery = () => {
  return (
    <div className="flex flex-col border relative">
      {/* <div className="w-full h-full bg-gray-800 absolute top-1 left-1"></div> */}
      {/* Main content */}
      <div>
        <span className="absolute left-6.25 top-6 z-2 inset-0 grid place-items-center text-[#596053]">
          FORM, MEET FUNCTION
        </span>
        <span className="absolute top-6 inset-0 grid z- 2 place-items-center text-[#596053]">
          01 <i /> 03
        </span>
        <Image
          src={"/products/headphones/studio-one-midnight.png"}
          alt="headphone-placeholder"
          className="absolute grid inset-0 place-items-center pt-6"
          width={500}
          height={300}
        />
      </div>

      {/* Thumbnails */}
      <div>
        <p>This is the product image and slide show</p>
      </div>
    </div>
  );
};

export default ProductGallery;
