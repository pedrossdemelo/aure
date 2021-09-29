import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';
export function PlusIcon() {
  return (
    <Svg width={12} height={12} fill="none">
      <Path
        d="M1 6h10M6 11V1"
        stroke={theme.colors.textPrimary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
