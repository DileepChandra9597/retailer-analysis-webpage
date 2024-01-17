import React, { useState } from 'react';
import { Table, Slider, InputNumber } from 'antd';

const AntdTable = () => {
  const [percentageValues, setPercentageValues] = useState({
    1: 10,
    12: 10,
    121: 10,
    122: 10,
    13: 10,
    131: 10,
    132: 10,
  });

  const data = [
    {
      key: 1,
      name: 'Brand: Magic',
      age: 37956439.26,
      percentage: percentageValues[1],
      address: 'New York',
      children: [
        {
          key: 12,
          name: 'Retailer: Amazon',
          age: 18238194.25,
          percentage: percentageValues[12],
          address: 'New',
          children: [
            {
              key: 121,
              name: 'SB - Branded',
              age: 1102378,
              percentage: percentageValues[121],
              address: 'New York ',
            },
            {
              key: 122,
              name: 'SB - Non Branded',
              age: 120674,
              percentage: percentageValues[122],
              address: 'New York ',
            },
          ],
        },
        {
          key: 13,
          name: 'Retailer: Walmart',
          age: 15198495,
          percentage: percentageValues[13],
          address: 'London No.',
          children: [
            {
              key: 131,
              name: 'SB - Branded',
              age: 918648,
              percentage: percentageValues[131],
              address: 'London No',
            },
            {
              key: 132,
              name: 'SB - Non Branded',
              age: 1556446,
              percentage: percentageValues[132],
              address: 'London No',
            },
          ],
        },
      ],
    },
  ];

  const columns = [
    {
      title: 'Budget Distribution',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
    },
    {
      title: 'Previous_Spends',
      dataIndex: 'age',
      key: 'age',
      width: '15%',
    },
    {
      title: 'Percentage',
      dataIndex: 'percentage',
      width: '20%',
      key: 'percentage',
      render: (text, record) => (
        <>
          <Slider
            min={-100}
            max={100}
            onChange={(value) => handleSliderChange(record.key, value)}
            value={percentageValues[record.key]}
            style={{ width: '70%', marginRight: '10px' }}
          />
          <InputNumber
            min={-100}
            max={100}
            style={{ width: '30%' }}
            value={percentageValues[record.key]}
            onChange={(value) => handleInputNumberChange(record.key, value)}
          />
        </>
      ),
    },
    {
      title: 'Absolute',
      dataIndex: 'absolute',
      width: '20%',
      key: 'absolute',
      render: (_, record) => {
        return calculateAbsolute(record.age, record.percentage).toFixed(2);
      },
    },
  ];

  const handleSliderChange = (key, value) => {
    setPercentageValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleInputNumberChange = (key, value) => {
    if (isNaN(value)) {
      return;
    }
    setPercentageValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const calculateAbsolute = (previousSpends, percentage) => {
    return (previousSpends * (100 + percentage)) / 100;
  };

  return (
    <>
    <div style={{ width: '50%', border: '1px solid #ccc', height: '250px' }}>
      <Table columns={columns} dataSource={data} style={{ marginBottom: 10, marginTop: 10 }} />
    </div>
    </>
  );
};

export default AntdTable;
