import React from 'react';

import {
  Text,
  View,
  useWindowDimensions,
  Platform,
  StyleProp,
  Dimensions,
} from 'react-native';

import FastImage from 'react-native-fast-image';

import {useNavigation} from '@react-navigation/native';

import {ScrollView} from 'react-native-gesture-handler';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';

import {theme} from '../theme';

import {t, v, getHookedStyles} from '../styles';

import {TouchableFeedback} from '../components/atoms/TouchableFeedback';

import {ImageTouchableFeedback} from '../components/atoms/ImageTouchableFeedback';

export const Placeholder =
  'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/anel-de-noivado-tiffany-soleste-em-platina-com-lapidao-brilhante-61100415_995693_ED_M.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&';
interface Children {
  children?: JSX.Element[] | JSX.Element;
}

function TranslucentStatusBar() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  return <View style={[hs.translucentStatusBar]} />;
}

export function MainScrollView({children}: Children) {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
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
      <ImageTouchableFeedback
        style={[v.userAvatar]}
        source={Placeholder}
        onPress={() => {}}
      />
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
      <ImageTouchableFeedback
        source={Placeholder}
        style={[v.discoverCard]}
        shadow={[v.shadow]}
        pressColor={theme.colors.background}
        onPress={() => {}}
        styleInternal={{
          alignItems: 'flex-end',
          flexDirection: 'row-reverse',
        }}
        flex={1}>
        <Text style={[t.title, t.discoverCardTextAlignment]} numberOfLines={1}>
          Alianças
        </Text>
      </ImageTouchableFeedback>
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
      <ImageTouchableFeedback
        shadow={[v.shadow]}
        source={Placeholder}
        style={[v.featuredCollectionImage, v.shadow]}
        onPress={() => {}}
      />
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
      <ImageTouchableFeedback
        source={Placeholder}
        style={[v.occasionCard]}
        shadow={[v.shadow]}
        pressColor={theme.colors.background}
        onPress={() => {}}
        styleInternal={{
          alignItems: 'flex-end',
          flexDirection: 'row-reverse',
        }}
        flex={1}>
        <Text style={[t.title, t.discoverCardTextAlignment]} numberOfLines={1}>
          Formatura
        </Text>
      </ImageTouchableFeedback>
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
      {Platform.OS === 'android' ? <TranslucentStatusBar /> : null}
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
