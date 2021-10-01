import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';

function FilterIconM() {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        d="M2 4.5h16M5.355 10h9.29M8.452 15.5h3.096"
        stroke={theme.colors.textPrimary}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default FilterIconM;
