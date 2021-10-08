// ButtonGroup.stories.js | ButtonGroup.stories.jsx
import React from 'react';
import { Select as Component } from 'components'


export default {
    title: 'rentamelo/Select',
    component: Component,
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Selecciona la ciudad",
    options: [{ value: 1, text: "Menos de 30min" }, { value: 2, text: "Entre 30-60min" }, { value: 3, text: "Mas de 60min" }]
};
