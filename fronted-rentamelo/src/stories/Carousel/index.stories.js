import React from "react";
import { Carousel as Component } from "components";


export default {
  title: "rentamelo/Carousel",
  component: Component,
};

const Template = (args) => (
  <div >
    <Component {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  images: [
    "https://rentamelo.s3.us-east-2.amazonaws.com/image+8(1).png",
    "https://rentamelo.s3.us-east-2.amazonaws.com/image+8(2).png",
    "https://rentamelo.s3.us-east-2.amazonaws.com/image+8.png",
    "https://rentamelo.s3.us-east-2.amazonaws.com/image+8(1).png",
    "https://rentamelo.s3.us-east-2.amazonaws.com/image+8(2).png",
  ],
  imagesToShow: 1,
};
