import { useState, useContext, useEffect } from "react";
import {
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { MdDeleteForever } from "react-icons/md";

import ShopContext from "../context/ShopContext";
import { fromImageToUrl } from "../utils/urls";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const QuantityChanger = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(event);
  };
  return { quantity, handleChange };
};

function Quantity({ data }) {
  const { handleRemoveItem, setPrice, handleTotalPrice } = useContext(
    ShopContext
  );
  const { quantity, handleChange } = QuantityChanger();

  useEffect(() => {
    handleTotalPrice(data.price * quantity);
    // const price = data?.map((e) => e.price * quantity);
    // if (price.length !== 0) {
    //   const total = price.reduce(myFunction);
    //   function myFunction(total, value) {
    //     return total + value;
    //   }
    //   setTotalPrice(total);
    // }
  }, [quantity]);

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
            <h3>{data.price * quantity}</h3>
            <div style={{ width: "100%" }}>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Тоо ширхэг
                </InputLabel>
                <Select
                  native
                  value={quantity}
                  onChange={(e) => handleChange(e.target.value)}
                  label="Тоо ширхэг"
                >
                  <option aria-label="None" value="" />
                  {count.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </div>

            <Button
              variant="contained"
              startIcon={<MdDeleteForever />}
              color="primary"
              size="small"
              className="tools"
              onClick={() => handleRemoveItem(data.id)}
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
