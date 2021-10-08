
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
`;

export const Product = styled.div`
grid-column: span 1;
`

