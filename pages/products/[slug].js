import Head from "next/head";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import BuyButton from "../../components/BuyButton/BuyButton";
import Div from "../Styles/product_style";
import Wrapper from "../../styles/Wrapper";

const Product = ({ product }) => {
  return (
    <Wrapper>
      <Div>
        <Head>
          {product.meta_title && <title>{product.meta_title}</title>}
          {product.meta_description && (
            <meta name="description" content={product.meta_description} />
          )}
        </Head>
        <div className="container">
          <div className="image">
            <img src={fromImageToUrl(product.image)} alt="" />
          </div>
          <div className="content">
            <h2 className="brand">{product.brand}</h2>
            <h3 className="name">{product.name}</h3>
            <h4 className="price">{product.price} Kč</h4>
            <h4 className="size">{product.size} ml</h4>
            <BuyButton product={product} />
            <p className="details">{product.content}</p>
          </div>
        </div>
      </Div>
    </Wrapper>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();

  return {
    props: {
      product: found[0],
    },
  };
}

export async function getStaticPaths() {
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();

  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false,
  };
}

export default Product;
