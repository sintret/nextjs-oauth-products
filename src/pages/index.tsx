import Navbar from "@/components/layouts/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <span>Hello World, Nice Learning ...</span>
    </div>
  );
}
