import React from 'react';
import { Prod as Component } from 'components'
import { mockProductView } from 'mocks'
export default {
    title: 'rentamelo/ProductView',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockProductView;
