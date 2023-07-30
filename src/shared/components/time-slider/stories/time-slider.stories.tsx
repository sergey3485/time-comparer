import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { TimeSlider, TimeSliderProps } from '../time-slider';

export default {
  title: 'TimeSlider',
  component: TimeSlider,
} as Meta;

const Template: Story<TimeSliderProps> = (args) => <TimeSlider {...args} />;

export const Basic = Template.bind({});
