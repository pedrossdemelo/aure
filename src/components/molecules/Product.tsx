import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Placeholder} from '../../screens/Home';
import {getHookedStyles, t, v} from '../../styles';
import {theme} from '../../theme';
import {ImageTouchableFeedback} from '../atoms/ImageTouchableFeedback';

export function Product() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);

  function ProductCard() {
    function ProductDiscountTag() {
      return null;
    }

    function ProductFavoriteButton() {
      return null;
    }

    return (
      <ImageTouchableFeedback
        source={Placeholder}
        style={[v.productCard]}
        shadow={[v.shadow]}
        pressColor={theme.colors.background}
        onPress={() => {}}>
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
          R$ 2400
        </Text>
      );
    }

    function ProductInstallmentPrice() {
      return (
        <Text style={[t.paragraph2, t.installmentPrice]} numberOfLines={1}>
          12x R$ 200
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
          Vivara{'\n'}
          <Text style={[t.paragraph]}>
            Anel Vivara Diamantes Negros e uma descrição exageradamente grande
          </Text>
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
