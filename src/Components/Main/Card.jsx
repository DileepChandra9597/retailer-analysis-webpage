import React, { useState } from 'react';
import { Card, Button } from 'antd';
import CardBar from './CardBar';

const Cards = () => {
  const [isCardBarVisible, setIsCardBarVisible] = useState(false);

  const toggleCardBarVisibility = () => {
    setIsCardBarVisible((prevVisible) => !prevVisible);
  };

  return (
    <div style={{  width:'50%',marginLeft: '2%', marginBottom: '2%', border: '1px solid #ccc', padding: '2%' }}>
      <Card
        title="Volume Changes"
        bordered={false}
        style={{
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: '18px' }}>
          <h4 style={{ marginBottom: 0 }}>$1.3M</h4>
          <h4 style={{ marginBottom: 0 }}>$1.1M</h4>
          <h4 style={{ marginBottom: 0 }}>$890K</h4>
          <h4 style={{ marginBottom: 0 }}>$412K</h4>
          <h4 style={{ marginBottom: 0 }}>$102K</h4>
        </div>
      </Card>
      
      <Button
        type="primary"
        onClick={toggleCardBarVisibility}
        style={{
          marginTop: '10px',
          background: 'white',
          color: '#1890ff',
          borderColor: '#1890ff',
        }}
      >
        {isCardBarVisible ? '▲' : '▶'} CardBar
      </Button>

      {isCardBarVisible && <CardBar />}
    </div>
  );
};

export default Cards;