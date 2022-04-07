import React from 'react';

export default function (loadingMsg = '로딩중') {
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      return isLoading ? loadingMsg : <WrappedComponent {...otherProps} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}
