// ButtonGroup.stories.js | ButtonGroup.stories.jsx
import React from 'react';
import { MyProduct as Component } from 'components'
import { MockMyProduct } from 'mocks'
import { TemplateStyled } from 'utils';

export default {
    title: 'rentamelo/MyProduct',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = MockMyProduct


export const Secondary = Template.bind({});
Secondary.args = MockMyProduct