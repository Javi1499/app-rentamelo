import React from 'react';
import MiProducto from '../MyProduct'
import { Product, ProductList } from './styled'
const Component = (props) => {
    const { productsData, change, setChange } = props;
    const dataVerify = productsData.length > 0;


    return (
        <ProductList>
            {dataVerify ? null : <div><h1>No has publicado ningun producto</h1> <a href="/agregar-producto">hazlo ahora</a></div>}

            {productsData.map(producto =>
                <Product key={`product-${producto.id_producto}`}>
                    <MiProducto
                        producto={producto}
                        setChange={setChange}
                        change={change}
                    />
                </Product>
            )}
        </ProductList>
    );
}

export default Component;
export { Component as ProductList }