import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { TimeSlider, TimeSliderProps } from '../time-slider';

export default {
  title: 'TimeSlider',
  component: TimeSlider,
} as Meta;

const Template: Story<TimeSliderProps> = (args) => <TimeSlider {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'TimeSlider',
};
