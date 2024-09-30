import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./Banner";

const meta = {
  title: "UI/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomBanner: Story = {
  args: {
    message: "Hello there, this is a banner",
    visible: true,
    reset: () => {
      console.log("reset");
    },
  },
};
