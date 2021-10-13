import styled from 'styled-components';

export const ProductContainer = styled.div`
display: grid;
width: 250px;
height: 400px;
border-radius: 8px;
box-sizing: border-box;
padding: 16px;
background-color: white;
grid-template:
"image image" 150px
"title title" 50px
"description description"60px
"controls price" 32px
"button button"60px
/40% 60%;
box-shadow: 2px 1px 4px 3px rgba(0, 0, 0, 0.2);
`

export const ImageContainer = styled.div`
grid-area: image;
margin-bottom: 8px;
>div{
    border-radius: 8px;
}
`
export const Title = styled.h2`
grid-area: title;
color: black;
font-size: 20px;
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
color: #7A869E ;
font-size: 24px;
text-align: end;
font-family: "Roboto-Bold";
margin: 0;
align-content: start;
`
export const Controls = styled.div`
grid-area: controls;
display: flex;

`
const Icon = (component) => styled(component)`
width: fit-content;
height: fit-content;
font-size: 24px;
margin: 0 8px;
`
export const IconPause = Icon(styled.div`
color: #007EC7;
`);

export const IconPlay = Icon(styled.div`
color: #0CA113;
`)
export const IconDelete = Icon(styled.div`
color: #A50202;
`)
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
margin: 16px 0 0 0;
>button{
    width: 80%;
}
`
