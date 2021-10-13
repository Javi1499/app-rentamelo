import styled from "styled-components";
const IncrementDecrement = styled.div`
  display: inline-flex;
  width: 100%;
  height: fit-content;
  justify-content: flex-end;
`;
IncrementDecrement.Icon = styled.div`
  width: 32px;
  height: 32px;
  border: ${(props) =>
    props.isDisable ? "1px solid #CED4DA" : "1px solid #ADB5BD"};
  border-radius: 100%;
  cursor: ${(props) => (props.isDisable ? "initial" : "pointer")};

  > svg {
    margin: 8px 9px;
    color: ${(props) => (props.isDisable ? " #CED4DA" : "")};
  }
`;
IncrementDecrement.Value = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  margin: 8px 16px;
  justify-content: center;
`;

export default IncrementDecrement;
