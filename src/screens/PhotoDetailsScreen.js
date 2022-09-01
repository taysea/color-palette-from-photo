import React from 'react';
import { Page, PageContent, Text } from 'grommet';
import { ImageList, Palette } from '../components';

const PhotoDetailsScreen = props => (
  <Page flex="grow">
    <PageContent gap="medium">
      <Palette {...props} />
      <Text size="large" textAlign="center" margin="none">
        still looking for something different?
      </Text>
      <ImageList {...props} />
    </PageContent>
  </Page>
);
export default PhotoDetailsScreen;
