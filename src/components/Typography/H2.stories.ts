import type { Meta, StoryObj } from "@storybook/react";
import { H2 } from "./Typography";

const meta = {
  title: "UI/Typography",
  component: H2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomH2: Story = {
  args: { children: "I am H2" },
};
