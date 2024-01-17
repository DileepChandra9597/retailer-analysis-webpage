import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ selectedBrands = [], filterData }) => {
  const datasets = selectedBrands.map((brand) => ({
    label: brand,
    backgroundColor: `rgba(255, 99, 132, 0.2)`,
    borderColor: `rgba(255, 99, 132, 1)`,
    borderWidth: 1,
    data: [
      filterData.barChartBrands[brand] ? filterData.barChartBrands[brand].previousCount : 0,
      filterData.barChartBrands[brand] ? filterData.barChartBrands[brand].currentCount : 0,
    ],
  }));

  const data = {
    labels: selectedBrands,
    datasets: [
      {
        label: 'Previous Count',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: selectedBrands.map((brand) => filterData.barChartBrands[brand] ? filterData.barChartBrands[brand].previousCount : 0),
      },
      {
        label: 'Current Count',
        backgroundColor: 'rgba(155, 231, 91, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: selectedBrands.map((brand) => filterData.barChartBrands[brand] ? filterData.barChartBrands[brand].currentCount : 0),
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
    aspectRatio: 1,
  };

  useEffect(() => {
    console.log('Updating Bar Graph with:', selectedBrands);
  }, [selectedBrands]);

  return (
    <div style={{ height: '400px' }}>
      <h4 style={{ textAlign: 'center' }}>All Brand Sales - Selected Period vs Previous Period</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
