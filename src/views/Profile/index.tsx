import { useSession } from "next-auth/react";
import styles from "./Profile.module.scss";

const ProfileView = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.profile}>
      <h1 className={styles.profile__title}>Profile Page</h1>
      <p>{data?.user.email}</p>
      <p>{data?.user.fullname}</p>
    </div>
  );
};

export default ProfileView;
