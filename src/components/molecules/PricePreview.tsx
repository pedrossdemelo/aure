import React from 'react';
import {Text, View} from 'react-native';
import {t, v} from '../../styles';
import {theme} from '../../theme';

export function PricePreview() {
  return (
    <View style={v.pricePreviewContainer}>
      <View style={v.pricePreviewSection}>
        <Text style={t.title2}>Subtotal:</Text>
        <Text style={t.title2}>R$ 12000,00</Text>
      </View>
      <View style={v.pricePreviewSection}>
        <Text style={t.title2}>Frete:</Text>
        <Text style={t.title2}>R$ 34,00</Text>
      </View>
      <View style={[v.pricePreviewSection, {paddingTop: 9}]}>
        <Text style={[t.title, {lineHeight: theme.fontSize.title * 1.2}]}>
          Total:
        </Text>
        <Text style={[t.title, {lineHeight: theme.fontSize.title * 1.2}]}>
          R$ 12034,00
        </Text>
      </View>
    </View>
  );
}
