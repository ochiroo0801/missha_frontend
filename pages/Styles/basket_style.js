import styled from "styled-components";
import { device } from "../../styles/device";

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
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    color: ${(props) => props.theme.grey};
    border-bottom: 1px dashed ${(props) => props.theme.grey};
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
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
            color: ${(props) => props.theme.black};
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

          h4 {
            font-size: 18px;
            font-weight: 500;
            color: ${(props) => props.theme.black};
          }

          p {
            font-size: 10px;
          }
        }
      }
    }
  }
`;

export const Checkout_Method = styled.div`
  flex: 0.48;
  position: sticky;
  top: 0;

  .container {
    height: 50vh;
    background: #fff;
    border-radius: 20px;
  }
`;

export default Div;
