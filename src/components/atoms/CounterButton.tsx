import React, {useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';
import {TouchableHighlight} from 'react-native';
import {t} from '../../styles';

function PlusIcon() {
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

function MinusIcon() {
  return (
    <Svg width={12} height={12} fill="none">
      <Path
        d="M1 6h10"
        stroke={theme.colors.textPrimary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CounterButton() {
  const [count, setCount] = useState(1);
  const fontScale = useWindowDimensions().fontScale;

  const smallButtonHeight =
    theme.fontSize.smallButton * 1.2 * fontScale +
    (32 - theme.fontSize.smallButton * 1.2);
  return (
    <View
      style={{
        padding: theme.spacing.s,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={[
          {
            position: 'absolute',
            right: 0,
            top: 0,
            left: 0,
            bottom: 0,
            justifyContent: 'center',
          },
        ]}>
        <View
          style={{
            marginHorizontal: theme.spacing.s,
            borderRadius: 999,
            flex: 1,
            maxHeight: smallButtonHeight,
            backgroundColor: theme.colors.touchablePrimary,
          }}
        />
      </View>
      <TouchableHighlight
        underlayColor={theme.colors.buttonRipple.remove}
        activeOpacity={2/3}
        onPress={() => setCount(count - 1)}
        hitSlop={{
          bottom: theme.spacing.s,
          top: theme.spacing.s,
          left: theme.spacing.s,
          right: theme.spacing.s,
        }}
        style={{borderRadius: 999, overflow: 'hidden'}}>
        <View
          style={{
            height: smallButtonHeight,
            width: smallButtonHeight,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.touchablePrimary,
          }}>
          <MinusIcon />
        </View>
      </TouchableHighlight>
      <Text style={[t.smallButton]}>{count}</Text>
      <TouchableHighlight
        underlayColor={theme.colors.buttonRipple.add}
        onPress={() => setCount(count + 1)}
        activeOpacity={2 / 3}
        hitSlop={{
          bottom: theme.spacing.s,
          top: theme.spacing.s,
          left: theme.spacing.s,
          right: theme.spacing.s,
        }}
        style={{borderRadius: 999, overflow: 'hidden'}}>
        <View
          style={{
            height: smallButtonHeight,
            width: smallButtonHeight,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.touchablePrimary,
          }}>
          <PlusIcon />
        </View>
      </TouchableHighlight>
    </View>
  );
}
