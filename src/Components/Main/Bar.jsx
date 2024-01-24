import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import SmallBar from './NavBar2.jsx';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ selectedBrands = [], filterData }) => {
  const datasets = selectedBrands.map((brand) => ({
    label: brand,
    backgroundColor: 'white',
    borderColor: 'black',
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
        backgroundColor: '#365486',
        borderColor: 'black',
        borderWidth: 1,
        data: selectedBrands.map((brand) => filterData.barChartBrands[brand] ? filterData.barChartBrands[brand].previousCount : 0),
      },
      {
        label: 'Current Count',
        backgroundColor: 'lightblue',
        borderColor: 'black',
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
        suggestedMin: 0,
        suggestedMax: 140,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          padding: 8,
          boxHeight: 10,
          boxWidth: 10,
        },
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

  return (
    <div style={{ height: '400px' }}>
      <SmallBar style={{ paddingRight: '100px' }} />
      <h4 style={{ textAlign: 'center' }}>All Brand Sales - Selected Period vs Previous Period</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
