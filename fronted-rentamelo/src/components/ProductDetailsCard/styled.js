import styled from "styled-components"

export const ProductDetails = styled.div`
display: grid;
width: 650px;
grid-template: 
"image title" 50px
"image description" 100px
"image rentDays" 30px/
250px 350px
;

`
export const ImageContainer = styled.div`
display: flex;
grid-area: image;
justify-content: center;
align-content: center;
align-items: center;
>div{
    width: 180px;
    height: 130px;
}
`
export const Title = styled.h2`
grid-area: title;
font-family: "Roboto-Bold";
font-size: 26px;
`

export const Description = styled.p`
grid-area: description;
font-family: "Roboto";
margin-top: 16px;
`
export const RentDays = styled.p`
grid-area: rentDays;
margin-top: 0;
font-family: "Roboto";
`

export const Span = styled.span`
font-family: "Roboto-Medium";
`