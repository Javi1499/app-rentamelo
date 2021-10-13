import React from 'react';
import { ProductDetailsCard as Component } from 'components'
import { mockProductDetailsCard } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/ProductDetailsCard',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockProductDetailsCard;
