import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import regions from './fixtures/regions';

describe('Regions', () => {
  it('show all regions', () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <Regions
        regions={regions}
        onClick={handleClick}
      />,
    );

    regions.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();

      fireEvent.click(getByText(`${name}`));

      expect(handleClick).toBeCalled();
    });
  });
});
