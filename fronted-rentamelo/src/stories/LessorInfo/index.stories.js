import React from 'react';
import { LessorInfo as Component } from 'components'
import { MockProductList } from 'mocks'
export default {
    title: 'rentamelo/LessorInfo',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {
    firstName: "Lizeth",
    lastName: "Andrade"
};
