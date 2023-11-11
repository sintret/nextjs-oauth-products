import { productType } from "@/types/product.type";
import styles from "./Product.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProductView = ({ products }: { products: productType[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product Page</h1>
      <div className={styles.product__content}>
        {products.length > 0 ? (
          products.map((product: productType) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className={styles.product__content__item}
            >
              <Link
                href={`/product/${product.id}`}
                className={styles.product__content__item__image}
              >
                {/* <img src={product.image} alt={product.name} /> */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                />
              </Link>
              <h4 className={styles.product__content__item__name}>
                {product.name}
              </h4>
              <p className={styles.product__content__item__category}>
                {product.category}
              </p>
              <p className={styles.product__content__item__price}>
                {product.price.toLocaleString("id-ID", {
                  currency: "IDR",
                  style: "currency",
                })}
              </p>
            </Link>
          ))
        ) : (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__item}>
              <div
                className={styles.product__content__skeleton__item__image}
              ></div>
              <div
                className={styles.product__content__skeleton__item__name}
              ></div>
              <div
                className={styles.product__content__skeleton__item__category}
              ></div>
              <div
                className={styles.product__content__skeleton__item__price}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
