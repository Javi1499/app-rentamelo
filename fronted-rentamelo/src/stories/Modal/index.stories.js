import React from 'react';
import { Modal as Component } from 'components'
import { mockProductView } from 'mocks'
export default {
    title: 'rentamelo/Modal',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {
    showModal: true,
    value: 0
};
