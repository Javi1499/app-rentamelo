import React from 'react';
import { ProductList as Component } from 'components'
import { MockProductList } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/ProductList',
    component: Component,
    decorators: [TemplateStyled]

};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = MockProductList;
