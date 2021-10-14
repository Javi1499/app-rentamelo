
import styled from 'styled-components';

export const ProductList = styled.div`
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 16px;
    justify-items:center;
    margin: 1.5rem 0;
    box-sizing: border-box;
`;

export const Product = styled.div`
grid-column: span 1;
`

export const Title = styled.h1`
font-size: 32px;
font-family: "Roboto-Medium";
width: 100%;
text-align: center;
`
export const Span = styled.span`
cursor: pointer;
color: #0063B4;
`
export const TitleContainer = styled.div`
width: 100%;
height: fit-content;
`
