import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { NewLocationCard } from '../new-location-card';

export default {
  title: 'NewLocationCard',
  component: NewLocationCard,
} as Meta;

const Template: Story = (args) => <NewLocationCard {...args} />;

export const Basic = Template.bind({});
