import styled from "styled-components";

export const AdminLayout = styled.div`
  display: grid;
  grid-template:
    "LeftColumn RightColumn" 100%
    / 250px calc(100% - 250px);
  width: 100%;
`;

export const LeftColumn = styled.div`
  grid-area: LeftColumn;
`;

export const RightColumn = styled.div`
  grid-area: RightColumn;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 1em auto 0;
`;
