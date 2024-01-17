import React from 'react';
import { Bar } from 'react-chartjs-2';

const CardBar = () => {
  const data = {
    labels: ['Scenario 1', 'Scenario 2', 'Scenario 3', 'Scenario 4', 'Scenario 5'],
    datasets: [
      {
        label: 'Previous Period Volume',
        data: [29909449, 29909449, 29909449, 29909449, 29909449],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Simulated Volume',
        data: [32900394, 31003111, 30105827, 29107638, 27208544],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CardBar;