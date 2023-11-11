import Link from "next/link";
import styles from "./Register.module.scss";
import { useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    setError("");
    event.preventDefault();
    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      setIsLoading(false);
      setError("Failed to register");
    }

    setIsLoading(false);
    if (response.ok) {
      const res = await response.json();
      if (res.status) {
        window.location.href = "/auth/login";
      } else {
        setError("Failed to register, email exist!!!");
      }
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <form className={styles.register__form} onSubmit={handleSubmit}>
        <div className={styles.register__form__item}>
          <label
            className={styles.register__form__item__label}
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            className={styles.register__form__item__input}
            type="text"
            name="fullname"
            id="fullname"
            placeholder="fullname"
          />
        </div>

        <div className={styles.register__form__item}>
          <label className={styles.register__form__item__label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.register__form__item__input}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className={styles.register__form__item}>
          <label
            className={styles.register__form__item__label}
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={styles.register__form__item__input}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>

        <button
          className={styles.register__form__item__button}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Is Loading... " : "Register"}
        </button>
      </form>
      <span className={styles.error}>{error}</span>
      <p>
        have an acount ? click{" "}
        <Link className={styles.link} href="/auth/login">
          here
        </Link>
      </p>
    </div>
  );
};

export default RegisterView;
