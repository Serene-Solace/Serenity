import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomButton: Story = {
  args: {
    variant: "primary",
    size: "large",
    onClick: () => {
      console.log("handle click");
    },
    isDisabled: false,
    children: "Click Me",
  },
};
