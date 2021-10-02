import React from "react";
//import Center from "../center/Center";
import Input from "./Input";

export default {
  title: "form/Input",
  component: Input,
  //decorators: [(story) => <Center>{story()}</Center>],
};

export const Normal = () => <Input variant="noraml" />;
export const Medium = () => <Input variant="medium" />;
export const Large = () => <Input variant="large" />;
export const VeryLarge = () => <Input variant="verylarge" />;

//we can rename the story with more descriptive
Normal.storyName = "Normal Input";
