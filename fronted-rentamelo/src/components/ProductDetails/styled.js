import styled from "styled-components";

export const ProductDetails = styled.div`
display: grid;
width: 100%;
height: fit-content;
grid-template: 
"title title" auto
"price price" 70px
"description description" 120px
"location deliveryTime" 80px/
50% 50%
;
padding: 0 16px;
box-sizing: border-box;
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
>p{
    font-size: 48px;
    font-family: "Roboto";
    margin: unset;
    color: #5A5A5A;
    >span{
        font-size: 18px;
        color: #000000;
    }
}
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
font-family: "Roboto-Medium";
text-align: start;
margin: 0%;
`
export const Text = styled.p`
font-size: 16px;
font-family: "Roboto";
margin: 0 ;
`


