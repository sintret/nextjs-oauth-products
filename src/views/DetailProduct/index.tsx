import { productType } from "@/types/product.type";
import Link from "next/link";
import styles from "@/views/Product/Product.module.scss";

const DetailProduct = (props: { product: productType }) => {
  const { product } = props;
  return (
    <div key={product.name} className={styles.product__content__item}>
      <div className={styles.product__content__item__image}>
        <img src={product.image} alt={product.name} />
      </div>
      <h4 className={styles.product__content__item__name}>{product.name}</h4>
      <p className={styles.product__content__item__category}>
        {product.category}
      </p>
      <p className={styles.product__content__item__price}>
        {product.price &&
          product.price.toLocaleString("id-ID", {
            currency: "IDR",
            style: "currency",
          })}
      </p>
    </div>
  );
};

export default DetailProduct;
