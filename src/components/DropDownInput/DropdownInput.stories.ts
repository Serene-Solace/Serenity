import type { Meta, StoryObj } from "@storybook/react";
import DropDownInput from "./DropDownInput";

const meta = {
  title: "UI/DropDown",
  component: DropDownInput,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DropDownInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomDropDownInput: Story = {
  args: {
    value: "hello",
    id: "test dropdown input",
    type: "text",
  },
};
