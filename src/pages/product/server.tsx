import ProductView from "@/views/Product";
import { productType } from "@/types/product.type";

const ProductPage = (props: { products: productType[] }) => {
  const { products } = props;
  return <ProductView products={products} />;
};

export default ProductPage;

//this default function is for getServerSideProps
export async function getServerSideProps() {
  //fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const response = await res.json();
  console.log(response);

  return {
    props: {
      products: response.data,
    },
  };
}
