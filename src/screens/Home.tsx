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
  'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/anel-de-noivado-tiffany-soleste-em-platina-com-lapidao-brilhante-61100415_995693_ED_M.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&';

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
