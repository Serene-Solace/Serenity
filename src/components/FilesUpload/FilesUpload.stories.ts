import { Meta, StoryObj } from "@storybook/react";
import FilesUpload from "./FilesUpload";

const meta = {
  title: "UI/FilesUpload",
  component: FilesUpload,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FilesUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomFilesUpload: Story = {
  args: {
    onChange: () => {
      console.log("handle change");
    },
    color: "blue",
    isDisabled: false,
    flexDirection: "column",
    imgUploader: false,
  },
};
