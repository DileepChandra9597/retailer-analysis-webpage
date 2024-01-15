import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['One', 'Two', 'Three'],
    datasets: [
      {
        data: [76.38, 19.58, 4.04],
        backgroundColor: ['lightblue', 'green', 'orange'],
        borderColor: 'black', // Add this line to set the border color
        borderWidth: 0.5, // Add this line to set the border width
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Allow custom sizing
    cutout: '40%',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
