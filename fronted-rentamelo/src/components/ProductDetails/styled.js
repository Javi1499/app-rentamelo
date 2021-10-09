import styled from "styled-components";

export const ProductDetails = styled.div`
display: grid;
width: 100%;
height: fit-content;
max-width: 500px;
grid-template: 
"title title" auto
"description description" 120px
"price price" 60px
"location deliveryTime" 100px/
50% 50%
;
padding: 16px;
`

export const Title = styled.h2`
grid-area: title;
font-size: 32px;
font-family: "Roboto-Bold";
margin: 0 0 16px 0;
`

export const Description = styled.div`
grid-area: description;
width: 100%;
height: 100%;
`
export const Price = styled.div`
grid-area: price;
width: 100%;
height: 100%;
`
export const Location = styled.div`
grid-area: location;
width: 100%;
height: 100%;
`
export const DeliveryTime = styled.div`
grid-area: deliveryTime;
width: 100%;
height: 100%;
`

export const Label = styled.label`
width: 100%;
font-size: 20px;
font-family: "Roboto-Bold";
text-align: center;
`
export const Text = styled.p`
font-size: 16px;
font-family: "Roboto";
margin: 10px 0 0 0 ;
`


