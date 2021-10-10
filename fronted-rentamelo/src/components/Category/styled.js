import styled from "styled-components";

export const Category = styled.div`
display: flex;
width: 130px;
height: 130px;
justify-content: center;
flex-wrap: wrap;

:hover{
    div{
        div{border: 2px solid #37bef7;}
    }
    
}
`
export const ImageCategory = styled.div`
width: 90px;
height: 90px;
border-radius: 100%;
margin-bottom: 10px;
cursor: pointer;

`

export const Name = styled.h4`
font-size: 16px;
text-align: center;
font-family: "Roboto-Medium";
margin: 0;
cursor: pointer;
`