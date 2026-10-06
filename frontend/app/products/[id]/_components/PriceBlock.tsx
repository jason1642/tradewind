import { ProductTypes } from "@/app/lib/types/productTypes";

const PriceBlock = ({ product }: { product: ProductTypes }) => {
  return (
    <div className="font-bold text-[19px] tracking-tight ">
      ${product.price}
      <span className="text-[10px] text-[#7e8177] tracking-normal ml-2">
        or 4 payments of ${(+product.price / 4).toFixed(2)} with{" "}
        <b className="text-[#53614e]">afterpay</b>
      </span>
    </div>
  );
};

export default PriceBlock;
