import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./DropDown";

const meta = {
  title: "UI/DropDown",
  component: DropDown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomDropDown: Story = {
  args: {
    value: "hello",
    options: ["hello", "hii", "how are you"],
    onOptionSelect: (value) => {
      console.log(value);
    },
    id: "test dropdown",
  },
};
