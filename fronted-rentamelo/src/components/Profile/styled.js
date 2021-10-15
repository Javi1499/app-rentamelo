import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100vw;
height: fit-content;
justify-content: center;
`
export const Profile = styled.div`
display: flex;
width: 400px;
height: fit-content;
flex-wrap: wrap;
border-radius: 10px;
background-color: #FFFFFF;
padding: 16px;
border: 1px solid #000000;
`

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
height: fit-content;
`

export const NameImage = styled.h1`
width: 100px;
height: 100px;
font-family: "Roboto-Bold";
color: #FFFFFF;
font-size: 65px;
text-align: center;
border-radius: 100%;
background-color: #0644B6;
margin:0;
line-height: 100px;
`

export const InformationContainer = styled.div`
width: 100%;
height: fit-content;
border-top: 1px solid #161616;
margin-top: 32px;
`
export const Section = styled.p`
width: 100%;
font-size: 18px;
height: fit-content;
font-family: "Roboto";
`
export const Span = styled.span`
font-family: "Roboto-Medium";
font-size: 20px;
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 48px;
>button{
    width: 70%;
}
`