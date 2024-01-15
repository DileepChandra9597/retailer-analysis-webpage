import React from 'react';
import { Select, Space } from 'antd';
import filterData from './filterData.json';

const { Option } = Select;

const Filter = () => {
  // Accessing the JSON data
  const marketList = filterData._result.marketList;
  const retailerList = filterData._result.retailerList;
  const categoryList = filterData._result.categoryList;
  const brandList = filterData._result.brandList;

  const handleChange = (values) => {
    console.log('Selected values:', values);
  };

  return (
    /* Filter section code */
    <Space direction='horizontal' style={{ background: 'cornflowerblue', padding: '20px', width: '100%' }}>
      <Space direction='vertical'>
        <div style={{ marginBottom: '0px', marginLeft: '10px' }}>
          <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Market</p>
        </div>
        <Select
          mode="multiple"
          style={{ width: '120px', marginTop: '0px', marginRight: '10px' }}
          placeholder="All Markets"
          onChange={handleChange}
        >
          {marketList.map((market) => (
            <Option key={market.value} value={market.value}>
              {market.label}
            </Option>
          ))}
        </Select>
      </Space>
      <Space direction='vertical'>
        <div style={{ marginBottom: '0px', marginLeft: '10px' }}>
          <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Retailer</p>
        </div>
        <Select
          mode="multiple"
          style={{ width: '120px', marginTop: '0px', marginRight: '10px' }}
          placeholder="All Retailers"
          onChange={handleChange}
        >
          {retailerList.map((retailer) => (
            <Option key={retailer.value} value={retailer.value}>
              {retailer.label}
            </Option>
          ))}
        </Select>
      </Space>
      <Space direction='vertical'>
        <div style={{ marginBottom: '0px', marginLeft: '10px' }}>
          <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Category</p>
        </div>
        <Select
          mode="multiple"
          style={{ width: '120px', marginTop: '0px', marginRight: '10px' }}
          placeholder="All Categories"
          onChange={handleChange}
        >
          {categoryList.map((category) => (
            <Option key={category.value} value={category.value}>
              {category.label}
            </Option>
          ))}
        </Select>
      </Space>
      <Space direction='vertical'>
        <div style={{ marginBottom: '0px', marginLeft: '10px' }}>
          <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Brand</p>
        </div>
        <Select
          mode="multiple"
          style={{ width: '120px', marginTop: '0px', marginRight: '10px' }}
          placeholder="All Brands"
          onChange={handleChange}
        >
          {brandList.map((brand) => (
            <Option key={brand.value} value={brand.value}>
              {brand.label}
            </Option>
          ))}
        </Select>
      </Space>
    </Space>
  );
};

export default Filter;
