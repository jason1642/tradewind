import { ProductTypes } from "@/app/lib/types/productTypes";

// category eyebrow, star rating, review count, title, tagline, description
// can use placeholders for now if backend doesnt have info in models
const ProductHeader = ({ product }: { product: ProductTypes }) => {
  console.log(product);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span>{product.category.name}</span>
        <span>218 Reviews</span>
      </div>
      <h1 className="text-ink font-bold text-[50px] ">
        {/* {product.name} */} Air Pod Max
      </h1>
    </div>
  );
};

export default ProductHeader;
