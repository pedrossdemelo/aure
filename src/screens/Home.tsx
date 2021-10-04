import React from 'react';
import {MainScrollView} from '../components/atoms/MainScrollView';
import {TranslucentStatusBar} from '../components/atoms/TranslucentStatusBar';
import {AureLogoHeader} from '../components/molecules/AureLogoHeader';
import {UserHeader} from '../components/molecules/UserHeader';
import {DiscoverSection} from '../components/molecules/DiscoverSection';
import {FeaturedCollectionsSection} from '../components/molecules/FeaturedCollectionsSection';
import {OccasionSection} from '../components/molecules/OccasionSection';
import {ForYouSection} from '../components/molecules/ForYouSection';
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
        <FeaturedCollectionsSection />
        <OccasionSection />
        <FeaturedCollectionsSection />
        <ForYouSection />
        <ForYouSection />
        <ForYouSection />
      </MainScrollView>
    </>
  );
}

export default React.memo(Home);
