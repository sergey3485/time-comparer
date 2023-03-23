import * as React from 'react';

import * as S from './time-slider.styled';

export interface TimeSliderProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const TimeSlider = (props: TimeSliderProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.SliderRoot>
      <S.SliderTrack>
        <S.SliderRange />
      </S.SliderTrack>

      <S.SliderThumb />
    </S.SliderRoot>
  );
};
