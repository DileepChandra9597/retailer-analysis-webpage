import React from "react";
import { Card, Space } from 'antd';
import NavBar from './NavBar'
function BrandScape() {
  return (
    <div>
    <NavBar/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', backgroundColor:'white' }}>
      <Space direction="vertical" size={16}>
        <Card title="Insights" style={{ width: 300, backgroundColor: 'lightblue', textAlign: 'center', minHeight: '10vh' }}>
          <p>Hi!! This is the BrandLandScape tab.</p>
        </Card>
      </Space>
    </div>
    </div>
  );
}

export default BrandScape;
