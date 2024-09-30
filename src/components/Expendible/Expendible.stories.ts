import type { Meta, StoryObj } from "@storybook/react";
import Expendible from "./Expendilble";

const meta = {
  title: "UI/Expendible",
  component: Expendible,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Expendible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomExpendible: Story = {
  args: {
    title: "Expendible",
    children: "",
    open: true,
    handleOpen: (val) => {
      console.log(val);
    },
  },
};
