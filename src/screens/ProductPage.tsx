import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MediumButton} from '../components/atoms/base/MediumButton';
import {v} from '../styles';
import {theme} from '../theme';
import {sample} from '../assets/sample';
import {ProductPageHeader} from '../components/molecules/ProductPageHeader';
import {ProductPageSizeSelector} from '../components/molecules/ProductPageSizeSelector';
import {CollapsibleButton} from '../components/atoms/base/CollapsibleButton';

interface ProductPageProps {
  brand: string;
  name: string;
  collection: string;
  price: string;
  discountPrice: string;
  image: string;
}

function ProductPageTemp({
  brand,
  name,
  collection,
  price,
  discountPrice,
  image,
}: ProductPageProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: insets.top,
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
        <ProductPageHeader
          brand={brand}
          collection={collection}
          name={name}
          price={price}
          discountPrice={discountPrice}
        />
        {/* Size Selection Section */}
        <ProductPageSizeSelector />
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

        <CollapsibleButton title={'Descrição'} />
        <CollapsibleButton title={'Composição & cuidados'} />
        <CollapsibleButton title={'Especificações & dimensões'} />
        <CollapsibleButton title={'Envio & pagamento'} />
        <CollapsibleButton title={'Sobre a marca'} />
        <CollapsibleButton title={'Produtos da marca'} />
        <CollapsibleButton title={'Produtos semelhantes'} />
        <CollapsibleButton title={'Visto recentemente'} />
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
