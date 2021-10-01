import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';

export function MinusIcon() {
  return (
    <Svg width={14} height={14} fill="none">
      <Path
        d="M2 7h10"
        stroke={theme.colors.textPrimary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
