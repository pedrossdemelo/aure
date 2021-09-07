import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context';
import AureLogo from '../assets/icons/AureLogo';

const primaryGradient = {
  100: '#F8F1EA',
  200: '#F2E6D8',
  300: '#EEDFCC',
  400: '#E0C8B0',
  500: '#D2B095',
  600: '#A68C7A',
  700: '#90786C',
  800: '#321A12',
};

const AureHeader = () => {
  return (
    <View
      style={{
        marginVertical: 16,
        alignItems: 'center',
      }}>
      <AureLogo />
    </View>
  );
};

const UserHeader = () => {
  const UserGreetings = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
          color: primaryGradient[800],
          lineHeight: 19 * 1.5,
          flex: 1,
        }}>
        Bom dia,{'\n'}
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 25,
            color: primaryGradient[800],
            lineHeight: 25 * 1.25,
          }}>
          Aurelia Stevens
        </Text>
      </Text>
    );
  };

  const UserProfilePic = () => {
    return (
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          backgroundColor: primaryGradient[200],
          marginLeft: 16,
        }}
      />
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        width: '100%',
        marginBottom: 8,
      }}>
      <UserGreetings />
      <UserProfilePic />
    </View>
  );
};

const Discover = () => {
  const DiscoverHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
          color: primaryGradient[800],
          lineHeight: 19 * 1.5,
          marginBottom: 4,
          marginHorizontal: 16,
        }}>
        Conheça
      </Text>
    );
  };

  const DiscoverCards = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row', aspectRatio: 4.16 / 1.6}}>
        <View
          style={{
            backgroundColor: primaryGradient[200],
            flex: 1,
            marginHorizontal: 8,
            borderRadius: 8,
            elevation: 2,
            shadowColor: '#D68F61',
            alignItems: 'flex-end',
            flexDirection: 'row-reverse',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 19,
              color: primaryGradient[800],
              lineHeight: 19 * 1.5,
              marginHorizontal: 8,
              textAlign: 'right',
            }}
            numberOfLines={1}>
            Alianças
          </Text>
        </View>
        <View
          style={{
            backgroundColor: primaryGradient[200],
            flex: 1,
            marginHorizontal: 8,
            borderRadius: 8,
            elevation: 2,
            shadowColor: '#D68F61',
            alignItems: 'flex-end',
            flexDirection: 'row-reverse',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 19,
              color: primaryGradient[800],
              lineHeight: 19 * 1.5,
              marginHorizontal: 8,
              textAlign: 'right',
            }}
            numberOfLines={1}>
            Homem
          </Text>
        </View>
        <View
          style={{
            backgroundColor: primaryGradient[200],
            flex: 1,
            marginHorizontal: 8,
            borderRadius: 8,
            elevation: 2,
            shadowColor: '#D68F61',
            alignItems: 'flex-end',
            flexDirection: 'row-reverse',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 19,
              color: primaryGradient[800],
              lineHeight: 19 * 1.5,
              marginHorizontal: 8,
              textAlign: 'right',
            }}
            numberOfLines={1}>
            Mulher
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        marginHorizontal: 8,
        marginBottom: 16,
      }}>
      <DiscoverHeader />
      <DiscoverCards />
    </View>
  );
};

const FeaturedCollections = () => {
  const FeaturedCollectionsHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
          color: primaryGradient[800],
          lineHeight: 19 * 1.5,
          flex: 1,
          marginBottom: 4,
          marginHorizontal: 8,
        }}>
        Coleções em destaque
      </Text>
    );
  };

  const FeaturedCollectionImage = () => {
    return (
      <View
        style={{
          flex: 1,
          aspectRatio: 4 / 3,
          backgroundColor: primaryGradient[200],
          borderRadius: 8,
          elevation: 2,
          shadowColor: '#D68F61',
        }}
      />
    );
  };

  const FeaturedCollectionsSelectionDots = () => {
    return (
      <View
        style={{
          marginTop: 11.4,
          marginBottom: 8.075,
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: primaryGradient[800],
            width: 6,
            height: 6,
            borderRadius: 3,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
      </View>
    );
  };

  const CollectionDescription = () => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 15,
            color: primaryGradient[800],
            lineHeight: 15 * 1.25,
            flex: 1,
            textAlign: 'center',
          }}>
          Vivara{'\n'}
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              fontSize: 13,
              color: primaryGradient[700],
              lineHeight: 13 * 1.2,
              flex: 1,
            }}>
            Coleção Vivara
          </Text>
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        marginHorizontal: 16,
        marginBottom: 16,
      }}>
      <FeaturedCollectionsHeader />
      <FeaturedCollectionImage />
      <FeaturedCollectionsSelectionDots />
      <CollectionDescription />
    </View>
  );
};

