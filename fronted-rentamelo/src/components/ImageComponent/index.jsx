import React from "react";
import { ImgItem } from "./styled";

const Image = (props) => {
  const { src, ...rest } = props;

  return <ImgItem {...rest} url={src} />;
};
export { Image as ImageComponent };
export default Image;
