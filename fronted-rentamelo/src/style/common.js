import styled from "styled-components";

export const ContainerShadow = (Component) => styled(Component)`
  box-shadow: 0px 2px 3px ${(props) => props.theme.colors.grayd2d2};
`;
