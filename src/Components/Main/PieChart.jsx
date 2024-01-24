import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Onsite', 'Offsite', 'Baseline'],
    datasets: [
      {
        data: [76.38, 19.58, 4.04],
        backgroundColor: ['lightblue', '#FF9843', '#365486'],
        borderColor: 'black',
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          padding: 8,
          boxHeight: 8,
          boxWidth: 8,
        },
      },
    },
    layout: {
      padding: {
        top: 0,      // Adjust the top padding
        bottom: -200,   // Adjust the bottom padding
        left: 1,     // Adjust the left padding
        right: 1,    // Adjust the right padding
      },
    },
   
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h4 style={{ textAlign: 'left', maxWidth: '200px', maxHeight: '280px' }}>
       Sales Split of All Brands by Baseline vs Incremental Contribution
    </h4>
    <div style={{ width: '100%', maxWidth: '400px',height:'350px' }}>
       <Doughnut data={data} options={options} />
    </div>
 </div>
 
  );
};

export default PieChart;

