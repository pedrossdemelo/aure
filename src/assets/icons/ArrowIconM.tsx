import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';

export function ArrowIconM() {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        d="M12 16l6-6.001-6-6.002M2 10h16"
        stroke={theme.colors.textPrimary}
        strokeWidth={2.4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
