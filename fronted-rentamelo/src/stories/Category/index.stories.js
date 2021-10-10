import React from 'react';
import { Category as Component } from 'components'
import { mockCategory } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/Category',
    component: Component,
    decorators: [TemplateStyled]

};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockCategory;
