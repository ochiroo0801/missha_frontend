import { Button, Link } from "@material-ui/core";
import { MdDeleteForever } from "react-icons/md";

import { fromImageToUrl } from "../utils/urls";
import { useCart } from "../context/cart/use_cart";

import Counter from "./Counter/Counter";

function Quantity({ data }) {
  const { removeItemFromCart } = useCart();

  const handleRemoveClick = (e) => {
    removeItemFromCart(e);
  };

  return (
    <div className="cartItem" key={data.id}>
      <div className="product_info">
        <Link href={`/products/${data.slug}`}>
          <div className="image">
            <img src={fromImageToUrl(data.image)} alt="" />
          </div>
        </Link>

        <div className="content">
          <div className="info">
            <h5>{data.brand}</h5>
            <h4>{data.name}</h4>
            <p>{data.size} ml</p>
          </div>
          <div className="priceAndTools">
            <h4>{data.price} Kč</h4>
            ************
            <h4>{data.price * data.quantity} Kč</h4>
            <Counter product={data} />
            <Button
              variant="contained"
              startIcon={<MdDeleteForever />}
              color="primary"
              size="small"
              className="tools"
              onClick={() => handleRemoveClick(data)}
            >
              <p>Устгах</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quantity;
