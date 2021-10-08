import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
width: 100%;
height: 100%;
flex-wrap: wrap;
box-sizing: border-box;
padding: 16px;
`
const Input = (component) => styled(component)`
width: 100%;
height: 90px;
background-color: white;
`;

export const Span = styled.span`
color: red;
font-size: 14px;
font-family: "Roboto";
`
export const InputName = Input(styled.div``);
export const InputDescription = Input(styled.div``);
export const InputPrice = Input(styled.div``);
export const InputTime = Input(styled.div``);
export const InputImage = Input(styled.div``);
