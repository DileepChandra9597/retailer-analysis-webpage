import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const HBar = () => {
  const data = {
    labels: ["Sponsored product_Non-Branded", "Sponsored Brand_Branded", "Sponsored Product_Branded", "YouTube","Sponsored Product_Conquest",  "Facebook","Sponsored Brand_Non_Branded","Sponsored Product_Auto",'Amazon Display',"Sponsored Product_Adjacent","Sponsored Display","Lightening Deal","Top_Deal","Coupons","Sponsored Brand_Video"],
    datasets: [
      {
        
        data: [30,25,19, 14, 12, 11, 9, 8,7,6,5,4,1,0.8,0.2],
        backgroundColor: '#365486',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`,
          fontSize: 5, // Adjust the font size of x-axis labels
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          fontSize: 2, // Adjust the font size of y-axis labels
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
        
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 0,
        right: 10,
      },
    },
    aspectRatio: 1.5,
  };
  

  return (
    <div style={{ height: '420px' }}>
      <h4 style={{ textAlign: 'center' }}>All Brand Sales Selected Period vs Previous Period</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HBar;

