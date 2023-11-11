import ProductView from "@/views/Product";
// import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "@/lib/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  //const [products, setProducts] = useState([]);
  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  if (error) return "An error has occurred.";
  if (isLoading) return <div>Loading...</div>;

  // console.log(data);
  // console.log(error);
  // console.log(isLoading);

  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
