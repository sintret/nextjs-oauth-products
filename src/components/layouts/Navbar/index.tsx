import styles from "./Navbar.module.css";
import { signOut, useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Script from "next/script";
const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <h1 id="navbar">Navbar</h1>
      <Script id="script-navbar" strategy="lazyOnload">
        {`document.getElementById('navbar').innerHTML = 'Navbars via script'`}
      </Script>
      <div className={styles.box_profile}>
        {data && (
          <span>
            {data.user.fullname} | <small>{data.user.role}</small>
          </span>
        )}

        {data && data.user.image && (
          // <img
          //   className={styles.avatar}
          //   src={data.user.image}
          //   alt={data.user.fullname}
          // />
          <Image
            src={data.user.image}
            alt={data.user.fullname}
            width={40}
            height={40}
            className={styles.avatar}
          />
        )}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
