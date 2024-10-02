import type { Meta, StoryObj } from "@storybook/react";
import H1Test from "./Typography";

const meta = {
  title: "UI/Ty",
  component: H1Test,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof H1Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1TestStory: Story = {
  args: {},
};

// export const Primary: Story = {
//   args: { variant: 'primary', children: 'Click Me' },
// };

// export const Secondary: Story = {
//   args: { variant: 'secondary', children: 'Click Me' },
// };

// export const WithOnClick: Story = {
//   args: { variant: 'primary', children: 'Click Me', onClick: () => alert('Clicked!') },
// };

// export const Disabled: Story = {
//   args: { variant: 'primary', children: 'Click Me', disabled: true },
// };
