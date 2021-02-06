import styled from "styled-components";
import { device } from "../../styles/device";

const Div = styled.div`
  width: 100%;

  .container {
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.laptop} {
      flex-direction: row;
    }

    .image {
      flex: 1;

      img {
        width: 100%;
      }
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media ${device.laptop} {
        align-items: flex-start;
        text-align: left;
      }

      .name {
        font-weight: 400;
        margin-top: 20px;
      }

      .price {
        width: 100%;
        font-size: 22px;
        font-weight: 700;
        padding: 20px 0;
        border-bottom: 1px dashed ${(props) => props.theme.grey};
      }

      .size {
        font-weight: 400;
        margin: 20px 0;
      }

      .details {
        width: 100%;
        margin-top: 20px;
        padding: 20px 0;
        border-bottom: 1px dashed ${(props) => props.theme.grey};
        border-top: 1px dashed ${(props) => props.theme.grey};
      }
    }
  }
`;

export default Div;
