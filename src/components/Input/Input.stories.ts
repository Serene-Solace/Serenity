import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
    title: 'UI/Input',
    component: Input,
    tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomInput: Story = {
    args: {id: 'username',
        error: 'error',
        type: 'text',
        inputLabel: 'Username',
        inputPlaceholder: 'Enter your username',
        value: 'default value',
        onChange: () => {console.log('handle change')},
        onBlur: () => {console.log('handle blur')}
    }
}