import Head from "next/head";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import Div from "../Styles/product_style";
import Wrapper from "../../styles/Wrapper";
import { Button, IconButton } from "@material-ui/core";
import {
  FaFacebook,
  FaInstagram,
  FaShoppingBag,
  FaTwitter,
} from "react-icons/fa";
import { Rating } from "@material-ui/lab";
import { motion } from "framer-motion";

import { useCart } from "../../context/cart/use_cart";

const Product = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    addItem(e);
  };

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

            <p>Үнэлгээ</p>
            <Rating name="simple-controlled" value={product.rating} />

            <h4 className="size">{product.size} ml</h4>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                startIcon={<FaShoppingBag />}
                variant="contained"
                color="secondary"
                onClick={() => handleAddToCart(product)}
              >
                Сагсанд нэмэх
              </Button>
            </motion.div>

            <p className="details">{product.content}</p>
            <div className="share">
              <h4>Сошилоор хуваалцах</h4>
              <IconButton variant="contained" color="secondary">
                <FaInstagram />
              </IconButton>
              <IconButton variant="contained" color="primary">
                <FaFacebook />
              </IconButton>
              <IconButton variant="contained" color="primary">
                <FaTwitter />
              </IconButton>
            </div>
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
