import type { Meta, StoryObj } from "@storybook/react";
import CustomPopover from "./Popover";

const meta = {
  title: "UI/CustomPopover",
  component: CustomPopover,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CustomPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomBanner: Story = {
  args: {
    open: true,
    anchorEl: document.getElementById(`body`),
    onClose: () => {
      console.log("handle close");
    },
    items: [{ text: "hello" }, { text: "welcome" }],
  },
};
