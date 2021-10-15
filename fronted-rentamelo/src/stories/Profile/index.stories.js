import React from 'react';
import { Profile as Component } from 'components'
import { mockProfile } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/Profile',
    component: Component,

    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockProfile;
