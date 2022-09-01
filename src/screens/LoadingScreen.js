import React from 'react';
import { Box, Layer, Spinner } from 'grommet';

const LoadingScreen = () => (
  <Layer animate="false" full>
    <Box fill justify="center" align="center" gap="medium">
      <Spinner />
    </Box>
  </Layer>
);

export default LoadingScreen;
