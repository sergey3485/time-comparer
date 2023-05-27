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

  // const timeDif = timeValue.getTime() - timeValue.setHours(0, 0, 0, 0);

  return (
    <S.SliderRoot
      step={90000}
      max={8640000}
      min={0}
      onValueChange={(event) => changeSliderValue(event[0])}
      // value={[timeDif]}
    >
      <S.SliderTrack>
        <S.SliderRange />
      </S.SliderTrack>

      <S.SliderThumb />
    </S.SliderRoot>
  );
};
