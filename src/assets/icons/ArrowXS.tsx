import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';

export function ArrowXS() {
  return (
    <Svg width={12} height={12} fill="none">
      <Path
        d="M2 4.8l3.293 3.674a.93.93 0 001.414 0L10 4.8"
        stroke={theme.colors.textPrimary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
