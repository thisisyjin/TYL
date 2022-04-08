import React from 'react';
import withStyles, { css } from '../component/withStyles';

export default function (defaultMsg) {
  return (WrappedComponent) => {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function ComponentWithError({ hasError, errorMsg, styles, ...props }) {
      return (
        <>
          <WrappedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMsg}</div>}
        </>
      );
    }

    ComponentWithError.defaultProps = {
      errorMsg: defaultMsg,
    };

    ComponentWithError.displayName = `withError(${wrappedComponentName})`;
    return withStyles(({ color }) => ({
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}
