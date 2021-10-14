import React from 'react';
import { Alert as Component } from 'components'
import { mockAlert } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/Alert',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockAlert;
