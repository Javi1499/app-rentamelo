import React from 'react';
import { ProductDetailsCard, RentDetailsCard } from 'components';
import { CardRent, ProductDetailsContainer, RentDetailsContainer } from './styled';

const Component = ({ dataProduct, rentDays, rentDetails, dataLessor, rentStart }) => {

    return (
        <CardRent>
            <ProductDetailsContainer>
                <ProductDetailsCard dataProduct={dataProduct} rentDays={rentDays} />
            </ProductDetailsContainer>
            <RentDetailsContainer>
                <RentDetailsCard rentDetails={rentDetails} dataLessor={dataLessor} rentStart={rentStart} />
            </RentDetailsContainer>
        </CardRent>
    );
}

export default Component;
export { Component as CardRent }