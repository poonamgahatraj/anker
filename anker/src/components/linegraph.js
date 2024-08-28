import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register components with Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export default function LineGraph() {
  const data = {
    labels: ['Nov 5', 'Nov 10', 'Nov 15', 'Nov 20'], // X-axis labels
    datasets: [
      {
        label: '(Numbers based on date)',
        data: [60, 170, 150, 170], // Corresponding Y-axis values
        backgroundColor: 'rgba(87, 127, 189, 0.5)',
        borderColor: '#577FBD',
        borderWidth: 2,
        fill: false, // No fill under the line
        tension: 0.3, // Add a slight curve to the lines
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        beginAtZero: false, // Start Y-axis at a specific value instead of 0
        min: 0, // Set minimum Y-axis value
        max: 350, // Set maximum Y-axis value
        title: {
          display: true,
          text: '(Number based on active user login)', // Y-axis label
        },
        ticks: {
          stepSize: 50, // Increase stepSize for larger gaps between Y-axis values
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Active User Login',
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} style={{ width: '600px', height: '450px' }} />
    </>
  );
}
