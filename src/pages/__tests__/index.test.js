import React from 'react';
import HomePage from '@pages';
import { render } from '@testing-library/react';

describe('Testing Homepage', () => {
  it('Should be rendered correctly', () => {
    const { debug } = render(<HomePage />);

    debug();
  });
});
