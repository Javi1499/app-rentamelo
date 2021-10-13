import React from 'react';
import { RentDetails as Component } from 'components'
import { mockRentDetails } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/RentDetails',
    component: Component,

    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockRentDetails;
