import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { Header } from '../header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Header',
};
