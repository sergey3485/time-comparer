import * as React from 'react';
import { useUnit } from 'effector-react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import { City } from 'worldcities/lib/city';
import {
  changeTimeBySlider,
} from '@/features/logic/time.model';

export interface TimeSliderProps {
  /**
   * The content
   */
  timeValue: Date;
  changeLocation: () => void;
}

export const TimeSlider = (props: TimeSliderProps): JSX.Element => {
  const {
    timeValue,
    changeLocation,
  } = props;

  const {
    changeSliderValue,
  } = useUnit({
    changeSliderValue: changeTimeBySlider,
  });

  const newDate = new Date(timeValue).setHours(0, 0, 0, 0);

  const timeDif = timeValue.getTime() - newDate;

  return (
    <Slider
      step={900000}
      max={86400000 - 900000}
      min={0}
      onChange={(value) => changeSliderValue(value)}
      onChangeStart={changeLocation}
      value={timeDif}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>

      <SliderThumb />
    </Slider>
  );
};
