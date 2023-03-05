import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { LocationCard, LocationCardProps } from '../location-card';

export default {
  title: 'LocationCard',
  component: LocationCard,
} as Meta;

const Template: Story<LocationCardProps> = (args) => <LocationCard {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'LocationCard',
};
