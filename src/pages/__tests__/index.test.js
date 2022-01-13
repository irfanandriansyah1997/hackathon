import React from 'react';
import HomePage from '@pages';
import { render } from '@testing-library/react';

describe('Testing Homepage', () => {
  it('Should be rendered correctly', () => {
    const { getByText } = render(<HomePage />);

    expect(getByText(/Hello World/)).toBeInTheDocument();
  });
});
