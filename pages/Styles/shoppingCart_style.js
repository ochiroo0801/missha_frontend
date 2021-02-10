import styled from "styled-components";

const Div = styled.div`
  /* ... */
`;

export const Empty = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cart = styled.div`
  .cartItem {
    width: 50%;
    display: flex;
    flex-direction: column;

    .product_info {
      display: flex;

      .image {
        width: 100px;

        img {
          width: 100%;
        }
      }

      .content {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .info {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

export default Div;
