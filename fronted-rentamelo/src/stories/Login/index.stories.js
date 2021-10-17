import React from 'react';
import { Login as Component } from 'components'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/Login',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {}
