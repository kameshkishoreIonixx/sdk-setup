import React from 'react';
import { Button } from '@mui/material';
import { Button as ButtonComp } from '@mojito-sdk/component';
import { render, act, simulate } from '../../test.utils';

describe('Button', () => {
  it('should have a 1 Button', () => {
    const onClick: any = jest.fn();
    const wrapper = render(<ButtonComp title="Test" variant="contained" onClick={ onClick } />);
    const testInstance = wrapper.root;
    expect(testInstance.findAllByType(Button)).toHaveLength(1);
  });
});
