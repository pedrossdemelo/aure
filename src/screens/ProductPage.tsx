import React from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ArrowIconS from '../assets/icons/ArrowIconS';
import {MediumButton} from '../components/atoms/MediumButton';
import {SmallButton} from '../components/atoms/SmallButton';
import {t} from '../styles';
import {theme} from '../theme';
import {sample} from '../assets/sample';

interface ProductPageProps {
  brand: string;
  name: string;
  collection: string;
  price: string;
  discountPrice: string;
  image: string;
}

const v = StyleSheet.create({
  productPageHeaderTextAlignment: {
    marginHorizontal: theme.spacing.m,
    textAlign: 'center',
  },
  productPageScrollViewStyle: {
    borderTopRightRadius: theme.spacing.l,
    borderTopLeftRadius: theme.spacing.l,
    backgroundColor: theme.colors.background,
    overflow: 'hidden',
  },
  productPageScrollViewInternalStyle: {
    paddingTop: theme.spacing.xs * 1.5,
    borderTopRightRadius: theme.spacing.l,
    borderTopLeftRadius: theme.spacing.l,
    overflow: 'hidden',
  },
});

function InvisibleButton({title}) {
  const minHeight = theme.buttonSize.invisible;
  const fontScale = useWindowDimensions().fontScale;
  return (
    <TouchableWithoutFeedback
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.m,
        justifyContent: 'space-between',
        height:
          t.mediumButton.lineHeight * fontScale +
          (minHeight - t.mediumButton.lineHeight),
        minHeight: minHeight,
      }}>
      <Text style={t.mediumButton}>{title}</Text>
      <ArrowIconS
        style={[
          {marginLeft: theme.spacing.m},
          {transform: [{rotate: '270deg'}]},
        ]}
      />
    </TouchableWithoutFeedback>
  );
}

function ProductPageTemp({
  brand,
  name,
  collection,
  price,
  discountPrice,
  image,
}: ProductPageProps) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <FastImage
        source={{
          uri: image,
        }}
        style={{aspectRatio: 1.1}}
      />
      <ScrollView
        style={v.productPageScrollViewStyle}
        // setting borderRadius to containerStyle makes round scrollviews work with overflow 'hidden'
        contentContainerStyle={[
          v.productPageScrollViewInternalStyle,
          {
            paddingBottom: 52 + useSafeAreaInsets().bottom,
          },
        ]}
        overScrollMode={'never'}
        showsVerticalScrollIndicator={false}>
        {/* Product Info Section */}
        <View>
          {/* Brand */}
          <Text style={[v.productPageHeaderTextAlignment, t.title]}>
            {brand}
          </Text>
          {/* Collection */}
          <Text
            style={[
              v.productPageHeaderTextAlignment,
              t.title2,
              {fontFamily: 'Lato-Regular'},
            ]}>
            Coleção {collection}
          </Text>
          {/* Name */}
          <Text
            style={[
              v.productPageHeaderTextAlignment,
              t.title2,
              {fontFamily: 'Lato-Regular', color: theme.colors.textSecondary},
            ]}>
            {name}
          </Text>
          {/* Price Info Section TODO: fix center alignment*/}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: theme.spacing.s - 0.5,
              marginTop: theme.spacing.s + theme.spacing.xxs,
            }}>
            {/* Price */}
            <Text
              style={[
                t.price,
                {marginHorizontal: theme.spacing.s, fontSize: 16},
              ]}>
              R$ {price},00
            </Text>
            {/* DiscountPrice */}
            <Text
              style={[
                t.price,
                {
                  color: theme.colors.notification,
                  marginHorizontal: theme.spacing.s,
                  fontSize: 16,
                },
              ]}>
              R$ {discountPrice},00
            </Text>
            {/* InstallmentPrice */}
            <Text
              style={[
                t.paragraph2,
                t.installmentPrice,
                {
                  textAlign: undefined,
                  flex: 0,
                  marginHorizontal: theme.spacing.s,
                  fontSize: 12,
                },
              ]}>
              12x R$ {Math.round(Number(price) / 12)},00
            </Text>
          </View>
        </View>
        {/* Size Selection Section */}
        <View>
          {/* Select Size */}
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <View
              style={{
                height: 2,
                flex: 1,
                backgroundColor: theme.colors.touchablePrimary,
                marginHorizontal: theme.spacing.m,
                borderRadius: 999,
              }}
            />
            <Text
              style={[
                t.mediumButton,
                {lineHeight: theme.fontSize.mediumButton * 1.4},
              ]}>
              Selecione o tamanho
            </Text>
            <View
              style={{
                height: 2,
                flex: 1,
                backgroundColor: theme.colors.touchablePrimary,
                marginHorizontal: theme.spacing.m,
                borderRadius: 999,
              }}
            />
          </View>
          {/* Size selection buttons */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: theme.spacing.xs * 1.5,
              marginBottom: theme.spacing.xxs * 1.5,
              marginHorizontal: theme.spacing.m,
              flexWrap: 'wrap',
            }}>
            <SmallButton
              onPress={() => {}}
              title={'13'}
              color={'transparent'}
              style={{
                borderWidth: 1.2,
                borderColor: theme.colors.touchableSecondary,
                margin: theme.spacing.xs,
              }}
              fontFamily={'Lato-Regular'}
            />
            <SmallButton
              onPress={() => {}}
              title={'14'}
              color={theme.colors.touchableSecondary}
              style={{
                borderWidth: 1.2,
                borderColor: theme.colors.touchableSecondary,
                margin: theme.spacing.xs,
              }}
              fontFamily={'Lato-Bold'}
            />
            <SmallButton
              onPress={() => {}}
              title={'15'}
              color={'transparent'}
              style={{
                borderWidth: 1.2,
                borderColor: theme.colors.touchableSecondary,
                margin: theme.spacing.xs,
              }}
              fontFamily={'Lato-Regular'}
            />
            <SmallButton
              onPress={() => {}}
              title={'16'}
              color={'transparent'}
              style={{
                borderWidth: 1.2,
                borderColor: theme.colors.touchableSecondary,
                margin: theme.spacing.xs,
              }}
              fontFamily={'Lato-Regular'}
            />
          </View>
        </View>
        <MediumButton
          onPress={() => {}}
          color={theme.colors.foreground}
          textColor={theme.colors.background}
          title={'Adicionar à Bolsa'}
          style={{
            marginHorizontal: theme.spacing.m,
            marginVertical: theme.spacing.xs * 1.5,
          }}
        />
        <View>
          <InvisibleButton title={'Descrição'} />
          <InvisibleButton title={'Composição & cuidados'} />
          <InvisibleButton title={'Especificações & dimensões'} />
          <InvisibleButton title={'Envio & pagamento'} />
          <InvisibleButton title={'Sobre a marca'} />
          <InvisibleButton title={'Produtos da marca'} />
          <InvisibleButton title={'Produtos semelhantes'} />
          <InvisibleButton title={'Visto recentemente'} />
        </View>
      </ScrollView>
    </View>
  );
}

export function ProductPage() {
  const random = Math.floor(Math.random() * (35 + 1));
  return (
    <ProductPageTemp
      brand={sample[random].brand}
      name={sample[random].name}
      collection={sample[random].collection}
      price={sample[random].price}
      discountPrice={sample[random].discountPrice}
      image={sample[random].thumbnail}
    />
  );
}
