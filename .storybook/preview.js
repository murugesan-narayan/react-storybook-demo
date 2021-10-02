import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import Center from "../src/components/center/Center";
import { ChakraProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

//old version
// addDecorator((story) => <Center>{story()}</Center>);
// addDecorator((story) => (
//   <ChakraProvider theme={theme}>
//     <CSSReset />
//     <Box m='2'>{story()}</Box>
//   </ChakraProvider>
// ));

//new version
export const decorators = [
  (story) => <Center>{story()}</Center>,
  (story) => <ChakraProvider>{story()}</ChakraProvider>,
  (story, context) => withConsole()(story)(context),
  withKnobs,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: true,
  },
};
