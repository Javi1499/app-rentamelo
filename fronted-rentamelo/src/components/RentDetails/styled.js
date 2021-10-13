import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
background-color: #DDDDDD;
`
export const RentDetails = styled.div`
display: flex;
width: 500px;
height: fit-content;
padding: 16px;
flex-wrap: wrap;
background-color: #FFFFFF;
border-radius: 10px;
`

export const Title = styled.h2`
width: 100%;
text-align: center;
font-size: 20px;
font-family: "Roboto-Medium";
`

export const Details = styled.div`
width: 100%;
height: fit-content;
`
export const Section = styled.div`
width: 100%;
height: fit-content;
text-align: start;
margin-bottom: 16px;
font-family: "Roboto";
`
export const Span = styled.span`
font-family: "Roboto-Medium";
`
export const ImageContainer = styled.div`
display: flex;
width: 100%;
height: 180px;
justify-content: center;
>div{
    width: 250px;
    border-radius: 5px;
}
`
export const ButtonContainer = styled.div`
display: flex;
width: 100%;
height: 48px;
justify-content: center;
margin-top: 16px;
>button{
    width: 70%;
}
`