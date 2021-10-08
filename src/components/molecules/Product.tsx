import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getHookedStyles, t, v} from '../../styles';
import {theme} from '../../theme';
import {ImageTouchableFeedback} from '../atoms/base/ImageTouchableFeedback';

interface ProductProps {
  brand: string;
  price: string;
  name: string;
  image: string;
}

export function Product({brand, price, name, image}: ProductProps) {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  const navigation = useNavigation();

  function ProductCard() {
    function ProductDiscountTag() {
      return null;
    }

    function ProductFavoriteButton() {
      return null;
    }

    return (
      <ImageTouchableFeedback
        source={image}
        style={[v.productCard]}
        shadow={[v.shadow]}
        pressColor={theme.colors.background}
        onPress={() => {
          navigation.navigate('ProductPage');
        }}>
        <ProductDiscountTag />
        <ProductFavoriteButton />
      </ImageTouchableFeedback>
    );
  }

  function ProductPrice() {
    function ProductOriginalPrice() {
      return null;
    }
    function ProductCurrentPrice() {
      return (
        <Text style={[t.price]} numberOfLines={1}>
          R$ {price}
        </Text>
      );
    }

    function ProductInstallmentPrice() {
      return (
        <Text style={[t.paragraph2, t.installmentPrice]} numberOfLines={1}>
          12x R$ {Math.round(Number(price) / 12)}
        </Text>
      );
    }

    return (
      <View style={[v.productPricingContainer]}>
        <ProductCurrentPrice />
        <ProductOriginalPrice />
        <ProductInstallmentPrice />
      </View>
    );
  }

  const ProductDescription = () => {
    return (
      <View style={{flex: 1, marginHorizontal: theme.spacing.xs}}>
        <Text style={[t.title2]} numberOfLines={2}>
          {brand}
          {'\n'}
          <Text style={[t.paragraph]}>{name}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View style={[hs.productContainer]}>
      <ProductCard />
      <ProductPrice />
      <ProductDescription />
    </View>
  );
}

function ProductFromList({brand, price, name, image}: ProductProps) {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  const navigation = useNavigation();

  function ProductCard() {
    function ProductDiscountTag() {
      return null;
    }

    function ProductFavoriteButton() {
      return null;
    }

    return (
      <ImageTouchableFeedback
        source={image}
        style={[v.productCard]}
        shadow={[v.shadow]}
        pressColor={theme.colors.background}
        onPress={() => {
          navigation.navigate('ProductPage');
        }}>
        <ProductDiscountTag />
        <ProductFavoriteButton />
      </ImageTouchableFeedback>
    );
  }

  function ProductPrice() {
    function ProductOriginalPrice() {
      return null;
    }
    function ProductCurrentPrice() {
      return (
        <Text style={[t.price]} numberOfLines={1}>
          R$ {price}
        </Text>
      );
    }

    function ProductInstallmentPrice() {
      return (
        <Text style={[t.paragraph2, t.installmentPrice]} numberOfLines={1}>
          12x R$ {Math.round(Number(price) / 12)}
        </Text>
      );
    }

    return (
      <View style={[v.productPricingContainer]}>
        <ProductCurrentPrice />
        <ProductOriginalPrice />
        <ProductInstallmentPrice />
      </View>
    );
  }

  const ProductDescription = () => {
    return (
      <View style={{flex: 1, marginHorizontal: theme.spacing.xs}}>
        <Text style={[t.title2]} numberOfLines={2}>
          {brand}
          {'\n'}
          <Text style={[t.paragraph]}>{name}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[
        hs.productContainer,
        {marginBottom: theme.spacing.m, width: (window.width - 40) / 2},
      ]}>
      <ProductCard />
      <ProductPrice />
      <ProductDescription />
    </View>
  );
}

export default React.memo(ProductFromList);
