import styled from "styled-components";

const Div = styled.div`
  transition: transform 0.3s;

  :hover {
    transform: scale(1.05);
  }

  .proCard {
    padding: 10px;
  }

  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .row {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product_price {
    font-size: 16px;
    font-weight: 700;
  }
`;

export default Div;
