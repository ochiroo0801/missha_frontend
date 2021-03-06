import { Button, ButtonGroup } from "@material-ui/core";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { useCart } from "../../context/cart/use_cart";

function Counter({ product }) {
  const { addItem, removeItem } = useCart();

  const handleAdditem = (event) => {
    addItem(event);
  };

  const handleRemoveitem = (event) => {
    removeItem(event);
  };

  return (
    <Div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => handleRemoveitem(product)}>
          <AiOutlineMinus />
        </Button>

        <Button>{product.quantity}</Button>

        <Button onClick={() => handleAdditem(product)}>
          <AiOutlinePlus />
        </Button>
      </ButtonGroup>
    </Div>
  );
}

const Div = styled.div``;

export default Counter;
