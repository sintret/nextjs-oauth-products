import Link from "next/link";
import styles from "./Login.module.scss";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res.error);
      }
    } catch (error: any) {
      setIsLoading(false);
      setError(error + "");
    }
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label className={styles.login__form__item__label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.login__form__item__input}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className={styles.login__form__item}>
            <label
              className={styles.login__form__item__label}
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={styles.login__form__item__input}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>

          <button
            className={styles.login__form__item__button}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Is Loading... " : "Login"}
          </button>
        </form>

        <div className={styles.login__form__item__or}>Or</div>
        <button
          className={styles.login__button_google}
          onClick={() => signIn("google", { callbackUrl, redirect: false })}
        >
          Google Sign In
        </button>
      </div>

      <span className={styles.error}>{error}</span>
      <p>
        Don{"'"} have an acount ? click{" "}
        <Link className={styles.link} href="/auth/register">
          here
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
