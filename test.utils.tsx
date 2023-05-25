import { type ReactTestRenderer, create, type TestRendererOptions } from 'react-test-renderer';
import React, { type ReactElement } from 'react';

const RootProviders = (children: ReactElement, options?: TestRendererOptions): ReactTestRenderer => {
  return create(<>{ children }</>, options);
};

export * from '@testing-library/react';

export const simulate = (element: any, event: string, arg?: any) => {
  element.props[event](arg);
};

export { RootProviders as render };
