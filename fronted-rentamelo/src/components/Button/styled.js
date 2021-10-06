import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  letter-spacing: 0;
  line-height: 23px;
  text-align: center;
  padding: 0.8em 0;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default Button;
