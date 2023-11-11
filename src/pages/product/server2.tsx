import ProductView from "@/views/Product";
import { productType } from "@/types/product.type";

const ProductPage2 = ({ products }: { products: productType[] }) => {
  return <ProductView products={products} />;
};

export default ProductPage2;

//this default function is for getServerSideProps
// dipanggil setiap melakukan request
export async function getServerSideProps() {
  //fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const response = await res.json();
  console.log(response);

  return { props: { products: response.data } };
}
