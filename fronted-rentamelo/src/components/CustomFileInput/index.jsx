import React from 'react';
import { CustomInputFile, Label } from './styled';
const Component = React.forwardRef(({ name, onChange, }, ref) => <CustomInputFile>
    <Label>Sube una imagen de tu producto</Label>
    <input type="file" label="Coloca un archivo .jpg, .png"
        name={name}
        multiple accept="images/*"
        onChange={onChange} ref={ref} />
</CustomInputFile>
)
export default Component;
export { Component as CustomInputFile }