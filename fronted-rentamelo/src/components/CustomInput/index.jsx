import React, { useState } from 'react';
import { CustomInput, Label } from './styled';
import { useForm } from "react-hook-form";
const Component = React.forwardRef(({ onChange, name, label, placeholder, type, ...rest }, ref) => (
    <CustomInput>
        <Label>{label}</Label>
        <input onChange={onChange} name={name} type={type} placeholder={placeholder || ""} {...rest} ref={ref} />
    </CustomInput>
)

)

export default Component;
export { Component as CustomInput };