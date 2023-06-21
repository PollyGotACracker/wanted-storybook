import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    color: { control: "color" },
    primary: { control: "boolean" },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large", "full"],
    },
    corner: {
      control: {
        type: "radio",
      },
      options: ["none", "small", "large", "circle", "pill"],
    },
    icon: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: "Button",
    color: "#5B92E5",
    primary: true,
    size: "medium",
    corner: "none",
    icon: "",
    disabled: false,
    onClick: undefined,
  },
};

export const Secondary = {
  args: {
    label: "Button",
    color: "#5B92E5",
    primary: false,
    size: "medium",
    corner: "none",
    icon: "",
    disabled: false,
    onClick: undefined,
  },
};
