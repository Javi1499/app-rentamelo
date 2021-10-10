// ButtonGroup.stories.js | ButtonGroup.stories.jsx
import React from 'react';
import { Form as Component } from 'components'
import { MockMyProduct } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/Form',
    component: Component,
    decorators: [TemplateStyled]

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