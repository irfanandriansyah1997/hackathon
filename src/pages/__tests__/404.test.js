import React from 'react';
import PageNotFound from '@pages/404';
import { render } from '@testing-library/react';

describe('Testing 404 Page', () => {
  it('Should be rendered correctly', () => {
    const { getByText } = render(<PageNotFound />);

    expect(getByText(/Oops page not found/)).toBeInTheDocument();
  });
});
