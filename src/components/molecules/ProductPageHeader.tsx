import React from 'react';
import {Text, View} from 'react-native';
import { t, v } from '../../styles';
import { theme } from '../../theme';

export function ProductPageHeader({brand, collection, name, price, discountPrice}) {
  return (
    <>
      {/* Brand */}
      <Text style={[v.productPageHeaderTextAlignment, t.title]}>{brand}</Text>
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
          style={[t.price, {marginHorizontal: theme.spacing.s, fontSize: 16}]}>
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
    </>
  );
}
