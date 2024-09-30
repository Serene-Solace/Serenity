import { Meta, StoryObj } from "@storybook/react";
import FileDetailsBox from "./FileDetailsBox";

const meta = {
  title: "UI/FileDetailsBox",
  component: FileDetailsBox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FileDetailsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomFileDetailsBox: Story = {
  args: {
    name: "File details box",
    size: 2.3,
    onClick: () => {
      console.log("file details box");
    },
    isNew: false,
  },
};
