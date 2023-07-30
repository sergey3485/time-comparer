import * as React from 'react';
import {
  Slider, SliderFilledTrack, SliderThumb, SliderTrack,
} from '@chakra-ui/react';
import { useUnit } from 'effector-react';

import { changeTimeBySlider } from './time-slider.model';

export interface TimeSliderProps {
  /**
   * The content
   */
  timeValue: number;
  changeLocation: () => void;
}

export const TimeSlider = (props: TimeSliderProps): JSX.Element => {
  const { timeValue, changeLocation } = props;

  const { changeSliderValue } = useUnit({
    changeSliderValue: changeTimeBySlider,
  });

  return (
    <Slider
      step={900000}
      max={86400000 - 900000}
      min={0}
      onChange={changeSliderValue}
      onChangeStart={changeLocation}
      value={timeValue}
      colorScheme="blue"
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>

      <SliderThumb />
    </Slider>
  );
};
