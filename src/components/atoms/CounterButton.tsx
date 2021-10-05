import React, {useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {theme} from '../../theme';
import {t, v} from '../../styles';
import {MinusIcon} from '../../assets/icons/MinusIcon';
import {PlusIcon} from '../../assets/icons/PlusIcon';
import {OperationIconButton} from './OperationIconButton';

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
    (theme.buttonSize.small - theme.fontSize.smallButton * 1.2);
  return (
    <View style={v.counterButtonContainer}>
      <View style={v.absoluteFillContainerCenter}>
        <View style={[v.counterButtonPill, {maxHeight: smallButtonHeight}]} />
      </View>
      <OperationIconButton
        pressColor={theme.colors.buttonRipple.remove}
        onPress={() => validSetCount(count, -1)}>
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
      <OperationIconButton
        pressColor={theme.colors.buttonRipple.add}
        onPress={() => validSetCount(count, +1)}>
        <PlusIcon />
      </OperationIconButton>
    </View>
  );
}
