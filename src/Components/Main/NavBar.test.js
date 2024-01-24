import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './NavBar';

test('renders Homepage component with menu items', () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );

  // Assert that each menu item is present in the rendered component
  const menuItems = [
    'Retail Media Optimization',
    'Overview',
    'Optimizer',
    'Brand Landscape',
    'Simulator',
    'Category',
    'Campaign Planner',
  ];

  menuItems.forEach((menuItem) => {
    const link = screen.queryByText(menuItem);
    expect(link).toBeInTheDocument();
  });
});

test('renders menu items with correct links', () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  // Assert that each menu item with a link has the correct link
  const menuItemsWithLinks = [
    { text: 'Overview', link: '/app' },
    { text: 'Brand Landscape', link: '/brandscape' },
  ];

  menuItemsWithLinks.forEach((menuItem) => {
    const link = screen.getByText(menuItem.text).closest('a');
    expect(link).toHaveAttribute('href', menuItem.link);
  });
});
