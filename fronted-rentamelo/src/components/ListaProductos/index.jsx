import React from 'react';
import MiProducto from '../MyProduct'
import { Product, ProductList, Title, TitleContainer } from './styled'
const Component = (props) => {
    const { productsData, change, setChange, isMyProduct } = props;
    const dataVerify = productsData.length > 0;

    return (
        <>
            {dataVerify ? null : <TitleContainer><Title>No hay productos en esta sección </Title> </TitleContainer>}
            <ProductList>
                {productsData.map(producto =>
                    <Product key={`product-${producto.idProduct}`}>
                        <MiProducto
                            dataProduct={producto}
                            isMyProduct={isMyProduct}
                            setChange={setChange}
                            change={change}
                        />
                    </Product>
                )}
            </ProductList>
        </>
    );
}

export default Component;
export { Component as ProductList }