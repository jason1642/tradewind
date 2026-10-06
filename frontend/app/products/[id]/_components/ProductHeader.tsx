import { ProductTypes } from "@/app/lib/types/productTypes";
import StarRating from "./StarRating";
const PLACEHOLDER = {
  tagline: "Sound, in its element.",
  rating: 4.9,
  reviewCount: 218,
};
// category eyebrow, star rating, review count, title, tagline, description
// can use placeholders for now if backend doesnt have info in models
const ProductHeader = ({ product }: { product: ProductTypes }) => {
  console.log(product);
  return (
    <div className="flex flex-col w-full pt-3">
      <div className="flex items-center justify-between gap-4">
        <span>{product.category.name}</span>
        <div className="flex items-center gap-2 text-xs text-muted">
          <StarRating rating={PLACEHOLDER.rating} />
          <span>
            {" "}
            {PLACEHOLDER.rating} · {PLACEHOLDER.reviewCount} reviews
          </span>
        </div>
      </div>
      <h1 className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-tight text-ink lg:text-[64px] ">
        {/* {product.name} */} Air Pods Max
      </h1>

      <p className="mt-3 text-sm text-muted">{PLACEHOLDER.tagline}</p>

      {product.description && (
        <p className="mt-6.5 mb-5 max-w-102 font-serif text-[19px] leading-[1.6] text-body">
          {product.description}
          {product.description}
        </p>
      )}
    </div>
  );
};

export default ProductHeader;
