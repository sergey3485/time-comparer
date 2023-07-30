import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { MainLayout, MainLayoutProps } from '../main-layout';

export default {
  title: 'MainLayout',
  component: MainLayout,
} as Meta;

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'MainLayout',
};
