import styles from "@/styles/404.module.scss";
import Image from "next/image";

const CustomError = () => {
  return (
    <div className={styles.error}>
      {/* <img src="/img/404.png" alt="404" className={styles.error___image} /> */}
      <Image
        src="/img/404.png"
        alt="404"
        width={400}
        height={300}
        className={styles.error___image}
      />
      <div>404 | Halaman tidak ditemukan</div>
    </div>
  );
};

export default CustomError;
