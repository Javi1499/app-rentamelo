import React from 'react';
import { CategoriesList as Component } from 'components'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/CategoriesList',
    component: Component,
    decorators: [TemplateStyled]

};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});

