import styled from "styled-components";

export const CardRent = styled.div`
display: grid;
width: 950px;
height: fit-content;
grid-template: 
"productDetails rentDetails"auto/
650px auto;
box-shadow: 2px 1px 4px 3px rgba(0, 0, 0, 0.2);
border-radius: 10px;
`
export const ProductDetailsContainer = styled.div`
grid-area: productDetails;
`
export const RentDetailsContainer = styled.div`
grid-area: rentDetails;
`
