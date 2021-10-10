// ButtonGroup.stories.js | ButtonGroup.stories.jsx
import React from 'react';
import { CustomInputFile as Component } from 'components'
import { MockMyProduct } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/CustomInputFile',
    component: Component,
    decorators: [TemplateStyled]

};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {
    actualizarStateImg: () => console.log("Hello")
};
