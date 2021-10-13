import React from 'react';
import { RentDetailsCard as Component } from 'components'
import { mockRentDetailsCard } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/RentDetailsCard',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockRentDetailsCard;
