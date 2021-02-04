import Head from "next/head";
import Product from "../components/Product/Product";
import { API_URL } from "../utils/urls";
import Shop from "./Styles/shop_style";
import Wrapper from "../styles/Wrapper";

function shop(props) {
  const { products } = props;

  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      <Wrapper>
        <Shop>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Shop>
      </Wrapper>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch the products
  const product_res = await fetch(`${API_URL}/products`);
  const products = await product_res.json();

  // Return the products as props
  return {
    props: {
      products,
    },
  };
}

export default shop;
