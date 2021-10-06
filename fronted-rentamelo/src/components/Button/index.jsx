import React from "react";
import { Button as ButtonStyled } from "./styled";



const Button = (props) => {
    const { children, onClick, ...rest } = props;

    return (
        <ButtonStyled  {...rest} onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

export { Button };
export default Button;
