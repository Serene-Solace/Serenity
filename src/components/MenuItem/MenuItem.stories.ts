import type { Meta, StoryObj } from "@storybook/react";
import CustomMenuItem from "./MenuItem";

const meta = {
  title: "UI/CustomMenuItem",
  component: CustomMenuItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CustomMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomBanner: Story = {
  args: {
    onClick: () => {console.log('handle click')},
    children: 'this is the child'
  },
};
