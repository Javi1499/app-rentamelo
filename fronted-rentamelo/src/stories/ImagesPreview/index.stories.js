import React from 'react';
import { ImagesPreview as Component } from 'components'
import { mockImagesPreview } from 'mocks'
import { TemplateStyled } from 'utils';

export default {
    title: 'rentamelo/ImagesPreview',
    component: Component,
    decorators: [TemplateStyled]

};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockImagesPreview;
