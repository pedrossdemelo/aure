import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import {ImageTouchableFeedback} from '../components/atoms/ImageTouchableFeedback';
import {t, v} from '../styles';
import {theme} from '../theme';
import {Placeholder} from './Home';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {SmallButton} from '../components/atoms/SmallButton';
import {CounterButton} from '../components/atoms/CounterButton';
import Svg, {Path} from 'react-native-svg';

function BagItem() {
  const window = useWindowDimensions();
  return (
    <View
      style={{
        padding: theme.spacing.s,
        borderBottomWidth: theme.spacing.xxs,
        borderBottomColor: theme.colors.touchablePrimary,
      }}>
      <View
        style={{
          flexDirection: 'row',
          maxHeight: (138 * 4) / 5 + 16,
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
              <Text style={[t.paragraph, {flexWrap: 'wrap'}]}>
                Anel Vivara com Diamantes e uma descrição desnecessáriamente
                grande e imensa que ninguém vai ler ngm liga pra sua marca de
                mal vai se fuder.
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[
                {
                  margin: theme.spacing.s,
                  fontSize: theme.fontSize.price,
                  color: theme.colors.textPrimary,
                  lineHeight: theme.fontSize.price * 1.2,
                  fontFamily: 'Lato-Bold',
                  marginBottom: theme.spacing.xs + theme.spacing.s + 0.5,
                },
              ]}>
              R$ 1600{'\n'}
              <Text
                style={{
                  fontSize: theme.fontSize.paragraph2,
                  color: theme.colors.textPrimary,
                  lineHeight: theme.fontSize.paragraph2 * 1.2,
                  fontFamily: 'Lato-Regular',
                }}>
                12x R$120
              </Text>
            </Text>
            <CounterButton />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <SmallButton
          onPress={() => {}}
          style={{
            margin: theme.spacing.s,
          }}
          styleInternal={{
            width: 136,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal:
              12 *
              (Dimensions.get('screen').fontScale <= 1
                ? 1
                : Dimensions.get('screen').fontScale * 0.85),
            flexDirection: 'row',
          }}>
          <Text style={[t.smallButton]} numberOfLines={1}>
            Tam: 14
          </Text>
          <Svg width={12} height={12} fill="none">
            <Path
              d="M2 4.8l3.293 3.674a.93.93 0 001.414 0L10 4.8"
              stroke={theme.colors.textPrimary}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </SmallButton>
        <View style={{flexDirection: 'row', margin: theme.spacing.xs}}>
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
  );
}

export default function Bag() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={{marginTop: insets.top}}
      showsVerticalScrollIndicator={false}
      overScrollMode={
        Platform.OS === 'android' && Platform.Version < 31 ? 'never' : 'always'
      }>
      <BagItem />
      <BagItem />
      <BagItem />
      <BagItem />
      <BagItem />
      <BagItem />
      <BagItem />
      <BagItem />
      <BagItem />
      <BagItem />
    </ScrollView>
  );
}
