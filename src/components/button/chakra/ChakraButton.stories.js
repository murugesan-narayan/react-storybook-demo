import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "form/control/chakra/Button",
  component: Button,
  //argTypes: {
  // variantColor: {
  //   control: "text",
  // },
  // children: { control: "text" },
  //onclick: { action: "clicked" },
  //},
};

const Template = (args) => <Button {...args} />;

//export const Success = () => <Button variantColor="green">Success</Button>;
export const Success = Template.bind({});
Success.args = {
  colorScheme: "green",
  children: "Success",
  onClick: action("Click handler"),
};

export const Failure = () => (
  <Button colorScheme="red" {...actions("onClick", "onMouseOver")}>
    Failure
  </Button>
);
// export const Failure = Template.bind({});
// Failure.args = {
//   variantColor: "red",
//   children: "Failure",
// };

export const Log = () => (
  <Button
    colorScheme="blue"
    onClick={() =>
      console.log("inside click handler", process.env.STORYBOOK_ENV_TEST)
    }
  >
    Log
  </Button>
);

export const Knobs = () => (
  <Button colorScheme="orange" disabled={boolean("disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);
