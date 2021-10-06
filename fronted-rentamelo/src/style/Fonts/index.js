import { createGlobalStyle } from "styled-components";
import regularRobotoFont from "style/Fonts/Roboto/Roboto-Regular.ttf";
import mediumRobotoFont from "style/Fonts/Roboto/Roboto-Medium.ttf";
import boldRobotoFont from "style/Fonts/Roboto/Roboto-Bold.ttf";
import boldSoraFont from "style/Fonts/Sora/static/Sora-Bold.ttf";

const FontsProvider = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  src: url(${regularRobotoFont}) format('truetype');
}
@font-face {
  font-family: "Roboto-Medium";
  src: url(${mediumRobotoFont}) format('truetype');
}
@font-face {
  font-family: "Roboto-Bold";
  src: url(${boldRobotoFont}) format('truetype');
}
@font-face {
  font-family: "Sora-Bold";
  src: url(${boldSoraFont}) format('truetype');
}
`;

export default FontsProvider
