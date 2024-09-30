import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const CustomTable: Story = {
//   args: {
//   },
// };
