import styled from "styled-components"

export const NavbarBase = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
flex-direction: row;
padding: 16px 0;
`

export const Item = styled.div`
width: fit-content;
font-family: "Roboto";
font-size: 20px;
padding: 0 8px;
cursor: pointer;
border-bottom: 3px dotted ${props => props.isSelect ? "#016FFF" : "unset"};
`