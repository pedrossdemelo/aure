import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';

export function ArrowIconXS() {
  return (
    <Svg width={14} height={14} fill="none">
      <Path
        d="M3 5l3.293 3.675a.93.93 0 001.414 0L11 5"
        stroke="#321A12"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
