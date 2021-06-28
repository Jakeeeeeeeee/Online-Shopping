import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './withSpinnerStyles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default WithSpinner;
