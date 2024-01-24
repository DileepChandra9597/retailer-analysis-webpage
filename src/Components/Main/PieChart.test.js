import React from 'react';
import { render } from '@testing-library/react';
import PieChart from './PieChart';

describe('PieChart Component', () => {
  it('renders without crashing', () => {
    render(<PieChart />);
  });
});
