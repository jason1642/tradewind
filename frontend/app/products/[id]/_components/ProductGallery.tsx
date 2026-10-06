"use client";
import Image from "next/image";
import styles from "./product.module.css";

const ProductGallery = () => {
  return (
    <div className="flex flex-col relative">
      {/* <div className="w-full h-full bg-gray-800 absolute top-1 left-1"></div> */}
      {/* Main content */}
      <div className={styles.heroVisual}>
        <span className={styles.visualTag}>Best Noise Cancellation</span>
        <span className={styles.visualIndex}>
          01 <i /> 03
        </span>
        <div className={styles.productStage}>
          <Image
            src={"/products/headphones/studio-one-midnight.png"}
            alt="headphone-placeholder"
            className={styles.productImage}
            width={500}
            height={300}
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnails} aria-label="Product views">
        <button className={styles.activeThumb} aria-label="Front view">
          <Image
            src={"/products/headphones/studio-one-midnight.png"}
            alt="headphone-placeholder"
            className={styles.productImage}
            width={500}
            height={300}
          />
        </button>
        <button aria-label="Side view">
          <span className={styles.detailThumb}>◌</span>
        </button>
        <button aria-label="Materials">
          <span className={styles.detailThumb}>✳</span>
        </button>
        <span className={styles.thumbHint}>
          A closer listen <b>↗</b>
        </span>
      </div>
    </div>
  );
};

export default ProductGallery;
