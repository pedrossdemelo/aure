import React from 'react';

import {
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Platform,
  ScaledSize,
  ColorValue,
  TouchableNativeFeedbackProps,
  ViewStyle,
} from 'react-native';

import FastImage from 'react-native-fast-image';

import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';

import {theme} from '../theme';

const getHookedStyleSheet = (insets: EdgeInsets, window: ScaledSize) =>
  StyleSheet.create({
    translucentStatusBar: {
      height: insets.top,
      width: '100%',
      backgroundColor: theme.colors.translucent.background,
      top: 0,
      position: 'absolute',
      zIndex: 1,
    },

    mainScrollViewContentContainer: {
      paddingTop: insets.top,
      paddingBottom:
        insets.bottom === 0 ? insets.bottom + 52 : insets.bottom + 47.7,
    },

    productContainer: {
      marginHorizontal: theme.spacing.xs,
      width: (window.width - 16) / 2,
    },
  });

const v = StyleSheet.create({
  logoContainer: {
    marginVertical: theme.spacing.m,
    alignItems: 'center',
  },

  userHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.l,
  },

  userAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: theme.spacing.m,
  },

  sectionContainer: {
    marginVertical: theme.spacing.s,
  },

  shadow: {
    elevation: Platform.Version < 28 ? 1 : 3,
    shadowColor: theme.colors.shadow,
  },

  discoverCard: {
    flex: 1,
    marginHorizontal: theme.spacing.s,
    borderRadius: theme.spacing.s,
  },

  discoverCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    aspectRatio: 13 / 5,
    marginHorizontal: theme.spacing.s,
  },

  featuredCollectionImage: {
    flex: 1,
    aspectRatio: 4 / 3,
    marginHorizontal: theme.spacing.m,
    borderRadius: theme.spacing.s,
  },

  selectionDotsContainer: {
    marginTop: 11.4,
    marginBottom: 8.075,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedDot: {
    backgroundColor: theme.colors.foreground,
    width: theme.spacing.xs * 1.5,
    height: theme.spacing.xs * 1.5,
    borderRadius: theme.spacing.xxs * 1.5,
    marginHorizontal: theme.spacing.xxs * 1.5,
  },

  selectionDot: {
    backgroundColor: theme.colors.dots,
    width: theme.spacing.xs,
    height: theme.spacing.xs,
    borderRadius: theme.spacing.xxs,
    marginHorizontal: theme.spacing.xxs * 1.5,
  },

  occasionCard: {
    flex: 1,
    height: 80,
    marginHorizontal: theme.spacing.s,
    borderRadius: theme.spacing.s,
  },

  productCard: {
    flex: 1,
    borderRadius: theme.spacing.s,
    aspectRatio: 1.1, // 11 / 10
  },

  horizontalScrollViewContainer: {
    paddingHorizontal: theme.spacing.m - theme.spacing.xs,
  },

  productPricingContainer: {
    marginHorizontal: theme.spacing.xxs,
    marginTop: theme.spacing.xs * 1.5,
    marginBottom: theme.spacing.xs - 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const t = StyleSheet.create({
  header: {
    fontFamily: 'Poppins-Medium',
    fontSize: theme.fontSize.header,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.header * 1.25,
  },

  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: theme.fontSize.title,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.title * 1.5,
  },

  title2: {
    fontFamily: 'Poppins-Medium',
    fontSize: theme.fontSize.title2,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.title2 * 1.25,
  },

  price: {
    fontFamily: 'Lato-Bold',
    fontSize: theme.fontSize.price,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.price * 1.25,
    marginHorizontal: theme.spacing.xxs,
  },

  paragraph: {
    fontFamily: 'Lato-Regular',
    fontSize: theme.fontSize.paragraph,
    color: theme.colors.textSecondary,
    lineHeight: theme.fontSize.paragraph * 1.2,
  },

  paragraph2: {
    fontFamily: 'Lato-Regular',
    fontSize: theme.fontSize.paragraph2,
    color: theme.colors.textSecondary,
    lineHeight: theme.fontSize.paragraph2 * 1.2,
  },

  installmentPrice: {
    color: theme.colors.textPrimary,
    marginHorizontal: theme.spacing.xxs,
    textAlign: 'right',
    flex: 1,
  },

  titleMargin: {
    marginBottom: theme.spacing.xxs,
    marginHorizontal: theme.spacing.l,
  },

  discoverCardTextAlignment: {
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xxs,
    textAlign: 'right',
    lineHeight: theme.fontSize.title * 1,
  },
});

const Placeholder =
  'http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg';
interface AndroidFeedbackButtonProps extends TouchableNativeFeedbackProps {
  children?: JSX.Element[] | JSX.Element;
  style?: ViewStyle;
  styleInternal?: ViewStyle;
  rippleColor: ColorValue;
}
interface Children {
  children?: JSX.Element[] | JSX.Element;
}

function AndroidFeedbackButton(props: AndroidFeedbackButtonProps) {
  return (
    <View style={[{overflow: 'hidden'}, props.style]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(props.rippleColor, false)}
        useForeground={false}
        onPress={props.onPress}
        onLongPress={props.onLongPress}>
        <View style={[props.styleInternal, {height: '100%'}]}>
          {props.children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

function TranslucentStatusBar() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyleSheet(insets, window);
  return <View style={[hs.translucentStatusBar]} />;
}

function MainScrollView({children}: Children) {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyleSheet(insets, window);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode={
        Platform.OS === 'android' && Platform.Version < 31 ? 'never' : 'always'
      }
      contentContainerStyle={[hs.mainScrollViewContentContainer]}>
      {children}
    </ScrollView>
  );
}

function LogoHeader() {
  return (
    <View style={[v.logoContainer]}>
      <AureLogo />
    </View>
  );
}

function UserHeader() {
  function UserGreetings() {
    return (
      <Text style={[t.title, {flex: 1}]}>
        Bom dia, {'\n'}
        <Text style={[t.header]}>Aurelia Stevens</Text>
      </Text>
    );
  }

  function UserProfilePic() {
    return (
      <FastImage
        source={{
          uri: Placeholder,
        }}
        style={[v.userAvatar]}>
        <AndroidFeedbackButton
          rippleColor={theme.colors.background}
          onPress={() => {}}
        />
      </FastImage>
    );
  }

  return (
    <View style={[v.userHeaderContainer]}>
      <UserGreetings />
      <UserProfilePic />
    </View>
  );
}

function DiscoverSection() {
  const window = useWindowDimensions();

  function DiscoverHeader() {
    return <Text style={[t.title, t.titleMargin]}>Conheça</Text>;
  }

  function DiscoverCards() {
    return (
      <FastImage source={{uri: Placeholder}} style={[v.discoverCard, v.shadow]}>
        <AndroidFeedbackButton
          rippleColor={theme.colors.background}
          onPress={() => {}}
          styleInternal={{
            alignItems: 'flex-end',
            flexDirection: 'row-reverse',
          }}>
          <Text
            style={[t.title, t.discoverCardTextAlignment]}
            numberOfLines={1}>
            Alianças
          </Text>
        </AndroidFeedbackButton>
      </FastImage>
    );
  }

  return (
    <View style={v.sectionContainer}>
      <DiscoverHeader />
      <View style={v.discoverCardsContainer}>
        {window.width > 367 ? <DiscoverCards /> : null}
        <DiscoverCards />
        <DiscoverCards />
      </View>
    </View>
  );
}

function FeaturedCollectionsSection() {
  function FeaturedCollectionsHeader() {
    return <Text style={[t.title, t.titleMargin]}>Coleções em destaque</Text>;
  }

  function FeaturedCollectionImage() {
    return (
      <FastImage
        source={{
          uri: Placeholder,
        }}
        style={[v.featuredCollectionImage, v.shadow]}>
        <AndroidFeedbackButton
          rippleColor={theme.colors.background}
          onPress={() => {}}
        />
      </FastImage>
    );
  }

  function FeaturedCollectionSelectionDots() {
    return (
      <View style={[v.selectionDotsContainer]}>
        <View style={[v.selectedDot]} />
        <View style={[v.selectionDot]} />
        <View style={[v.selectionDot]} />
        <View style={[v.selectionDot]} />
        <View style={[v.selectionDot]} />
      </View>
    );
  }

  function FeaturedCollectionDescription() {
    return (
      <Text style={[t.title2, {textAlign: 'center'}]} numberOfLines={3}>
        Vivara{'\n'}
        <Text style={[t.paragraph]}>Coleção Vivara</Text>
      </Text>
    );
  }

  return (
    <View style={[v.sectionContainer]}>
      <FeaturedCollectionsHeader />
      <FeaturedCollectionImage />
      <FeaturedCollectionSelectionDots />
      <FeaturedCollectionDescription />
    </View>
  );
}

function OccasionSection() {
  function OccasionHeader() {
    return (
      <Text style={[t.title, t.titleMargin]}>Joias para toda ocasião</Text>
    );
  }

  function OccasionCard() {
    return (
      <FastImage source={{uri: Placeholder}} style={[v.occasionCard, v.shadow]}>
        <AndroidFeedbackButton
          rippleColor={theme.colors.background}
          onPress={() => {}}
          styleInternal={{
            alignItems: 'flex-end',
            flexDirection: 'row-reverse',
          }}>
          <Text
            style={[t.title, t.discoverCardTextAlignment]}
            numberOfLines={1}>
            Formatura
          </Text>
        </AndroidFeedbackButton>
      </FastImage>
    );
  }

  return (
    <View style={[v.sectionContainer]}>
      <OccasionHeader />
      <View
        style={{
          marginBottom: theme.spacing.s,
          flexDirection: 'row',
          marginHorizontal: theme.spacing.s,
        }}>
        <OccasionCard />
        <OccasionCard />
      </View>
      <View
        style={{
          marginTop: theme.spacing.s,
          flexDirection: 'row',
          marginHorizontal: theme.spacing.s,
        }}>
        <OccasionCard />
        <OccasionCard />
      </View>
    </View>
  );
}

function FeaturedBrandsSection() {
  return null;
}

function Product() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyleSheet(insets, window);

  function ProductCard() {
    function ProductDiscountTag() {
      return null;
    }

    function ProductFavoriteButton() {
      return null;
    }

    return (
      <FastImage source={{uri: Placeholder}} style={[v.productCard, v.shadow]}>
        <AndroidFeedbackButton
          rippleColor={theme.colors.background}
          onPress={() => {}}>
          <ProductDiscountTag />
          <ProductFavoriteButton />
        </AndroidFeedbackButton>
      </FastImage>
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
    <View
      style={[hs.productContainer]}>
      <ProductCard />
      <ProductPrice />
      <ProductDescription />
    </View>
  );
}

function ForYouSection() {
  function ForYouSectionHeader() {
    return <Text style={[t.title, t.titleMargin]}>Joias para você</Text>;
  }

  function ProductListHorizontalScrollView() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}
        contentContainerStyle={[v.horizontalScrollViewContainer]}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ScrollView>
    );
  }

  return (
    <View style={[v.sectionContainer]}>
      <ForYouSectionHeader />
      <ProductListHorizontalScrollView />
    </View>
  );
}

function DiscountsSection() {
  return null;
}

function LastSeenSection() {
  return null;
}

function Home() {
  return (
    <>
      <TranslucentStatusBar />
      <MainScrollView>
        <LogoHeader />
        <UserHeader />
        <DiscoverSection />
        <FeaturedCollectionsSection />
        <OccasionSection />
        <FeaturedCollectionsSection />
        <ForYouSection />
        <ForYouSection />
        <ForYouSection />
        <DiscountsSection />
        <LastSeenSection />
      </MainScrollView>
    </>
  );
}

export default React.memo(Home);
