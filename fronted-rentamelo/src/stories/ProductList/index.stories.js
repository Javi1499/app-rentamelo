import React from 'react';
import { ProductList as Component } from 'components'
import { MockProductList } from 'mocks'
export default {
    title: 'rentamelo/ProductList',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = MockProductList;
