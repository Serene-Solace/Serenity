import type { Meta, StoryObj } from "@storybook/react";
import DashboardCard from "./Card";

const meta = {
  title: "UI/DashboardCard",
  component: DashboardCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DashboardCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomDashboardCard: Story = {
  args: { title: "Hello Card", imgSrc: "", linkTo: "", buttonText: "Click Me" },
};
