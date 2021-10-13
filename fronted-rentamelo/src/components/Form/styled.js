import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
`
export const FormContainer = styled.form`
display: flex;
width: 500px;
height: fit-content;
flex-wrap: wrap;
box-sizing: border-box;
padding: 16px;
background-color: white;
box-shadow: 1px 1px 1px 1.5px rgba(0, 0, 0, 0.2);
margin: 2em;
border-radius: 10px;
justify-content: space-between;
`
const Input = (component) => styled(component)`
height: 75px;
background-color: white;
`;

export const Span = styled.span`
color: red;
font-size: 14px;
font-family: "Roboto";
`
export const InputName = Input(styled.div`
width: 100%;`);
export const InputDescription = Input(styled.div`
width: 100%;`);
export const InputPrice = Input(styled.div`
width: 40%;
`);
export const InputCategory = Input(styled.div`
width: 50%;`);
export const InputTime = Input(styled.div`
width: 100%;`);
export const InputImage = Input(styled.div`
width: 100%;`);

export const ButtonContainer = styled.div`
width: 100%;
height: 48px;
div>{
    width: 70%;
}
`