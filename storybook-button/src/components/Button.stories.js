import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// https://storybook.js.org/docs/react/essentials/controls
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
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
      options: ["none", "small", "medium", "large", "pill"],
    },
    shadow: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    children: "BUTTON",
    backgroundColor: "#5B92E5",
    textColor: "#FFFFFF",
    primary: true,
    size: "medium",
    corner: "none",
    shadow: false,
    disabled: false,
  },
};

export const Type = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "5px",
        flexWrap: "wrap",
      }}
    >
      <Button primary={true} backgroundColor={"#5B92E5"} textColor={"#FFFFFF"}>
        {"Primary"}
      </Button>
      <Button primary={false} backgroundColor={"#5B92E5"} textColor={"#5B92E5"}>
        {"Secondary"}
      </Button>
    </div>
  );
};

export const Size = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "5px",
        flexWrap: "wrap",
      }}
    >
      <Button size={"small"} backgroundColor={"#5B92E5"} textColor={"#FFFFFF"}>
        {"small"}
      </Button>
      <Button size={"medium"} backgroundColor={"#5B92E5"} textColor={"#FFFFFF"}>
        {"medium"}
      </Button>
      <Button size={"large"} backgroundColor={"#5B92E5"} textColor={"#FFFFFF"}>
        {"large"}
      </Button>
      <Button size={"full"} backgroundColor={"#5B92E5"} textColor={"#FFFFFF"}>
        {"full"}
      </Button>
    </div>
  );
};

export const Corner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "5px",
        flexWrap: "wrap",
      }}
    >
      <Button corner={"none"} backgroundColor={"#5B92E5"} textColor={"#FFFFFF"}>
        {"none"}
      </Button>
      <Button
        corner={"small"}
        backgroundColor={"#5B92E5"}
        textColor={"#FFFFFF"}
      >
        {"small"}
      </Button>
      <Button
        corner={"medium"}
        backgroundColor={"#5B92E5"}
        textColor={"#FFFFFF"}
      >
        {"medium"}
      </Button>{" "}
      <Button
        corner={"large"}
        backgroundColor={"#5B92E5"}
        textColor={"#FFFFFF"}
      >
        {"large"}
      </Button>
      <Button corner={"pill"} backgroundColor={"#5B92E5"} textColor={"#FFFFFF"}>
        {"pill"}
      </Button>
    </div>
  );
};
