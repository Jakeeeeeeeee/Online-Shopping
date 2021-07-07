import React from 'react';
import Loading from '../Loading/Loading';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
	  <Loading />
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default WithSpinner;
