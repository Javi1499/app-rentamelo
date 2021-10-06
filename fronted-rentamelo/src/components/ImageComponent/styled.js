import styled from "styled-components";

export const ImgItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-position: center center;
`;
