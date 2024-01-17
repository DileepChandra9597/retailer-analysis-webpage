import React, { useState, useEffect } from 'react';
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

  const [absoluteValues, setAbsoluteValues] = useState({
    1: 37956439.26,
    12: 18238194.25,
    121: 1102378,
    122: 120674,
    13: 15198495,
    131: 918648,
    132: 1556446,
  });

  const data = [
    {
      key: 1,
      name: 'Brand: Magic',
      age: 37956439.26,
      percentage: percentageValues[1],
      absolute: absoluteValues[1],
      address: 'New York',
      children: [
        {
          key: 12,
          name: 'Retailer: Amazon',
          age: 18238194.25,
          percentage: percentageValues[12],
          absolute: absoluteValues[12],
          address: 'New',
          children: [
            {
              key: 121,
              name: 'SB - Branded',
              age: 1102378,
              percentage: percentageValues[121],
              absolute: absoluteValues[121],
              address: 'New York ',
            },
            {
              key: 122,
              name: 'SB - Non Branded',
              age: 120674,
              percentage: percentageValues[122],
              absolute: absoluteValues[122],
              address: 'New York ',
            },
          ],
        },
        {
          key: 13,
          name: 'Retailer: Walmart',
          age: 15198495,
          percentage: percentageValues[13],
          absolute: absoluteValues[13],
          address: 'London No.',
          children: [
            {
              key: 131,
              name: 'SB - Branded',
              age: 918648,
              percentage: percentageValues[131],
              absolute: absoluteValues[131],
              address: 'London No',
            },
            {
              key: 132,
              name: 'SB - Non Branded',
              age: 1556446,
              percentage: percentageValues[132],
              absolute: absoluteValues[132],
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
            min={0}
            max={100}
            onChange={(value) => handleSliderChange(record.key, value)}
            value={percentageValues[record.key]}
            style={{ width: '70%', marginRight: '10px' }}
          />
          <InputNumber
            min={0}
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
      render: (text, record) => (
        <>
          <Slider
            min={0}
            onChange={(value) => handleAbsoluteSliderChange(record.key, value)}
            value={absoluteValues[record.key]}
            style={{ width: '70%', marginRight: '10px' }}
          />
          <InputNumber
            min={0}
            style={{ width: '30%' }}
            value={absoluteValues[record.key]}
            onChange={(value) => handleAbsoluteInputNumberChange(record.key, value)}
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    updateAbsoluteValues();
  }, [percentageValues]);

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

  const handleAbsoluteSliderChange = (key, value) => {
    setAbsoluteValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleAbsoluteInputNumberChange = (key, value) => {
    if (isNaN(value)) {
      return;
    }
    setAbsoluteValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const updateAbsoluteValues = () => {
    const newAbsoluteValues = { ...absoluteValues };
    for (const key in percentageValues) {
      if (percentageValues.hasOwnProperty(key)) {
        newAbsoluteValues[key] = calculateAbsolute(data[0], key, percentageValues[key]);
      }
    }
    setAbsoluteValues(newAbsoluteValues);
  };

  const calculateAbsolute = (record, key, percentage) => {
    const previousSpends = record.key === key ? record.age : findPreviousSpends(record.children, key);
    return (previousSpends * (100 + percentage)) / 100;
  };

  const findPreviousSpends = (children, key) => {
    for (const child of children) {
      if (child.key === key) {
        return child.age;
      }
      if (child.children) {
        const result = findPreviousSpends(child.children, key);
        if (result !== null) {
          return result;
        }
      }
    }
    return null;
  };

  return (
    <>
      <Table columns={columns} dataSource={data} style={{ marginBottom: 16, marginTop: 50 }} />
    </>
  );
};

export default AntdTable;
