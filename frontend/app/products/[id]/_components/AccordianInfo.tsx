import styles from "./product.module.css";
import { ProductTypes } from "@/app/lib/types/productTypes";

const AccordianInfo = ({ product }: { product: ProductTypes }) => {
  return (
    <div className={styles.accordions} id="details">
      <details open>
        <summary>
          Made for the long way around <span>_</span>
        </summary>
        <p>
          Adaptive noise cancelling, beautifully balanced audio, and up to 40
          hours of listening. A lightweight frame and soft-touch cushions make
          the hours disappear.
        </p>
      </details>

      <details>
        <summary>
          What’s in the box <span>+</span>
        </summary>
        <p>
          Studio One headphones, a woven USB-C charging cable, a soft travel
          pouch, and a little room to breathe.
        </p>
      </details>

      <details>
        <summary>
          Thoughtful by design <span>+</span>
        </summary>
        <p>
          Responsibly sourced materials, replaceable ear cushions, and packaging
          made entirely without plastic.
        </p>
      </details>
    </div>
  );
};

export default AccordianInfo;