const OccasionSection = () => {
  const OccasionHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
          color: primaryGradient[800],
          lineHeight: 19 * 1.5,
          flex: 1,
          marginBottom: 4,
          marginHorizontal: 24,
        }}>
        Joias para toda ocasião
      </Text>
    );
  };
  const OccasionCards = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column', marginLeft: 8}}>
          <View
            style={{
              backgroundColor: primaryGradient[200],
              flex: 1,
              height: 80,
              marginHorizontal: 8,
              borderRadius: 8,
              elevation: 2,
              shadowColor: '#D68F61',
              alignItems: 'flex-end',
              flexDirection: 'row-reverse',
              marginBottom: 8,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 19,
                color: primaryGradient[800],
                lineHeight: 19 * 1.5,
                marginHorizontal: 8,
                textAlign: 'right',
              }}
              numberOfLines={1}>
              Formatura
            </Text>
          </View>
          <View
            style={{
              backgroundColor: primaryGradient[200],
              flex: 1,
              height: 80,
              marginHorizontal: 8,
              borderRadius: 8,
              elevation: 2,
              shadowColor: '#D68F61',
              alignItems: 'flex-end',
              flexDirection: 'row-reverse',
              marginTop: 8,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 19,
                color: primaryGradient[800],
                lineHeight: 19 * 1.5,
                marginHorizontal: 8,
                textAlign: 'right',
              }}
              numberOfLines={1}>
              Nascimento
            </Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', marginRight: 8}}>
          <View
            style={{
              backgroundColor: primaryGradient[200],
              flex: 1,
              height: 80,
              marginHorizontal: 8,
              borderRadius: 8,
              elevation: 2,
              shadowColor: '#D68F61',
              alignItems: 'flex-end',
              flexDirection: 'row-reverse',
              marginBottom: 8,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 19,
                color: primaryGradient[800],
                lineHeight: 19 * 1.5,
                marginHorizontal: 8,
                textAlign: 'right',
              }}
              numberOfLines={1}>
              Presentes
            </Text>
          </View>
          <View
            style={{
              backgroundColor: primaryGradient[200],
              flex: 1,
              height: 80,
              marginHorizontal: 8,
              borderRadius: 8,
              elevation: 2,
              shadowColor: '#D68F61',
              alignItems: 'flex-end',
              flexDirection: 'row-reverse',
              marginTop: 8,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 19,
                color: primaryGradient[800],
                lineHeight: 19 * 1.5,
                marginHorizontal: 8,
                textAlign: 'right',
              }}
              numberOfLines={1}>
              Bodas
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{marginBottom: 16}}>
      <OccasionHeader />
      <OccasionCards />
    </View>
  );
};

const FeaturedBrands = () => {
  const FeaturedBrandsHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
          color: primaryGradient[800],
          lineHeight: 19 * 1.5,
          flex: 1,
          marginBottom: 4,
          marginHorizontal: 8,
        }}>
        Marcas que inspiram
      </Text>
    );
  };

  const FeaturedBrandImage = () => {
    return (
      <View
        style={{
          flex: 1,
          aspectRatio: 4 / 3,
          backgroundColor: primaryGradient[200],
          borderRadius: 8,
          elevation: 2,
          shadowColor: '#D68F61',
        }}
      />
    );
  };

  const FeaturedBrandsSelectionDots = () => {
    return (
      <View
        style={{
          marginTop: 11.4,
          marginBottom: 8.075,
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: primaryGradient[800],
            width: 6,
            height: 6,
            borderRadius: 3,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
      </View>
    );
  };

  const BrandDescription = () => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 15,
            color: primaryGradient[800],
            lineHeight: 15 * 1.25,
            flex: 1,
            textAlign: 'center',
          }}>
          Saint Laurent{'\n'}
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              fontSize: 13,
              color: primaryGradient[700],
              lineHeight: 13 * 1.25,
              flex: 1,
            }}>
            Saint Laurent oferece uma ampla variedade de produtos de luxo,
            conheça as peças mais cobiçadas da marca
          </Text>
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        marginHorizontal: 16,
        marginBottom: 16,
      }}>
      <FeaturedBrandsHeader />
      <FeaturedBrandImage />
      <FeaturedBrandsSelectionDots />
      <BrandDescription />
    </View>
  );
};

