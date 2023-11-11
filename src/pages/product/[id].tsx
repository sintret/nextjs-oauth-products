import { retrieveDataById } from "@/lib/firebase/services";
import fetcher from "@/lib/swr/fetcher";
import { productType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: productType }) => {
  const { query, push } = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  // const { data, error, isLoading } = useSWR(
  //   "/api/product/" + query.id,
  //   fetcher
  // );

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  return (
    <div>
      <h1>Detail Product Page</h1>
      <p>Id : {query.id}</p>
      <div className="flex justify-center">
        {/*server side & static side rendering */}
        <DetailProduct product={product} />
        {/*client side */}
        {/* <DetailProduct product={isLoading ? {} : data.data} /> */}
      </div>
    </div>
  );
};

export default DetailProductPage;

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  //console.log(params);
  //fetch data
  const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
  const response = await res.json();
  //console.log(response);
  return {
    props: {
      product: response.data,
    },
  };
}

// export async function getStaticPaths({ params }: { params: { id: string } }) {
//   const res = await fetch(`http://localhost:3000/api/product`);
//   const response = await res.json();

//   const paths = response.data.map((data: productType) => ({
//     params: {
//       id: data.id,
//     },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
//   const response = await res.json();
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
