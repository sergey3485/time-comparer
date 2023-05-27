import styled from '@emotion/styled';

import * as Slider from '@radix-ui/react-slider';

export const SliderRoot = styled(Slider.Root)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',
  height: '20px',
});

export const SliderThumb = styled(Slider.Thumb)({
  all: 'unset',
  display: 'block',
  width: '20px',
  height: '20px',
  backgroundColor: '#FF9514',
  borderRadius: '50%',
});

export const SliderTrack = styled(Slider.Track)((props) => ({
  backgroundColor: 'green',
  position: 'relative',
  flexGrow: '1',
  borderRadius: '9999px',
  height: '2px',
}));

export const SliderRange = styled(Slider.Range)({
  position: 'absolute',
  backgroundColor: 'blue',
  borderRadius: '9999px',
  height: '100%',
});
