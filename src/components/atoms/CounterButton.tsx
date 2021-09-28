import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
import {theme} from '../../theme';

export function CounterButton() {
  return (
    <View>
      <Text>a</Text>
      {/* HERE LIES THE ADDBUTTON XD :) */}
      {/* <Svg width={12} height={12} fill="none">
        <G
          clipPath="url(#clip0)"
          stroke={theme.colors.textPrimary}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round">
          <Path d="M1 6.7h10M6 11.7v-10" />
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Path fill="#fff" transform="translate(0 .7)" d="M0 0H12V12H0z" />
          </ClipPath>
        </Defs>
      </Svg> */}
    </View>
  );
}
