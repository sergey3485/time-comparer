import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from '../input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Input',
};
