import Link from "next/link";
import { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { FaShoppingBag } from "react-icons/fa";

import { fromImageToUrl } from "../../utils/urls";
import Div from "./product_style";
import { Button, CardActions } from "@material-ui/core";
import ShopContext from "../../context/ShopContext";

function Product({ product }) {
  const { handleAddToCart, products } = useContext(ShopContext);

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
                <div className="product_name">{product.name}</div>
              </div>
            </a>
          </Link>
        </CardActionArea>
        <CardActions>
          <div className="row">
            <div className="product_price">{product.price} Kč</div>
            <Button
              onClick={() => handleAddToCart(product)}
              variant="contained"
              color="secondary"
              startIcon={<FaShoppingBag />}
            >
              Сагсанд нэмэх
            </Button>
          </div>
        </CardActions>
      </Card>
    </Div>
  );
}

export default Product;
