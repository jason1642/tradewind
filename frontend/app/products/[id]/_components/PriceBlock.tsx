import { ProductTypes } from "@/app/lib/types/productTypes";

const PriceBlock = ({ product }: { product: ProductTypes }) => {
  return (
    <div>
      <span className="font-bold">${product.price} </span>
      <span>
        or 4 payments of ${(+product.price / 4).toFixed(2)} with <b>afterpay</b>
      </span>
    </div>
  );
};

export default PriceBlock;
