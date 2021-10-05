import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function ArrowIconS(props: SvgProps) {
  return (
    <Svg width={14} height={14} fill="none" {...props}>
      <Path
        d="M1.5 4.25l4.528 5.052a1.28 1.28 0 001.944 0L12.5 4.25"
        stroke="#321A12"
        strokeWidth={2.4}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowIconS;
