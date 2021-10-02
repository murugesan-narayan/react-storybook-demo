import React from "react";
//import Center from "../center/Center";
import Button from "./Button";

export default {
  title: "form/control/Button",
  component: Button,
  args: {
    children: "Button",
  },
  //decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Failure = () => <Button variant="failure">Failure</Button>;

const Template = (args) => <Button {...args}></Button>;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  //  children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  //  children: "Long Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
