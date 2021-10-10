import React from 'react';
import { LessorInfo as Component } from 'components'
import { MockProductList } from 'mocks'
import { TemplateStyled } from 'utils';

export default {
    title: 'rentamelo/LessorInfo',
    component: Component,
    decorators: [TemplateStyled]

};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {
    dataLessor: {
        firstName: "Lizeth",
        lastName: "Andrade"
    }
};
