import styled from 'styled-components';

export const ProductContainer = styled.div`
display: grid;
width: 250px;
height: fit-content;
border-radius: 4px;
padding: 16px;
grid-template:
"image image" 150px
"title price" 50px
"description description"auto
"location controls " 32px
"button button"60px
/60% 40%;
box-shadow: 1px 1px 1px 1.5px rgba(0, 0, 0, 0.2)
`

export const ImageContainer = styled.div`
grid-area: image;
margin-bottom: 8px;
>div{
    border-radius: 4px;
}
`
export const Title = styled.h2`
grid-area: title;
color: black;
font-size: 18px;
font-family: "Roboto-Bold";
margin: 0;
`
export const Description = styled.div`
grid-area: description;
color: black;
font-size: 18px;
font-family: "Roboto";
margin: 0 0 16px 0;
`

export const Price = styled.h2`
display: inherit;
grid-area: price;
height: 100%;
color: blue;
font-size: 18px;
text-align: center;
font-family: "Roboto";
margin: 0;
align-content: center;
`
export const Controls = styled.div`
grid-area: controls;
display: flex;

`
export const Icon = styled.div`
width: fit-content;
height: fit-content;
font-size: 24px;
margin: 0 8px;
`
export const Location = styled.h2`
grid-area: location;
color: black;
font-size: 18px;
text-align: start;
font-family: "Roboto";
margin: 0;
`
export const ButtonContainer = styled.div`
display: flex;
grid-area: button;
justify-content: center;
margin-top: 16px;
>button{
    width: 80%;
}
`
