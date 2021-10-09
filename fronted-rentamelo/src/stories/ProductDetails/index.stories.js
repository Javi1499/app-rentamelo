import React from 'react';
import { ProductDetails as Component } from 'components'
import { mockProductDetails } from 'mocks'
export default {
    title: 'rentamelo/ProductDetails',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockProductDetails;
