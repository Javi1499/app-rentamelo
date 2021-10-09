import React from 'react';
import { ImagesPreview as Component } from 'components'
import { mockImagesPreview } from 'mocks'
export default {
    title: 'rentamelo/ImagesPreview',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockImagesPreview;
