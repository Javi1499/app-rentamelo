import React from 'react';
import { RentList as Component } from 'components'
import { mockCardRent, mockRentList } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/RentList',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockRentList;
