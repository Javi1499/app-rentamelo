// ButtonGroup.stories.js | ButtonGroup.stories.jsx
import React from 'react';
import { CustomInput as Component } from 'components'
import { MockMyProduct } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/CustomInput',
    component: Component,
    decorators: [TemplateStyled]

};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Nombre",
    type: "string",
    placeholder: "ESte es el placeholder",
    isRequired: true
};
