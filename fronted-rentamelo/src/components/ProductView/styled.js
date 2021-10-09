import styled from "styled-components";


export const ProductView = styled.div`
    display: grid;
    width: 100%;
    height:720px;
    box-sizing: border-box;
    grid-template: 
    "imagePreview image details"30%
    "imagePreview image  details"15%
    "imagePreview image details"15%
    ". lessor  details "30%
    ". . button" 10%
    /
    10% 40% 50%;
`

export const PreviewContainer = styled.div`
grid-area: imagePreview;
`
export const ImageContainer = styled.div`
grid-area: image;
`
export const DetailsContainer = styled.div`
grid-area: details;
`
export const LessorContainer = styled.div`
grid-area: lessor;
`
export const ButtonContainer = styled.div`
grid-area: button;
`
