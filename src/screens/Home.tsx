import React from 'react';
import {MainScrollView} from '../components/atoms/MainScrollView';
import {TranslucentStatusBar} from '../components/atoms/TranslucentStatusBar';
import {AureLogoHeader} from '../components/molecules/AureLogoHeader';
import {UserHeader} from '../components/molecules/UserHeader';
import {DiscoverSection} from '../components/molecules/DiscoverSection';
import {FeaturedSection} from '../components/molecules/FeaturedSection';
import {OccasionSection} from '../components/molecules/OccasionSection';
import {ProductSection} from '../components/molecules/ProductSection';
import {Platform} from 'react-native';

//TODO: reuse base components like "ForYouSection"
export const Placeholder =
  'https://res.cloudinary.com/aure/image/upload/v1633370682/Chanel%20Thumbnails/Coco%20Crush/Anel_Coco_Crush_2_c25qxu.webp';

function Home() {
  return (
    <>
      {Platform.OS === 'android' ? <TranslucentStatusBar /> : null}
      <MainScrollView>
        <AureLogoHeader />
        <UserHeader />
        <DiscoverSection />
        <FeaturedSection
          title="Coleções em destaque"
          image="https://res.cloudinary.com/aure/image/upload/v1633439813/Home%20Thumbnails/Collection_dlws8t.webp"
          title2="Vivara"
          description="Coleção Vivara"
        />
        <OccasionSection />
        <FeaturedSection
          title="Marcas que inspiram"
          image="https://res.cloudinary.com/aure/image/upload/v1633437695/Home%20Thumbnails/Brand_u1ssaz.webp"
          title2="Tiffany & Co"
          description="Conheça joias sofisticadas, de beleza atemporal e perfeição artesanal, que serão apreciadas por toda a vida."
        />
        <ProductSection title="Joias para você" />
        <ProductSection title="Descontos imperdíveis" />
        <ProductSection title="Visto recentemente" />
      </MainScrollView>
    </>
  );
}

export default React.memo(Home);
