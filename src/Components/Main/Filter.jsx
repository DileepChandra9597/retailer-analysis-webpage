import React, { useState } from 'react';
import { Select, Space } from 'antd';
import BarChart from './Bar.jsx'; // Import the BarChart component
import filterData from './filterData.json';
import PieChart from './PieChart';
import HBar from './HBar';

const { Option } = Select;

const Filter = () => {
  const [selectedMarkets, setSelectedMarkets] = useState([]);
  const [selectedRetailers, setSelectedRetailers] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandArray, setBrandArray] = useState([]); // New state to store selected brand names
  const [selectedCategory, setSelectedCategory] = useState(''); // New state to store the selected category

  const marketList = Object.keys(filterData.dropdown.markets);
  const retailerList = selectedMarkets.flatMap((market) => filterData.dropdown.markets[market].retailers);
  const categoryList = selectedRetailers.flatMap((retailer) => filterData.dropdown.retailers[retailer].categories);

  // Update brandList based on the selected categories
  const brandList = selectedCategories.flatMap((category) => filterData.dropdown.categories[category]?.brands || []);

  const handleChange = (values, type) => {
    switch (type) {
      case 'market':
        setSelectedMarkets(values);
        setSelectedRetailers([]);
        setSelectedCategories([]);
        setSelectedBrands([]);
        break;
      case 'retailer':
        setSelectedRetailers(values);
        setSelectedCategories([]);
        setSelectedBrands([]);
        break;
      case 'category':
        setSelectedCategories(values);
        setSelectedBrands([]);
        break;
      case 'brand':
        const previouslySelectedBrands = selectedBrands.filter((brand) => values.includes(brand));
        const newlySelectedBrands = values.filter((brand) => !selectedBrands.includes(brand));

        setSelectedBrands(values);

        // Handle the selected data immediately after the brand selection
        handleSelectedData(previouslySelectedBrands, newlySelectedBrands);
        break;
      default:
        break;
    }
  };

  // Function to handle the selected data
  const handleSelectedData = (previouslySelectedBrands, newlySelectedBrands) => {
    // Update brandArray by removing the deselected brand names
    setBrandArray((prevBrandArray) => {
      const updatedArray = prevBrandArray.filter((brand) => !previouslySelectedBrands.includes(brand));

      // Add the newly selected brand names
      updatedArray.push(...newlySelectedBrands);

      return updatedArray;
    });
  }


  return (
    <div>
      <Space direction="horizontal" style={{ background: 'cornflowerblue', padding: '20px', width: '100%', overflowX: 'auto' }}>
      <Space direction="vertical">
        <div style={{ marginBottom: '0px', marginLeft: '10px' }}>
          <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Market</p>
        </div>
        <Select
          mode="multiple"
          maxTagCount={1}
          style={{ width: '170px', marginTop: '0px', marginRight: '10px' }}
          placeholder="All Markets"
          onChange={(values) => handleChange(values, 'market')}
        >
          {marketList.map((market) => (
            <Option key={market} value={market}>
              {market}
            </Option>
          ))}
        </Select>
      </Space>
      <Space direction="vertical">
        <div style={{ marginBottom: '0px', marginLeft: '10px' }}>
          <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Retailer</p>
        </div>
        <Select
          mode="multiple"
          maxTagCount={1}
          allowClear
          style={{ width: '180px', marginTop: '0px', marginRight: '10px' }}
          placeholder="All Retailers"
          onChange={(values) => handleChange(values, 'retailer')}
        >
          {retailerList.map((retailer) => (
            <Option key={retailer} value={retailer}>
              {retailer}
            </Option>
          ))}
        </Select>
      </Space>
      <Space direction="vertical">
        <div style={{ marginBottom: '0px', marginLeft: '10px' }}>
          <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Category</p>
        </div>
        <Select
          mode="multiple"
          maxTagCount={1}
          allowClear
          style={{ width: '200px', marginRight: '10px' }}
          placeholder="All Categories"
          onChange={(values) => handleChange(values, 'category')}
        >
          {categoryList.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Space>
      <Space direction="vertical">
        <div style={{ marginBottom: '0px', marginLeft: '10px' }}>
          <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>Brand</p>
        </div>
        <Select
          mode="multiple"
          maxTagCount={1}
          allowClear
          style={{ width: '200px', marginTop: '0px', marginRight: '10px' }}
          placeholder="All Brands"
          onChange={(values) => handleChange(values, 'brand')}
          onDeselect={(value) => handleChange(selectedBrands.filter((brand) => brand !== value), 'brand')}
        >
          {brandList.map((brand) => (
            <Option key={brand.name} value={brand.name}>
              {brand.name}
            </Option>
          ))}
        </Select>
      </Space>
    </Space>
    <div style={{ display: 'flex', marginTop: '50px' }}>
        <div style={{ width: '40%', marginRight: '20px', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
          <BarChart selectedCategory={selectedCategory} selectedBrands={selectedBrands} filterData={filterData} updateBrandArray={handleSelectedData} />
        </div>
        <div style={{ width: '25%', paddingLeft: '20px', marginRight: '20px', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
          <PieChart />
        </div>
        <div style={{ width: '35%', paddingRight: '20px' }}>
          <HBar />
        </div>
      </div>
    </div>
  );
};

export default Filter;