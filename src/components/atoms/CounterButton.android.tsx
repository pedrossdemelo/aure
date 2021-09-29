import React, {useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../theme';
import {TouchableNativeFeedback} from 'react-native';
import {t, v} from '../../styles';
import {MinusIcon} from '../../assets/icons/MinusIcon';
import {PlusIcon} from '../../assets/icons/PlusIcon';

//TODO: Merge counterbutton android and ios
interface IconButtonProps {
  children: JSX.Element;
  onPress?: () => void;
  onLongPress?: () => void;
}
function OperationIconButton({
  children,
  onPress,
  onLongPress,
}: IconButtonProps) {
  const fontScale = useWindowDimensions().fontScale;
  const smallButtonHeight =
    theme.fontSize.smallButton * 1.2 * fontScale +
    (32 - theme.fontSize.smallButton * 1.2);
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(
        theme.colors.buttonRipple.remove,
        true,
      )}
      useForeground
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={v.smallHitSlop}>
      <View
        style={[
          v.center,
          {
            height: smallButtonHeight,
            width: smallButtonHeight,
          },
        ]}>
        {children}
      </View>
    </TouchableNativeFeedback>
  );
}

export function CounterButton() {
  const [count, setCount] = useState(1);
  function validSetCount(currentCount: number, operation: number) {
    if (currentCount <= 1 && operation < 0) {
      return;
    }
    if (currentCount >= 99 && operation > 0) {
      return;
    }
    return setCount(currentCount + operation);
  }
  const fontScale = useWindowDimensions().fontScale;

  const smallButtonHeight =
    theme.fontSize.smallButton * 1.2 * fontScale +
    (32 - theme.fontSize.smallButton * 1.2);
  return (
    <View style={v.counterButtonContainer}>
      <View style={v.absoluteFillContainerCenter}>
        <View style={[v.counterButtonPill, {maxHeight: smallButtonHeight}]} />
      </View>
      <OperationIconButton onPress={() => validSetCount(count, -1)}>
        <MinusIcon />
      </OperationIconButton>
      <Text
        style={[
          t.smallButton,
          {
            minWidth: 17 * (fontScale <= 1 ? 1 : fontScale * 0.85),
            textAlign: 'center',
          },
        ]}>
        {count}
      </Text>
      <OperationIconButton onPress={() => validSetCount(count, +1)}>
        <PlusIcon />
      </OperationIconButton>
    </View>
  );
}
