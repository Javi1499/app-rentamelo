// ButtonGroup.stories.js | ButtonGroup.stories.jsx
import React from 'react';
import { MyProduct as Component } from 'components'
import { MockMyProduct } from 'mocks'

export default {
    title: 'rentamelo/MyProduct',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = MockMyProduct;
