import Head from "next/head";
import Slider from "../components/Slider/Slider";

import { API_URL } from "../utils/urls";
import Product from "../components/Product/Product";

export default function Home({ products, data }) {
  const { Title, items, description } = data;

  console.log(data);

  return (
    <div>
      <Head>
        <title>{Title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {items.map((e) => {
        if (e.component === "slider")
          return <Slider key={e.id} data={e.image} autoplay={true} />;
      })}

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // HomePage components
  const res = await fetch(`${API_URL}/homepage`);
  const data = await res.json();

  // Fetch the products
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();

  // Return the products as props
  return {
    props: {
      products,
      data,
    },
  };
}
