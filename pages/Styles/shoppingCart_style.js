import styled from "styled-components";

const Div = styled.div`
  padding: 50px 0;
  background: ${(props) => props.theme.grey_bg};
`;

export const Empty = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  text-align: center;

  img {
    min-width: 250px;
    max-width: 60vh;
  }
`;

export const Cart = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Checkout_Products = styled.div`
  flex: 0.5;

  .tools {
    a {
      text-decoration: none !important;
      color: #fff;
      font-size: 10px;
    }
  }

  .cartItem {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 15px;
    background: #fff;

    .product_info {
      display: flex;

      .image {
        width: 100px;
        border-radius: 15px;
        overflow: hidden;
        border: ${(props) => props.theme.pink} 1px solid;

        img {
          width: 100%;
        }
      }

      .content {
        margin-left: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        letter-spacing: 0.2px;

        .info {
          width: 80%;
          display: flex;
          flex-direction: column;

          h4 {
            color: ${(props) => props.theme.blue};
            font-size: 12px;
            font-weight: 500;
            padding: 5px 0;
          }

          h5 {
            color: ${(props) => props.theme.grey};
            font-weight: 500;
          }

          p {
            color: ${(props) => props.theme.orange};
          }
        }

        .priceAndTools {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          p {
            font-size: 17px;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export const Checkout_Method = styled.div`
  flex: 0.48;
  width: 100%;
  height: 50vh;
  background: #fff;
  border-radius: 20px;
  position: sticky;
  top: 0;
`;

export default Div;
