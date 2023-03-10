import styled from "styled-components";

const StyledButton = styled.button`
font: inherit;
  padding: 10px 8px;
  border-radius: 12px;
  position: absolute;
  top: 4px;
  right: 4px;

  background-color: $color-white;
  color: $color-black;
  opacity: 0.2;
  cursor: default;

  &_active {
    background-color: $color-green;
    color: $color-white;
    cursor: pointer;
    opacity: 1;

    &:hover {
      background-color: $color-dark-green;
    }`;

export default StyledButton;
