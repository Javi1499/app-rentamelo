import styled from "styled-components";

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

Carousel.Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

Carousel.ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

Carousel.Content = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.totalImages < 3 ? "center" : "unset"};
  transition: transform 250ms linear;
  transform: translateX(
    -${(props) => props.currentIndex * (100 / props.imagesToShow)}%
  );
  > * {
    max-width: calc(
      ${(props) => {
    const isLess = props.totalImages < 3;
    return isLess ? "390px" : 100 / props.imagesToShow + "%" + " - 16px";
  }}
    );
    height: 300px;
    flex-shrink: 0;
    flex-grow: 1;
    margin: 0 8px;
  }
`;

const ArrowStyles = (component) => styled(component)`
  position: absolute;
  display: flex;
  width: 36px;
  height: 36px;
  align-self: center;
  border-radius: 100%;
  
  background-color: white;
  box-shadow: ${(props) =>
    "0px 3px 8px " + props.theme?.colors?.grayced4Transparent};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;

Carousel.ArrowLeft = ArrowStyles(styled.div`
  left: 10px;
`);

Carousel.ArrowRight = ArrowStyles(styled.div`
  right: 10px;
`);

Carousel.ImageIndexContainer = styled.div`
  display: none;

`;

export default Carousel;
