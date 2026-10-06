import { ProductTypes } from "@/app/lib/types/productTypes";
import styles from "./product.module.css";

const PurchaseActions = ({ product }: { product: ProductTypes }) => {
  return (
    // Add toggles to button text if item was added to cart or item was saved to wishlist
    <div className="flex flex-col w-full">
      <button className={styles.addToCartButton}>
        <span>Add to bag</span>
        <span>${product.price}</span>
      </button>

      <button className={styles.saveButton} type="button">
        {/*  {saved ? "♥  Saved to your wishlist" : */}♡ Save for later
        {/* } */}
      </button>
    </div>
  );
};

export default PurchaseActions;
