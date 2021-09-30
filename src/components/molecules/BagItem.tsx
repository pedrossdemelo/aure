import React from 'react';
import {useWindowDimensions, View, Text} from 'react-native';
import {ImageTouchableFeedback} from '../atoms/ImageTouchableFeedback';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {Placeholder} from '../../screens/Home';
import {SmallButton} from '../atoms/SmallButton';
import {CounterButton} from '../atoms/CounterButton';
import {SizeSelectionButton} from '../atoms/SizeSelectionButton';

//TODO: Stylesheet these styles
export function BagItem() {
  const window = useWindowDimensions();
  return (
    <>
      <View style={{padding: theme.spacing.s}}>
        <View
          style={{
            flexDirection: 'row',
            maxHeight: 138 / (5 / 4) + theme.spacing.m,
          }}>
          <ImageTouchableFeedback
            source={Placeholder}
            style={[
              {
                margin: theme.spacing.s,
                borderRadius: theme.spacing.s,
                width: 136,
                aspectRatio: 5 / 4,
              },
            ]}
            shadow={[v.shadow]}
          />
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                marginTop: theme.spacing.s,
                marginHorizontal: theme.spacing.s,
              }}>
              <Text style={[t.title2, {marginTop: theme.spacing.xs}]}>
                Vivara{'\n'}
                <Text style={[t.paragraph]}>
                  Anel Vivara com Diamantes e uma descrição desnecessáriamente
                  grande e imensa que ninguém vai ler ngm liga pra sua marca de
                  mal vai se fuder.
                </Text>
              </Text>
            </View>
            <View style={v.priceAndCounterContainer}>
              <Text style={[v.bagItemPrice]}>
                R$ 1600{'\n'}
                <Text style={[t.paragraph2, {color: theme.colors.textPrimary}]}>
                  12x R$120
                </Text>
              </Text>
              <CounterButton />
            </View>
          </View>
        </View>
        <View style={v.bagItemButtonsContainer}>
          <SizeSelectionButton />
          <View style={v.bagItemRightButtonsContainer}>
            {window.width > 340 ? (
              <SmallButton
                title={'Guardar'}
                onPress={() => {}}
                style={{margin: theme.spacing.xs}}
              />
            ) : null}
            <SmallButton
              title={'Remover'}
              onPress={() => {}}
              style={{margin: theme.spacing.xs}}
            />
          </View>
        </View>
      </View>
      <View style={v.bagItemLineSeparator} />
    </>
  );
}
