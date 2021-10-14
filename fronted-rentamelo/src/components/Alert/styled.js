import styled from "styled-components";

export const Alert = styled.div`
display: flex;
width: 450px;
height: fit-content;
flex-wrap: wrap;
justify-content: center;
position: fixed;
background-color: white;
border-radius: 8px;
padding: 16px;
`

export const Information = styled.p`
width: 100%;
height: fit-content;
font-size: 18px;
font-family: "Roboto";
text-align: center;
`

export const ButtonContainer = styled.div`
display: flex;
width: 100%;
height: 32px;
justify-content: center;
>button{
    width: 50%;
}
`
export const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 24px;
height: 24px;
position: relative;
left: 210px;
font-size: 20px;
cursor: pointer;
`