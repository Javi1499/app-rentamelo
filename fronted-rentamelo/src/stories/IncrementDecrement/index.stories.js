import React from 'react';
import { IncrementDecrement as Component } from "components"
import { TemplateStyled } from 'utils';

export default {
    title: "rentamelo/IncrementDecrement",
    component: Component,
    decorators: [
        TemplateStyled
    ],
};

const Template = (args) => <Component {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    limit: 5,
    valueSelect: 0,
    setValueSelect: () => { console.log(0) }
}

