import styled from "styled-components";


export const ProductView = styled.div`
    display: grid;
    width: 100%;
    height:fit-content;
    box-sizing: border-box;
    grid-template: 
    "imagePreview image details"150px
    "imagePreview image  details"150px
    ". lessor  details "50px
    ". . button" 50px
    /
    10% 40% 50%;
    padding: 16px;
`

export const PreviewContainer = styled.div`
grid-area: imagePreview;
`
export const ImageContainer = styled.div`
grid-area: image;
>div{
    border-radius: 2px;
}
`
export const DetailsContainer = styled.div`
grid-area: details;
`
export const LessorContainer = styled.div`
grid-area: lessor;
`
export const ButtonContainer = styled.div`
display: flex;
grid-area: button;
justify-content: center;
>button{
    width: 80%;
}

`
