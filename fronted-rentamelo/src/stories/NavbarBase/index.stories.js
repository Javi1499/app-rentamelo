import React from 'react';
import { NavbarBase as Component } from 'components'
import { mockNavbarBase } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/NavbarBase',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockNavbarBase;
