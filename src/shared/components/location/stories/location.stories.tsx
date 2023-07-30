import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { Location, LocationProps } from '../location';

export default {
  title: 'Location',
  component: Location,
} as Meta;

const Template: Story<LocationProps> = (args) => <Location {...args} />;

export const Basic = Template.bind({});
