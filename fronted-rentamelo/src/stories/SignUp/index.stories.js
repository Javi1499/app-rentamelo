import React from 'react';
import { SignUp as Component } from 'components'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/SignUp',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {}
