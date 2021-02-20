import Link from "next/link";

import Card from "@material-ui/core/Card";
import { Button, CardActions } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Rating } from "@material-ui/lab";
import { motion } from "framer-motion";

import { FaShoppingBag } from "react-icons/fa";

import { useCart } from "../../context/cart/use_cart";
import { fromImageToUrl } from "../../utils/urls";

import Div from "./product_style";

function Product({ product }) {
  // const { handleAddToCart } = useContext(ShopContext);
  const { addItem } = useCart();

  const handleAddClick = (e) => {
    addItem(e);
  };

  return (
    <Div key={product.name}>
      <Card>
        <CardActionArea className="proCard">
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className="column">
                <div className="product_image">
                  <img src={fromImageToUrl(product.image)} alt="" />
                </div>
                <div>{product.name}</div>
              </div>
            </a>
          </Link>
        </CardActionArea>
        <CardActions>
          <div className="column">
            <div className="row">
              <Rating name="simple-controlled" value={product.rating} />
            </div>
            <div className="row">
              <div className="product_price">{product.price} Kč</div>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => handleAddClick(product)}
                  variant="contained"
                  color="secondary"
                  startIcon={<FaShoppingBag />}
                >
                  Сагсанд нэмэх
                </Button>
              </motion.div>
            </div>
          </div>
        </CardActions>
      </Card>
    </Div>
  );
}

export default Product;