const Product = () => {
  const window = useWindowDimensions();
  const ProductCard = () => {
    const ProductDiscountTag = () => null;
    const ProductFavoriteButton = () => null;
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderRadius: 8,
          elevation: 2,
          shadowColor: '#D68F61',
          aspectRatio: 5 / 4,
        }}>
        <ProductDiscountTag />
        <ProductFavoriteButton />
      </View>
    );
  };
  const ProductPrice = () => {
    const ProductOriginalPrice = () => null;
    const ProductCurrentPrice = () => {
      return (
        <Text
          style={{
            fontFamily: 'Lato-Bold',
            fontSize: 14,
            color: primaryGradient[800],
            lineHeight: 14 * 1.25,
            marginRight: 2,
          }}
          numberOfLines={1}>
          R$ 2400
        </Text>
      );
    };
    const ProductInstallmentPrice = () => {
      return (
        <Text
          style={{
            fontFamily: 'Lato-Regular',
            fontSize: 11,
            color: primaryGradient[800],
            lineHeight: 11 * 1.25,
            marginLeft: 2,
            textAlign: 'right',
            flex: 1,
          }}
          numberOfLines={1}>
          12x R$ 200
        </Text>
      );
    };
    return (
      <View
        style={{
          marginHorizontal: 4,
          marginTop: 6,
          marginBottom: 3.75,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ProductCurrentPrice />
        <ProductInstallmentPrice />
      </View>
    );
  };
  const ProductDescription = () => {
    return (
      <View style={{flex: 1, marginHorizontal: 4}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 15,
            color: primaryGradient[800],
            lineHeight: 15 * 1.25,
          }}
          numberOfLines={2}>
          Vivara{'\n'}
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              fontSize: 13,
              color: primaryGradient[700],
              lineHeight: 13 * 1.15,
            }}>
            Anel Vivara Diamantes Negros e uma descrição exageradamente grande
          </Text>
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        width: window.width * 0.5 - 20,
        marginHorizontal: 4,
      }}>
      <ProductCard />
      <ProductPrice />
      <ProductDescription />
    </View>
  );
};

const ForYouSection = () => {
  const ForYouSectionHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
          color: primaryGradient[800],
          lineHeight: 19 * 1.5,
          flex: 1,
          marginBottom: 4,
          marginHorizontal: 24,
        }}>
        Joias para você
      </Text>
    );
  };

  const ProductListHorizontalScrollView = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}>
        <View style={{marginHorizontal: 12, flexDirection: 'row'}}>
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
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, marginBottom: 16}}>
      <ForYouSectionHeader />
      <ProductListHorizontalScrollView />
    </View>
  );
};

const DiscountsSection = () => {
  const DiscountsSectionHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
          color: primaryGradient[800],
          lineHeight: 19 * 1.5,
          flex: 1,
          marginBottom: 4,
          marginHorizontal: 24,
        }}>
        Descontos imperdíveis
      </Text>
    );
  };

  const ProductListHorizontalScrollView = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}>
        <View style={{marginHorizontal: 12, flexDirection: 'row'}}>
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
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, marginBottom: 16}}>
      <DiscountsSectionHeader />
      <ProductListHorizontalScrollView />
    </View>
  );
};

const LastSeenSection = () => {
  const LastSeenSectionHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19,
          color: primaryGradient[800],
          lineHeight: 19 * 1.5,
          flex: 1,
          marginBottom: 4,
          marginHorizontal: 24,
        }}>
        Vistos por último
      </Text>
    );
  };

  const ProductListHorizontalScrollView = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}>
        <View style={{marginHorizontal: 12, flexDirection: 'row'}}>
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
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, marginBottom: 16}}>
      <LastSeenSectionHeader />
      <ProductListHorizontalScrollView />
    </View>
  );
};

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={{
        flex: 1,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        backgroundColor: primaryGradient[100],
        marginTop: insets.top,
        marginBottom: insets.bottom + 52 - 16,
      }}
      showsVerticalScrollIndicator={false}
      overScrollMode={'never'}>
      <AureHeader />
      <UserHeader />
      <Discover />
      <FeaturedCollections />
      <OccasionSection />
      <FeaturedBrands />
      <ForYouSection />
      <DiscountsSection />
      <LastSeenSection />
      <View style={{height: 16}} />
    </ScrollView>
  );
}
