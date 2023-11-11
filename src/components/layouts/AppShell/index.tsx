import { useRouter } from "next/router";
//import Navbar from "../Navbar";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar"));

type AppShellProps = {
  children: React.ReactNode;
};

const robot = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const disableNavbar = ["/auth/register", "/auth/login", "/404"];
const AppShell = (props: AppShellProps) => {
  const { pathname } = useRouter();
  const { children } = props;
  return (
    <main className={robot.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
