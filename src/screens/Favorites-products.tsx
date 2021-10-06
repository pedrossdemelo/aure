import React from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import ArrowIconS from '../assets/icons/ArrowIconS';
import AureLogo from '../assets/icons/AureLogo';
import {FilterButton} from '../components/atoms/FilterButton';
import {MediumButton} from '../components/atoms/MediumButton';
import {TranslucentHeader} from '../components/atoms/TransluscentHeader';
import {t} from '../styles';
import {theme} from '../theme';
import {ProductFlatList} from './Catalog';

interface ProductPageProps {
  brand: string;
  collection: string;
  price: string;
  discountPrice: string;
}

const v = StyleSheet.create({
  productPageHeaderTextAlignment: {
    marginHorizontal: theme.spacing.m,
    textAlign: 'center',
  },
});

function InvisibleButton({title}) {
  return (
    <TouchableWithoutFeedback
      style={{
        height: theme.buttonSize.invisible,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.m,
        backgroundColor: theme.colors.background,
        justifyContent: 'space-between',
      }}>
      <Text style={t.mediumButton}>{title}</Text>
      <ArrowIconS style={{transform: [{rotate: '270deg'}]}} />
    </TouchableWithoutFeedback>
  );
}

function Favorites() {
  return (
    <>
      {/* <TranslucentHeader title={'Favoritos'} />
      <View style={{flex: 1}}>
        <ProductFlatList />
      </View>
      <FilterButton /> */}
      <View
        style={{
          overflow: 'hidden',
          borderRadius: theme.spacing.l,
          marginTop: useSafeAreaInsets().top,
        }}>
        <ScrollView
          style={{backgroundColor: 'white'}}
          // setting borderRadius to containerStyle makes round scrollviews work
          contentContainerStyle={{marginTop: theme.spacing.xs}}>
          {/* Product Info Section */}
          <View>
            {/* Brand */}
            <Text style={[v.productPageHeaderTextAlignment, t.title]}>Vivara</Text>
            {/* Collection */}
            <Text style={[v.productPageHeaderTextAlignment, t.title2, {fontFamily: 'Lato-Regular'}]}>Coleção Vivara</Text>
            {/* Name */}
            <Text style={[v.productPageHeaderTextAlignment, t.title2, {fontFamily: 'Lato-Regular', color: theme.colors.textSecondary}]}>Anel Vivara Ouro Rosé e Diamantes Negros</Text>
            {/* Price Info Section TODO: fix center alignment*/}
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: theme.spacing.s}}>
              {/* Price */}
              <Text style={[t.price, {marginHorizontal: theme.spacing.s}]}>R$ 2400,00</Text>
              {/* DiscountPrice */}
              <Text style={[t.price, {color: theme.colors.notification, marginHorizontal: theme.spacing.s}]}>R$ 1920,00</Text>
              {/* InstallmentPrice */}
              <Text style={[t.paragraph2, t.installmentPrice, {textAlign: undefined, flex: 0, marginHorizontal: theme.spacing.s}]}>12x R$ 180,00</Text>
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
              <Text style={[t.mediumButton, {lineHeight: theme.fontSize.mediumButton * 1.2}]}>Selecione o tamanho</Text>
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
            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: theme.spacing.xs * 1.5, }}>
              <View
                style={{
                  borderRadius: 999,
                  height: 32,
                  width: 32,
                  borderColor: 'black',
                  borderWidth: 1.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Hi</Text>
              </View>
              <View
                style={{
                  borderRadius: 999,
                  height: 32,
                  width: 32,
                  borderColor: 'black',
                  borderWidth: 1.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Hi</Text>
              </View>
              <View
                style={{
                  borderRadius: 999,
                  height: 32,
                  width: 32,
                  borderColor: 'black',
                  borderWidth: 1.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Hi</Text>
              </View>
            </View>
          </View>
          <MediumButton
            onPress={() => {}}
            color={theme.colors.foreground}
            textColor={theme.colors.background}
            title={'Adicionar à Bolsa'}
            style={{marginHorizontal: theme.spacing.m, marginVertical: theme.spacing.xs * 1.5}}
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
    </>
  );
}

export default React.memo(Favorites);
