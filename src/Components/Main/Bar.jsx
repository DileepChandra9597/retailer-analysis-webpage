import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
    const data = {
      labels: ['Magic', 'Relay', 'Bear', 'Sporty', 'New Glow', 'SoftTouch'],
      datasets: [
        {
          label: 'Previous Period',
          data: [100, 200, 150, 300, 250, 190],
          backgroundColor: 'darkblue',
          borderColor: 'black',
          borderWidth: 1,
        },
        {
          label: 'Current Period',
          data: [300, 250, 190, 100, 200, 150],
          backgroundColor: 'lightblue',
          borderColor: 'black',
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      maintainAspectRatio: false, // Allow custom sizing
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
      aspectRatio: 1, // You may adjust this aspect ratio as needed
    };
  
    return (
      <div style={{ height: '400px' }}>
        <h4 style={{ textAlign: 'center' }}>All Brand Sales Selected Period vs Previous Period</h4>
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default BarChart;
  