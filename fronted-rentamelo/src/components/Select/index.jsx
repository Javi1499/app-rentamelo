import React from 'react';
import { SelectContainer, Label, Select, Option } from './styled';

const Component = React.forwardRef(({ options, name, onChange, label }, ref) => (
    <SelectContainer>
        <Label>{label}</Label>
        <Select onChange={onChange} name={name} ref={ref}>
            <Option>---Seleccionar---</Option>
            {options.map(option => <Option value={option.value}>{option.text}</Option>)}
        </Select>
    </SelectContainer>
)
)

export default Component;

export { Component as Select }