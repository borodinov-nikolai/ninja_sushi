import type { Meta, StoryObj } from "@storybook/react";

import Input from "./";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },



  args: {
   
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const input: Story = {
  args: {
  
  },
};
