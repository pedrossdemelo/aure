import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';

function FilterIconM() {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        d="M2 4h16M5.355 9.5h9.29M8.452 15h3.096"
        stroke={theme.colors.textPrimary}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default FilterIconM;
