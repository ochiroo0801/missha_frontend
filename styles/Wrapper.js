import styled from "styled-components";
import { device } from "./device";

const Wrapper = styled.div`
  margin: auto;
  max-width: 100%;
  padding: 0 20px;

  @media ${device.tabletL} {
    max-width: 80%;
  }

  @media ${device.laptop} {
    padding: 0 30px;
    max-width: 1300px;
  }
`;

export default Wrapper;
