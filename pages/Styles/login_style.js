import styled from "styled-components";
import { device } from "../../styles/device";

const Div = styled.div`
  background: ${(props) => props.theme.grey};

  form {
    max-width: 300px;
    min-width: 300px;
    margin: auto;
  }

  .input {
    display: inline-block;
    margin: 20px 0;
    font-size: 24px;
  }

  .button {
    font-size: 24px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    display: inline-block;
    width: 100%;
    padding: 12px;
    margin-bottom: 24px;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export default Div;
