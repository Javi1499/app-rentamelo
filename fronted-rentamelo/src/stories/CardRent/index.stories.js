import React from 'react';
import { CardRent as Component } from 'components'
import { mockCardRent } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/CardRent',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockCardRent;
