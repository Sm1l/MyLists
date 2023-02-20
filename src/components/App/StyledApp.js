import styled from "styled-components";
import * as variables from "../../abstracts/variables.js";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${variables.COLOR_PINK};
  padding: 24px 16px;
  gap: 20px;
`;
export default StyledApp;
