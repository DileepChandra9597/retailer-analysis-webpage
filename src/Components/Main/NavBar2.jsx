import React from 'react';
import { Menu } from 'antd';

function SmallBar() {
  const menuItems = [
    { key: 'brandOverview', text: 'BrandOverview' },
    { key: 'brandDeepDive', text: 'BrandDeepDive' },
  ];

  return (
    <div className='bar'style={{paddingLeft:'1px',paddingRight:'40px'}}> 
    
      <Menu mode='horizontal'>
        {menuItems.map(item => (
          <Menu.Item 
          key={item.key}>
            {item.text}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default SmallBar;
