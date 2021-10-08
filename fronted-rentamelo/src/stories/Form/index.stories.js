// ButtonGroup.stories.js | ButtonGroup.stories.jsx
import React from 'react';
import { Form as Component } from 'components'
import { MockMyProduct } from 'mocks'

export default {
    title: 'rentamelo/Form',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {
    dataProduct: MockMyProduct,
    isMyProduct: false
};

export const Secondary = Template.bind({});
Secondary.args = {
    dataProduct: MockMyProduct,
    isMyProduct: true
}