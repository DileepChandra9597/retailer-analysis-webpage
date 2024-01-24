import React from 'react';
import { Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink} from 'react-router-dom';

function Homepage() {


  const menuItems = [
    { key: 'rmo', icon: <ShoppingCartOutlined style={{ fontSize: '30px', height: '80%' }} />, text: 'Retail Media Optimization' },
    { key: 'overview', text: 'Overview',link: '/app' },
    { key: 'optimizer', text: 'Optimizer' },
    { key: 'brand-landscape', text: 'Brand Landscape', link: '/brandscape' },
    { key: 'simulator', text: 'Simulator' },
    { key: 'category', text: 'Category' },
    { key: 'campaign-planner', text: 'Campaign Planner' },
  ];

  return (
    <div className='bar'>
      <Menu mode='horizontal'>
        {menuItems.map(item => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            style={item.key === 'rmo' ? { pointerEvents: 'none', fontWeight: 'bold' } : {}}>
            {item.link ? <NavLink  to={item.link}>{item.text}</NavLink> : item.text}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default Homepage;
