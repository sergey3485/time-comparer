import * as React from 'react';
import { useUnit } from 'effector-react';
import {
  changeTimeBySlider,
} from '@/features/logic/time.model';

import * as S from './time-slider.styled';

export interface TimeSliderProps {
  /**
   * The content
   */
  timeValue: Date;
}

export const TimeSlider = (props: TimeSliderProps): JSX.Element => {
  const {
    timeValue,
  } = props;

  const {
    changeSliderValue,
  } = useUnit({
    changeSliderValue: changeTimeBySlider,
  });

  const newDate = new Date(timeValue).setHours(0, 0, 0, 0);

  const timeDif = timeValue.getTime() - newDate;

  return (
    <S.SliderRoot
      step={900000}
      max={86400000 - 900000}
      min={0}
      onValueChange={(event) => changeSliderValue(event[0])}
      value={[timeDif]}
    >
      <S.SliderTrack>
        <S.SliderRange />
      </S.SliderTrack>

      <S.SliderThumb />
    </S.SliderRoot>
  );
};
