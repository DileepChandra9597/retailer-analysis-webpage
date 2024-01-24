import React, { useState, useEffect } from 'react';
import { Select, Space } from 'antd';
import BarChart from './Bar.jsx'; // Import the BarChart component
import filterData from './filterData.json';
import PieChart from './PieChart';
import HBar from './HBar';

const { Option } = Select;

const Filter = () => {
  // Load selected values from localStorage on component mount
  const getLocalStorageValue = (key) => JSON.parse(localStorage.getItem(key)) || [];

  const [selectedMarkets, setSelectedMarkets] = useState(getLocalStorageValue('selectedMarkets'));
  const [selectedRetailers, setSelectedRetailers] = useState(getLocalStorageValue('selectedRetailers'));
  const [selectedCategories, setSelectedCategories] = useState(getLocalStorageValue('selectedCategories'));
  const [selectedBrands, setSelectedBrands] = useState(getLocalStorageValue('selectedBrands'));
  const [brandArray, setBrandArray] = useState(getLocalStorageValue('brandArray'));
  const [selectedCategory, setSelectedCategory] = useState(getLocalStorageValue('selectedCategory'));

  useEffect(() => {
    // Save selected values to localStorage whenever they change
    localStorage.setItem('selectedMarkets', JSON.stringify(selectedMarkets));
    localStorage.setItem('selectedRetailers', JSON.stringify(selectedRetailers));
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    localStorage.setItem('selectedBrands', JSON.stringify(selectedBrands));
    localStorage.setItem('brandArray', JSON.stringify(brandArray));
    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory));
  }, [selectedMarkets, selectedRetailers, selectedCategories, selectedBrands, brandArray, selectedCategory]);

  const marketList = Object.keys(filterData.dropdown.markets);
  const retailerList = selectedMarkets.flatMap((market) => filterData.dropdown.markets[market].retailers);
  const categoryList = selectedRetailers.flatMap((retailer) => filterData.dropdown.retailers[retailer].categories);
  const brandList = selectedCategories.flatMap((category) => filterData.dropdown.categories[category]?.brands || []);

  const handleChange = (values, type) => {
    switch (type) {
      case 'market':
        setSelectedMarkets(values);
        break;
      case 'retailer':
        setSelectedRetailers(values);
        break;
      case 'category':
        setSelectedCategories(values);
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
  };



  return (
    <div>
      <Space direction="horizontal" style={{ background: '#3468C0', padding: '10px', width: '100%', overflowX: 'auto' }}>
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
          value={selectedMarkets}>
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
          value={selectedRetailers} >
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
          value={selectedCategories}>
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
          value={selectedBrands}>
          {brandList.map((brand) => (
            <Option key={brand.name} value={brand.name}>
              {brand.name}
            </Option>
          ))}
        </Select>
      </Space>
    </Space>
    <div style={{ display: 'flex',padding:'2px' }}>

        <div style={{ width: '40%', marginRight: '5px', border: '1px solid #ccc' }}>
          <BarChart selectedCategory={selectedCategory} selectedBrands={selectedBrands} filterData={filterData} updateBrandArray={handleSelectedData} />
        </div>

        <div style={{ width: '25%',paddingTop: '45px', paddingLeft: '5px', paddingRight: '5px',}}>
          <PieChart />
        </div>

        <div style={{ width: '35%', paddingRight: '0px',paddingTop: '45px', border: '1px solid #ccc'  }}>
          <HBar />
        </div>

      </div>
    </div>
  );
};

export default Filter;