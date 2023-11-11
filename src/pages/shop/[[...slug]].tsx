import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();

  console.log(JSON.stringify(query));
  return (
    <div>
      <h1>Detail Product Page</h1>
      <p>Id : {Array.isArray(query.slug) && query.slug.join(" - ")}</p>
    </div>
  );
};

export default ShopPage;
