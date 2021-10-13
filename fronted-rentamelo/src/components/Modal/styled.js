import styled from "styled-components";

export const Background = styled.div`
display: flex;
width: 100vw;
height: 100vh;
position: fixed;
justify-content: center;
align-items: center;
align-content: center;
background-color: #090A0AB7;
`

export const ModalContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 500px;
height: fit-content;
justify-content: center;
background-color: white;
padding: 16px;
border-radius: 10px;
box-shadow: 1px 1px 1px 1.5px rgba(0, 0, 0, 0.2);
`

export const Label = styled.label`
width: 100%;
height: fit-content;
font-size: 16px;
font-family: "Roboto-Bold";
text-align: center;
`
export const SelectContainer = styled.div`
width: 20%;
height: fit-content;
`
export const ButtonContainer = styled.div`
display: flex;
width: 100%;
height: 48px;
justify-content: center;

>button{
    width: 70%;
}
`

export const Icon = styled.div`
width: 32px;
height: 32px;
font-size: 24px;
position: relative;
left: 240px;
bottom: 15px;
cursor: pointer;
`

export const Text = styled.p`
font-size: 14px;
font-family: "Roboto";
color: #A53E3E;
margin: 0;
margin-top: 10px;
`