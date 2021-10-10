import { Button, ImageComponent, ImagesPreview, LessorInfo, ProductDetails } from 'components';
import React, { useState } from 'react';
import { ProductView, DetailsContainer, LessorContainer, ImageContainer, PreviewContainer, ButtonContainer, } from './styled';
const Component = ({ product, dataLessor, mainImg }) => {
    const [mainImage, setMainImage] = useState(mainImg);
    const { img1, img2, img3 } = product;

    return (
        <ProductView>
            <PreviewContainer>
                <ImagesPreview images={[img1, img2, img3]} setMainImage={setMainImage} />
            </PreviewContainer>
            <ImageContainer>
                <ImageComponent src={mainImage || mainImg} />
            </ImageContainer>
            <DetailsContainer>
                <ProductDetails dataProduct={product} />
            </DetailsContainer>
            <LessorContainer>
                <LessorInfo dataLessor={dataLessor} />
            </LessorContainer>
            <ButtonContainer>
                <Button children={"RENTAR PRODUCTO"} />
            </ButtonContainer>
        </ProductView>
    );
}

export default Component;
export { Component as ProductView }