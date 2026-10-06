import styles from "./product.module.css";
import { ProductTypes } from "@/app/lib/types/productTypes";

const Perks = ({ product }: { product: ProductTypes }) => {
  return (
    <div className={styles.perks}>
      <div>
        <span>↗</span>
        <p>
          <b>Free shipping</b>
          <small>On every order, always.</small>
        </p>
      </div>

      <div>
        <span>↺</span>
        <p>
          <b>30-day listening</b>
          <small>Love them or send them back.</small>
        </p>
      </div>
    </div>
  );
};

export default Perks;
