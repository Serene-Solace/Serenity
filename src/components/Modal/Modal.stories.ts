import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./Modal";

const meta = {
  title: "UI/CustomModal",
  component: CustomModal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CustomModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomBanner: Story = {
  args: {
    open: true,
    children: 'This is the child',
    handleClose: () => {console.log('handle close')}
  },
};
