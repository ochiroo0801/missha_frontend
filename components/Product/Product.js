import Link from "next/link";
import { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { FaShoppingBag } from "react-icons/fa";

import { fromImageToUrl } from "../../utils/urls";
import Div from "./product_style";
import { Button, CardActions } from "@material-ui/core";
import ShopContext from "../../context/ShopContext";
import { Rating } from "@material-ui/lab";
import Quantity from "../Quantity";

function Product({ product }) {
  const { handleAddToCart, handleChange, QuantityChanger } = useContext(
    ShopContext
  );
  const { quantity, setQuantity } = QuantityChanger();

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
              <Quantity
                handleChange={(e) => handleChange(e.target.value, setQuantity)}
                width={"40%"}
                quantity={quantity}
              />
            </div>
            <div className="row">
              <div className="product_price">{product.price} Kč</div>
              <Button
                onClick={() => handleAddToCart(product, quantity)}
                variant="contained"
                color="secondary"
                startIcon={<FaShoppingBag />}
              >
                Сагсанд нэмэх
              </Button>
            </div>
          </div>
        </CardActions>
      </Card>
    </Div>
  );
}

export default Product;
