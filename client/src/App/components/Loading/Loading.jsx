import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from '../Loading/withSpinnerStyles';

const Loading = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Loading;
