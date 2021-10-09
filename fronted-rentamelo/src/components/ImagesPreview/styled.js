import styled from "styled-components";

export const ImagesPreview = styled.div`
display: flex;
width: 80px;
height: fit-content;
flex-wrap: wrap;
`

export const ImageContainer = styled.div`
width: 80px;
height: 64px;
margin-bottom: 10px;
border-radius: 5px;
div{
    border-radius: 5px;
}
:hover{
    border: 2px solid #37bef7;
}
`