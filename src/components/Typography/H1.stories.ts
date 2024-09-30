import type { Meta, StoryObj } from "@storybook/react";
import { H1, H2, H3, H4, H5, Body, SmText, SmTextLink } from "./Typography";

const meta = {
  title: "UI/Typography",
  component: H1,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomH1: Story = {
  args: { children: "I am H1" },
};
