import type { Meta, StoryObj } from "@storybook/react";
import CustomToolTip from "./Tooltip";
import React from "react";

const meta = {
  title: "UI/CustomToolTip",
  component: CustomToolTip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CustomToolTip>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const ToolTip: Story = {
//   args: { arrow: true, placement: "top", title: "Hey there, this is tooltip", children: },
// };

// const Template: Story = (args) => (
//   <CustomToolTip {...args}>
//     <span>{args.children}</span> {/* Rendering children dynamically */}
//   </CustomToolTip>
// );

// export const ToolTip: Story = Template.bind({});
// ToolTip.args = {
//   arrow: true,
//   placement: "top",
//   title: "Hey there, this is tooltip",
//   children: "Hover over me", // Passing children dynamically as string
// };
